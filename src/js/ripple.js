export function initRippleCanvas(canvas) {
  if (!canvas) return;

  const gl =
    canvas.getContext('webgl', { antialias: true, alpha: false }) ||
    canvas.getContext('experimental-webgl');

  if (!gl) {
    canvas.style.background = 'linear-gradient(180deg,#0d1418,#0a0d10)';
    return;
  }

  const vertSrc = `
    attribute vec2 aPos;
    void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }
  `;

  const MAX_DROPS = 12;

  const fragSrc = `
    precision highp float;
    uniform vec2  uResolution;
    uniform float uTime;
    uniform vec2  uDrops[${MAX_DROPS}];
    uniform float uDropTimes[${MAX_DROPS}];
    uniform vec3  uColorDeep;
    uniform vec3  uColorMid;
    uniform vec3  uColorTeal;

    float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
    float noise(vec2 p){
      vec2 i = floor(p); vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0,0.0));
      float c = hash(i + vec2(0.0,1.0));
      float d = hash(i + vec2(1.0,1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
    }

    void main(){
      vec2 uv = gl_FragCoord.xy / uResolution.xy;
      float aspect = uResolution.x / uResolution.y;
      vec2 p = uv; p.x *= aspect;

      float swell = sin((uv.x*2.2 + uTime*0.05)) * 0.5 + sin((uv.y*3.1 - uTime*0.035)) * 0.5;
      float grain = noise(p*3.2 + uTime*0.02) * 0.06;

      float displacement = 0.0;
      float highlight = 0.0;
      for (int i = 0; i < ${MAX_DROPS}; i++){
        vec2 drop = uDrops[i];
        if (drop.x < -5.0) continue;
        vec2 dp = p - vec2(drop.x*aspect, drop.y);
        float dist = length(dp);
        float age = uTime - uDropTimes[i];
        if (age < 0.0 || age > 2.6) continue;
        float radius = age * 0.55;
        float ring = smoothstep(0.09, 0.0, abs(dist - radius));
        float fade = smoothstep(2.6, 0.0, age);
        displacement += ring * fade * 0.035;
        highlight += ring * fade * 0.9;
      }

      vec2 distortedUv = uv + vec2(swell*0.004) + displacement;
      float g = clamp(distortedUv.y + grain, 0.0, 1.0);
      vec3 col = mix(uColorDeep, uColorMid, pow(g, 1.4));

      float bands = sin((distortedUv.x*8.0 + distortedUv.y*4.0 + uTime*0.12)) * 0.5 + 0.5;
      col += uColorTeal * bands * 0.025;
      col += uColorTeal * highlight * 0.55;

      float vig = smoothstep(1.1, 0.25, distance(uv, vec2(0.5)));
      col *= mix(0.55, 1.0, vig);
      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }

  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertSrc));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragSrc));
  gl.linkProgram(program);
  gl.useProgram(program);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uResolution = gl.getUniformLocation(program, 'uResolution');
  const uTime      = gl.getUniformLocation(program, 'uTime');
  const uDrops     = gl.getUniformLocation(program, 'uDrops');
  const uDropTimes = gl.getUniformLocation(program, 'uDropTimes');
  const uColorDeep = gl.getUniformLocation(program, 'uColorDeep');
  const uColorMid  = gl.getUniformLocation(program, 'uColorMid');
  const uColorTeal = gl.getUniformLocation(program, 'uColorTeal');

  gl.uniform3f(uColorDeep, 10/255, 13/255, 16/255);
  gl.uniform3f(uColorMid,  19/255, 33/255, 34/255);
  gl.uniform3f(uColorTeal, 55/255, 214/255, 196/255);

  const drops     = new Float32Array(MAX_DROPS * 2).fill(-99);
  const dropTimes = new Float32Array(MAX_DROPS).fill(-99);
  let dropCursor  = 0;
  const startTime = performance.now();
  let lastAutoDrop = 0;
  let rafId;

  function addDrop(nx, ny) {
    drops[dropCursor * 2]     = nx;
    drops[dropCursor * 2 + 1] = ny;
    dropTimes[dropCursor]     = (performance.now() - startTime) / 1000;
    dropCursor = (dropCursor + 1) % MAX_DROPS;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = canvas.clientWidth  * dpr;
    canvas.height = canvas.clientHeight * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener('resize', resize);
  resize();

  function pointerToUv(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    return [(clientX - rect.left) / rect.width, 1 - (clientY - rect.top) / rect.height];
  }

  let lastMoveDrop = 0;
  const onMove = (e) => {
    const now = performance.now();
    if (now - lastMoveDrop < 90) return;
    lastMoveDrop = now;
    const [nx, ny] = pointerToUv(e.clientX, e.clientY);
    addDrop(nx, ny);
  };
  const onDown = (e) => {
    const [nx, ny] = pointerToUv(e.clientX, e.clientY);
    addDrop(nx, ny);
  };
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerdown', onDown);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function render() {
    const t = (performance.now() - startTime) / 1000;
    if (t - lastAutoDrop > 3.2) {
      lastAutoDrop = t;
      addDrop(0.15 + Math.random() * 0.7, 0.15 + Math.random() * 0.7);
    }
    gl.uniform1f(uTime, t);
    gl.uniform2f(uResolution, canvas.width, canvas.height);
    gl.uniform2fv(uDrops, drops);
    gl.uniform1fv(uDropTimes, dropTimes);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    rafId = requestAnimationFrame(render);
  }

  if (!prefersReduced) {
    rafId = requestAnimationFrame(render);
  } else {
    gl.uniform1f(uTime, 0.4);
    gl.uniform2f(uResolution, canvas.width, canvas.height);
    gl.uniform2fv(uDrops, drops);
    gl.uniform1fv(uDropTimes, dropTimes);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
    canvas.removeEventListener('pointermove', onMove);
    canvas.removeEventListener('pointerdown', onDown);
  };
}

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

function CSSBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden css-bg">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <style>{`
        .css-bg {
          background: hsl(220, 20%, 6%);
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: float linear infinite;
        }
        .orb-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, hsl(252, 100%, 65%), transparent 70%);
          top: -150px; left: -100px;
          animation-duration: 18s;
          animation-name: float1;
        }
        .orb-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, hsl(220, 80%, 50%), transparent 70%);
          bottom: -100px; right: 10%;
          animation-duration: 22s;
          animation-name: float2;
        }
        .orb-3 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, hsl(280, 90%, 60%), transparent 70%);
          top: 40%; left: 55%;
          animation-duration: 26s;
          animation-name: float3;
          opacity: 0.25;
        }
        .orb-4 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, hsl(200, 100%, 55%), transparent 70%);
          top: 20%; right: 5%;
          animation-duration: 20s;
          animation-name: float4;
          opacity: 0.2;
        }
        @keyframes float1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(60px, 80px) scale(1.05); }
          66%  { transform: translate(-40px, 40px) scale(0.97); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(-80px, -50px) scale(1.08); }
          66%  { transform: translate(50px, -30px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(-60px, 80px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float4 {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(70px, -60px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
}

function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uResolution;
      varying vec2 vUv;

      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m; m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        uv.x *= uResolution.x / uResolution.y;
        uv -= uMouse * 0.05;

        vec2 noiseUv = uv * 1.5 + uTime * 0.1;
        float n = snoise(noiseUv) * 0.5 + 0.5;
        float n2 = snoise(uv * 3.0 - uTime * 0.05) * 0.5 + 0.5;

        vec3 bg = vec3(0.05, 0.06, 0.08);
        vec3 color1 = vec3(0.1, 0.1, 0.2);
        vec3 color2 = vec3(0.6, 0.4, 1.0) * n;
        vec3 color3 = vec3(0.2, 0.0, 0.5) * n2;

        vec3 finalColor = mix(bg, color1, n2);
        finalColor += color2 * 0.3;
        finalColor += color3 * 0.2;

        float mouseDist = length(uv - uMouse * vec2(uResolution.x/uResolution.y, 1.0) - vec2(0.5 * uResolution.x/uResolution.y, 0.5));
        float glow = smoothstep(0.8, 0.0, mouseDist) * 0.15;
        finalColor += vec3(0.5, 0.3, 0.9) * glow;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const uniforms = {
      uTime: { value: 0.0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    };

    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, transparent: true });
    const geometry = new THREE.PlaneGeometry(20, 20);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let mouseX = 0, mouseY = 0, targetMouseX = 0, targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    let time = 0;
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      time += 0.01;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      uniforms.uTime.value = time;
      uniforms.uMouse.value.set(mouseX, mouseY);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(reqId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none" />;
}

export function BackgroundScene() {
  const [webglSupported] = useState(() => isWebGLAvailable());
  return webglSupported ? <WebGLBackground /> : <CSSBackground />;
}

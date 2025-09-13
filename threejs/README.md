---

## 🌐 Implementación en Three.js (React Three Fiber)

### Herramientas usadas
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) → renderizado 3D en React.
- [Drei](https://github.com/pmndrs/drei) → utilidades como `OrbitControls`.
- [Three.js](https://threejs.org/) → motor gráfico 3D.

### Descripción
1. Se creó un proyecto React con Vite.
2. Se agregó un cubo (`boxGeometry`) en la escena.
3. Se aplicaron animaciones con el hook `useFrame`:
   - Rotación continua (`mesh.rotation`).
   - Traslación circular (`Math.sin`, `Math.cos`).
   - Escalado oscilante (`Math.sin(clock.elapsedTime)`).
4. Se añadieron controles de cámara (`OrbitControls`).

### Captura de ejemplo
_(Incluye aquí una captura del cubo animado)_  

### Código relevante
```jsx
useFrame((state) => {
  const t = state.clock.getElapsedTime();
  mesh.current.rotation.x = t;
  mesh.current.position.x = Math.sin(t) * 2;
});

#  Taller 0 - Transformaciones Básicas en Computación Visual

## Objetivo
Explorar los conceptos fundamentales de transformaciones geométricas 
(**traslación, rotación y escala**) en diferentes entornos de programación visual.  
Cada implementación aplica transformaciones estáticas y animadas en función del tiempo.

---

##  Implementación en Python

### Herramientas usadas
- [Matplotlib](https://matplotlib.org/) → para graficar figuras 2D.  
- [NumPy](https://numpy.org/) → para operaciones con matrices de transformación.  
- [ImageIO](https://imageio.readthedocs.io/) → para generar GIF animados.  

### Descripción
1. Figura base: **cuadrado en coordenadas homogéneas**.  
2. Implementación de matrices de transformación:
   - Traslación
   - Rotación
   - Escalado
3. Bucle dependiente del tiempo `t`:  
   - Rotación creciente.  
   - Traslación oscilante (`sin`, `cos`).  
   - Escalado dinámico con `sin`.  
4. Exportación como **GIF animado**.  

### Captura de ejemplo



### Código relevante
```python
transform = translation_matrix(tx, ty) @ rotation_matrix(angle) @ scale_matrix(scale, scale)
transformed_square = square @ transform.T
```

### Resultados
- El cuadrado rota continuamente.  
- Se desplaza en una trayectoria oscilante.  
- Cambia su escala dinámicamente.  
- El GIF final muestra la combinación de las tres transformaciones.  

---

##  Implementación en Three.js (React Three Fiber)

### Herramientas usadas
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)  
- [Drei](https://github.com/pmndrs/drei)  
- [Three.js](https://threejs.org/)  

### Descripción
1. Proyecto React con Vite.  
2. Escena con cubo (`boxGeometry`).  
3. Animaciones con `useFrame`:  
   - Rotación continua.  
   - Traslación circular (`sin`, `cos`).  
   - Escalado oscilante.  
4. Controles de cámara con **OrbitControls**.  




### Código relevante
```jsx
useFrame((state) => {
  const t = state.clock.getElapsedTime();
  mesh.current.rotation.x = t;
  mesh.current.position.x = Math.sin(t) * 2;
});
```

### Resultados
- El cubo rota en `x` y `y`.  
- Describe una trayectoria circular.  
- Escala oscilante con efecto de “respiración”.  
- Interacción del usuario con OrbitControls.  

---

## Implementación en Processing (2D)

### Herramientas usadas


### Descripción
1. Sketch en 2D.  
2. Figuras: `rect` (2D) .  
3. Transformaciones animadas:
   - Traslación en círculo (`sin`, `cos`).  
   - Rotación (`rotate`, `rotateX`, `rotateY`).  
   - Escalado dinámico con `sin`.  
4. Uso de `pushMatrix()` y `popMatrix()` para aislar transformaciones.  

### Captura de ejemplo


### Código relevante
```java
float t = millis() / 1000.0;
translate(width/2 + sin(t)*100, height/2 + cos(t)*100);
rotate(t);
scale(1 + 0.5*sin(t*2));
rect(0, 0, 100, 100);
```

### Resultados
- **2D:** cuadrado que rota, se traslada en círculo y cambia de escala.  
 

La combinación de `translate()`, `rotate()` y `scale()` permite observar la interacción de varias transformaciones simultáneamente.  

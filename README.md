# 🧪 Taller 1 - Transformaciones Básicas en Computación Visual

## 🔍 Objetivo
Explorar los conceptos fundamentales de transformaciones geométricas 
(**traslación, rotación y escala**) en diferentes entornos de programación visual.  
Cada implementación aplica transformaciones estáticas y animadas en función del tiempo.

---

## 💻 Implementación en Python

### Herramientas usadas
- [Matplotlib](https://matplotlib.org/) → para graficar figuras 2D.
- [NumPy](https://numpy.org/) → para operaciones con matrices de transformación.
- [ImageIO](https://imageio.readthedocs.io/) → para generar GIF animados.

### Descripción
1. Se definió una figura base (un **cuadrado** en coordenadas homogéneas).  
2. Se implementaron las **matrices de transformación**:
   - Traslación
   - Rotación
   - Escalado
3. Se aplicaron en un bucle dependiente del tiempo `t`:
   - Rotación creciente en cada frame.
   - Traslación oscilante con funciones seno y coseno.
   - Escalado dinámico con una función seno.
4. Se exportó el resultado como **GIF animado**.

### Captura de ejemplo
_(Incluye aquí el GIF generado por tu notebook)_  

![GIF Ejemplo](./python/transformations.gif)

### Código relevante
```python
transform = translation_matrix(tx, ty) @ rotation_matrix(angle) @ scale_matrix(scale, scale)
transformed_square = square @ transform.T

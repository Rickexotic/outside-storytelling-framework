# Renderer Contract V1

## Objetivo

El Renderer Contract V1 define la interfaz obligatoria que deben implementar todos los renderers del framework.

Su propósito es garantizar que:

- Todas las escenas se comporten de forma consistente.
- El motor pueda controlar cualquier escena sin conocer detalles internos.
- Nuevos tipos de escena puedan incorporarse sin modificar los engines.
- La lógica narrativa permanezca separada de la visualización.

---

# Principios

## 1. El renderer no contiene lógica de negocio

No debe:

- Consultar Excel.
- Consultar APIs.
- Calcular KPIs.
- Decidir narrativa.

El renderer sólo:

```text
Recibe datos
↓
Construye visualización
↓
Responde a cambios de estado
```

---

## 2. El renderer no controla el scroll

El scroll pertenece a:

```text
Scene Engine
State Engine
Transition Engine
```

---

## 3. El renderer es reemplazable

La misma escena debe poder renderizarse mediante:

- HTML
- React
- PDF
- PowerPoint
- Canvas

sin modificar el JSON de presentación.

---

# Base Renderer

Todos los renderers deben implementar esta interfaz.

```javascript
class Renderer {

  constructor(scene, context) {}

  render() {}

  enter() {}

  update(state) {}

  exit() {}

  destroy() {}

}
```

---

# Método: constructor()

## Objetivo

Recibir el contexto de ejecución.

## Firma

```javascript
constructor(scene, context)
```

## Parámetros

### scene

Configuración de la escena.

### context

Información global del framework.

```javascript
{
  data,
  theme,
  viewport,
  engine,
  config
}
```

---

# Método: render()

## Objetivo

Construir el DOM inicial.

## Responsabilidades

✅ Crear componentes

✅ Crear contenedores

✅ Aplicar estructura visual

✅ Generar layout

---

## Restricciones

❌ No animar

❌ No cambiar estados

❌ No controlar navegación

---

## Retorno esperado

```javascript
HTMLElement
```

---

# Método: enter()

## Objetivo

Activar la escena cuando se vuelve visible.

## Responsabilidades

✅ Lanzar animaciones iniciales

✅ Activar observadores

✅ Iniciar efectos visuales

---

## Behaviors típicos

```text
Reveal
Fade
Parallax
Focus
```

---

# Método: update(state)

## Objetivo

Responder a un cambio de estado.

## Responsabilidades

✅ Transformar elementos existentes

✅ Actualizar contenido

✅ Ejecutar transiciones

---

## Restricciones

❌ No reconstruir la escena completa

❌ No destruir elementos innecesariamente

---

## Regla principal

Siempre que sea posible:

```text
Transformar
```

en lugar de:

```text
Eliminar + Crear
```

---

# Método: exit()

## Objetivo

Preparar la salida de la escena.

## Responsabilidades

✅ Reducir protagonismo

✅ Detener observadores

✅ Preparar transición

---

## Behaviors típicos

```text
Fade
Blur
Dim
```

---

# Método: destroy()

## Objetivo

Liberar recursos.

## Responsabilidades

✅ Eliminar listeners

✅ Eliminar timers

✅ Eliminar observers

✅ Eliminar elementos temporales

---

# Context Contract

Todos los renderers reciben:

```javascript
{
  scene,
  data,
  theme,
  viewport,
  engine,
  config
}
```

---

# Renderer Output Contract

Todos los renderers deben devolver una estructura consistente.

```javascript
{
  root,
  states,
  transitions,
  metadata
}
```

---

# Hero Renderer

## Tipo

```json
{
  "type": "hero-scene"
}
```

---

## Objetivo

Capturar atención.

---

## Contenido esperado

- Headline
- Subheadline
- Imagen opcional
- Quote opcional

---

## Behaviors permitidos

```text
Reveal
Focus
Transform
Parallax
```

---

## Casos de uso

```text
Apertura
Concept Reveal
Big Idea
Cierre
```

---

# Timeline Renderer

## Tipo

```json
{
  "type": "timeline-scene"
}
```

---

## Objetivo

Visualizar evolución temporal.

---

## Input

```json
{
  "events": []
}
```

---

## Behaviors permitidos

```text
Journey
Reveal
```

---

# Chapter Renderer

## Tipo

```json
{
  "type": "chapter-scene"
}
```

---

## Objetivo

Separar capítulos narrativos.

---

## Behaviors permitidos

```text
Pin
Reveal
```

---

# Data Renderer

## Tipo

```json
{
  "type": "data-scene"
}
```

---

## Objetivo

Transformar datos en comprensión.

---

## Visualizaciones posibles

```text
KPI
Bar Chart
Line Chart
Scatter Plot
Treemap
Heatmap
Bubble Chart
```

---

## Behaviors permitidos

```text
Expand
Transform
Focus
Grow
```

---

## Restricción

Nunca mostrar tablas crudas.

---

# Map Renderer

## Tipo

```json
{
  "type": "map-scene"
}
```

---

## Objetivo

Visualizar información geográfica.

---

## Tecnologías sugeridas

```text
SVG
Leaflet
Mapbox
D3 Geo
```

---

## Behaviors permitidos

```text
Travel
Focus
Reveal
```

---

# Insight Renderer

## Tipo

```json
{
  "type": "insight-scene"
}
```

---

## Objetivo

Mostrar una verdad importante.

---

## Restricción

Máximo:

```text
25 palabras
```

---

## Behaviors permitidos

```text
Focus
Transform
```

---

# Benchmark Renderer

## Tipo

```json
{
  "type": "benchmark-scene"
}
```

---

## Objetivo

Comparar entidades.

---

## Visualizaciones posibles

```text
Scorecard
Matrix
Cards
Radar
```

---

## Behaviors permitidos

```text
Compare
Reveal
Focus
```

---

# Ecosystem Renderer

## Tipo

```json
{
  "type": "ecosystem-scene"
}
```

---

## Objetivo

Visualizar relaciones.

---

## Visualizaciones posibles

```text
Network Graph
Radial Graph
Force Graph
Cluster Layout
```

---

## Behaviors permitidos

```text
Connect
Expand
Focus
```

---

# Journey Renderer

## Tipo

```json
{
  "type": "journey-scene"
}
```

---

## Objetivo

Mostrar un recorrido.

---

## Casos de uso

```text
Customer Journey
Madurez Digital
Proceso Comercial
Experiencia Cliente
```

---

## Behaviors permitidos

```text
Journey
Focus
Reveal
```

---

# Roadmap Renderer

## Tipo

```json
{
  "type": "roadmap-scene"
}
```

---

## Objetivo

Mostrar plan de implementación.

---

## Visualizaciones posibles

```text
Timeline
Roadmap
Gantt
```

---

## Behaviors permitidos

```text
Journey
Expand
```

---

# Business Case Renderer

## Tipo

```json
{
  "type": "business-case-scene"
}
```

---

## Objetivo

Demostrar valor económico.

---

## Visualizaciones posibles

```text
ROI
Payback
Flujos
Beneficios Acumulados
Curvas de Valor
```

---

## Behaviors permitidos

```text
Grow
Transform
Reveal
```

---

# Closing Renderer

## Tipo

```json
{
  "type": "closing-scene"
}
```

---

## Objetivo

Cerrar la narrativa.

---

## Contenido esperado

- Statement Final
- Logo
- Espacio negativo

---

## Behaviors permitidos

```text
Focus
Fade
```

---

# Catálogo Oficial de Behaviors

```text
Reveal
Transform
Expand
Collapse
Connect
Focus
Travel
Journey
Pin
Parallax
Compare
Grow
```

---

# Regla Arquitectónica Principal

Los renderers no contienen inteligencia narrativa.

La inteligencia narrativa vive exclusivamente en:

```text
Scene Engine
↓
State Engine
↓
Transition Engine
```

Los renderers sólo convierten:

```text
JSON
↓
Experiencia Visual
```

Esta separación permite reutilizar el mismo framework para:

- Retail
- Aeropuertos
- Metro
- Banca
- Salud
- Minería
- Educación

sin modificar la arquitectura central.

# Renderer Contract V1

## Objetivo

El Renderer Contract V1 define la interfaz obligatoria que deben implementar todos los renderers del Outside Storytelling Framework.

Su propósito es garantizar que:

- Todas las escenas se comporten de forma consistente.
- El motor pueda controlar cualquier escena sin conocer detalles internos.
- Nuevos tipos de escena puedan incorporarse sin modificar los engines.
- La lógica narrativa permanezca separada de la visualización.
- El mismo contenido pueda renderizarse en HTML, React, PDF o PowerPoint sin modificar los datos.

---

# Principios

## 1. El renderer no contiene lógica de negocio

No debe:

- Consultar Excel.
- Consultar APIs.
- Calcular KPIs.
- Decidir narrativa.
- Conocer la industria del cliente.

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

```text
HTML
React
PDF
PowerPoint
Canvas
```

sin modificar el JSON.

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

### Firma

```javascript
constructor(scene, context)
```

### Parámetros

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

# Método: render()

## Objetivo

Construir el DOM inicial.

### Responsabilidades

✅ Crear componentes

✅ Crear contenedores

✅ Aplicar layout

✅ Construir visualización

### Restricciones

❌ No animar

❌ No controlar scroll

❌ No navegar

---

# Método: enter()

## Objetivo

Ejecutarse cuando la escena se vuelve visible.

### Responsabilidades

✅ Activar efectos iniciales

✅ Lanzar reveal

✅ Preparar interacción

---

# Método: update(state)

## Objetivo

Responder a cambios de estado.

### Regla principal

Siempre que sea posible:

```text
Transformar
```

y no:

```text
Destruir
↓
Crear
```

---

# Método: exit()

## Objetivo

Preparar salida de escena.

### Responsabilidades

✅ Reducir protagonismo

✅ Limpiar listeners temporales

✅ Preparar transición

---

# Método: destroy()

## Objetivo

Liberar recursos.

### Responsabilidades

✅ Eliminar listeners

✅ Eliminar observers

✅ Limpiar timers

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

Todos los renderers deben devolver:

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

Es la escena más importante del framework.

Debe:

- Introducir una pregunta.
- Presentar una idea.
- Revelar un insight.
- Introducir un capítulo.
- Cerrar una narrativa.

---

## Responsabilidades

Puede renderizar:

```text
Headline
Subheadline
Search Bar
Quote
Illustration
Hero Image
Concept Reveal
```

---

# Navigation Mode Contract

Cada Hero Scene puede controlar el comportamiento de la navegación.

---

## Schema

```json
{
  "navigation": {
    "mode": "hidden"
  }
}
```

---

## Valores soportados

### hidden

Modo recomendado.

Visible:

```text
Sólo narrativa
```

Oculta:

```text
Logo
Título
Botones
Navegación
```

Uso:

```text
Opening
Insight
Closing
```

---

### minimal

Visible:

```text
Logo opcional
Theme Toggle
Play
Progress
```

Uso:

```text
Presentaciones ejecutivas
Scrollytelling
```

---

### full

Visible:

```text
Logo
Título
Capítulos
Menú
Theme
Play
Progress
```

Uso:

```text
Workshops
Framework Explorer
```

---

# Responsive Content Contract

El Hero Renderer soporta contenido específico por dispositivo.

---

## Schema

```json
{
  "headline": {

    "desktop": "",

    "tablet": "",

    "mobile": ""

  }
}
```

---

## Ejemplo

```json
{
  "headline": {

    "desktop":
      "¿Cómo puede RetailNova aumentar la lealtad sin depender de más descuentos?",

    "tablet":
      "¿Cómo aumentar la lealtad sin depender de descuentos?",

    "mobile":
      "¿Cómo aumentar la lealtad sin más descuentos?"

  }
}
```

---

# Responsive Layout Contract

Permite modificar el layout según dispositivo.

---

## Schema

```json
{
  "layout": {

    "desktop": "center",

    "tablet": "left",

    "mobile": "left"

  }
}
```

---

## Valores permitidos

```text
center
left
right
split
search
```

---

# Search Layout

Patrón recomendado para aperturas Outside.

---

## Schema

```json
{
  "layout": {
    "desktop": "search",
    "tablet": "search",
    "mobile": "search"
  }
}
```

---

# Search Bar Mode

Permite aperturas tipo SaaS.

---

## Schema

```json
{
  "search": {

    "enabled": true,

    "typing": true,

    "cursor": true

  }
}
```

---

## Estados sugeridos

```text
State 1
Search Vacío

↓

State 2
Typing

↓

State 3
Pregunta Completa

↓

State 4
Focus

↓

State 5
Collapse
```

---

# Media Contract

Opcional.

---

## Schema

```json
{
  "media": {

    "type": "image",

    "source": "hero.jpg"

  }
}
```

---

## Valores soportados

```text
image
video
illustration
3d
none
```

---

# Behaviors Permitidos

```text
Reveal
Focus
Transform
Parallax
Pin
```

---

# Restricciones

## Rule 01

Máximo:

```text
1 mensaje principal
```

---

## Rule 02

Máximo:

```text
2 elementos visuales dominantes
```

---

## Rule 03

Debe respetar:

```text
Safe Area Horizontal
Safe Area Vertical
```

---

## Rule 04

Puede utilizar contenido diferente para desktop, tablet y mobile.

---

# Casos de Uso

```text
Opening
Question
Insight
Big Idea
Concept Reveal
Closing Statement
```

---

# Ejemplo Completo

```json
{
  "id": "open-search",

  "type": "hero-scene",

  "navigation": {
    "mode": "hidden"
  },

  "layout": {

    "desktop": "search",

    "tablet": "search",

    "mobile": "search"

  },

  "headline": {

    "desktop":
      "¿Cómo puede RetailNova aumentar la lealtad sin depender de más descuentos?",

    "tablet":
      "¿Cómo aumentar la lealtad sin depender de descuentos?",

    "mobile":
      "¿Cómo aumentar la lealtad sin más descuentos?"

  },

  "search": {

    "enabled": true,

    "typing": true,

    "cursor": true

  }
}
```

---

# Hero Rules

## HERO-001

```text
Los Hero Scenes pueden controlar la navegación.
```

---

## HERO-002

```text
Los Hero Scenes pueden utilizar contenido específico por dispositivo.
```

---

## HERO-003

```text
Search Bar Mode es el patrón recomendado para aperturas Outside.
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

Mostrar evolución temporal.

## Behaviors

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

## Behaviors

```text
Reveal
Pin
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

## Visualizaciones

```text
KPI
Bar
Line
Scatter
Treemap
Heatmap
Bubble
```

## Behaviors

```text
Expand
Transform
Focus
Grow
```

---

# Map Renderer

## Tipo

```json
{
  "type": "map-scene"
}
```

---

## Behaviors

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

## Restricción

```text
Máximo 25 palabras
```

## Behaviors

```text
Focus
Transform
```

---

# Benchmark Renderer

## Behaviors

```text
Compare
Reveal
Focus
```

---

# Ecosystem Renderer

## Behaviors

```text
Connect
Expand
Focus
```

---

# Journey Renderer

## Behaviors

```text
Journey
Focus
Reveal
```

---

# Roadmap Renderer

## Behaviors

```text
Journey
Expand
```

---

# Business Case Renderer

## Behaviors

```text
Grow
Transform
Reveal
```

---

# Closing Renderer

## Behaviors

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

La inteligencia vive exclusivamente en:

```text
Scene Engine
↓
State Engine
↓
Transition Engine
```

Los renderers únicamente convierten:

```text
JSON
↓
Experiencia Visual
```

manteniendo el framework reutilizable para cualquier cliente, industria o proyecto.

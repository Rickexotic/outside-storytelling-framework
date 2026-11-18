# Scene Transition Model V1

## Objetivo

El Scene Transition Model define cómo conviven, evolucionan y se reemplazan las escenas dentro del Outside Storytelling Framework.

Su propósito es evitar que las escenas simplemente desaparezcan y reaparezcan.

---

# Principio Fundamental

```text
Transform > Replace
```

Siempre que exista continuidad narrativa:

```text
Escena A
↓
evoluciona
↓
Escena B
```

es preferible a:

```text
Escena A
↓
desaparece
↓
Escena B
```

---

# Arquitectura

## Situación Actual (V1)

```text
scene-container
│
└── active-scene
```

Cada nueva escena:

```javascript
container.innerHTML = "";
```

reemplaza completamente la anterior.

---

## Arquitectura Objetivo (V2)

```text
scene-container
│
├── outgoing-scene
├── active-scene
└── incoming-scene
```

Esto permite:

- persistencia
- transición
- transformación
- superposición

---

# Terminología

## Outgoing Scene

Escena saliente.

```text
Escena actual
```

Ejemplo:

```text
Hero Search
```

---

## Incoming Scene

Escena entrante.

Ejemplo:

```text
Historia RetailNova
```

---

## Active Scene

Escena dominante.

La escena principal visible en pantalla.

---

# Transition Types

---

# 1. Replace

## Descripción

Modelo clásico.

```text
A
↓
B
```

La escena anterior desaparece.

---

## Patrón

```text
Outgoing Scene = destroy()

Incoming Scene = render()
```

---

## Uso

Permitido para:

```text
dashboards
herramientas internas
testing
```

---

## No recomendado

Para:

```text
storytelling
consultoría
presentaciones Outside
```

---

# 2. Overlay

## Descripción

Dos escenas coexisten.

```text
A
+
B
```

---

## Patrón

```text
A sigue visible

B aparece sobre A
```

---

## Casos

```text
Insight overlays
Context overlays
KPI overlays
```

---

# 3. Persist

## Descripción

La escena original permanece.

La nueva escena se agrega.

---

## Patrón

```text
Hero
↓
Hero visible
+
Chapter
```

---

## Casos

```text
Search Bar
Maps
Frameworks
Network Visualizations
```

---

# 4. Collapse

## Descripción

La escena original reduce protagonismo.

---

## Patrón

```text
Hero Fullscreen

↓

Hero Compact

↓

Chapter
```

---

## Casos

```text
Opening Search

Big Idea

Hero Statements
```

---

## Ejemplo

```text
¿Cómo puede RetailNova...?

↓

Search Bar Compacta

↓

Historia de RetailNova
```

---

# 5. Transform

## Descripción

Elementos de una escena evolucionan hacia la siguiente.

---

## Patrón

```text
Scene A

↓

Shared Elements

↓

Scene B
```

---

## Casos

```text
KPIs

Titulares

Diagramas

Nodos

Mapas
```

---

# 6. Focus Shift

## Descripción

La escena permanece.

El foco cambia.

---

## Patrón

```text
Contexto amplio

↓

Elemento específico
```

---

## Casos

```text
Benchmark

Journey

Customer Segments

Roadmaps
```

---

# Transition Selection Rules

## Rule 01

Si existe relación visual:

```text
Transform
```

---

## Rule 02

Si existe relación narrativa:

```text
Persist
```

---

## Rule 03

Si existe Hero:

```text
Collapse
```

es preferido.

---

## Rule 04

Replace es el último recurso.

---

# Scene Compatibility Matrix

| From | To | Transition Recomendada |
|--------|--------|--------|
| Hero | Chapter | Collapse |
| Hero | Insight | Collapse |
| Hero | Timeline | Collapse |
| Chapter | Timeline | Persist |
| Timeline | Insight | Overlay |
| Insight | Ecosystem | Transform |
| Ecosystem | Journey | Focus Shift |
| Journey | Roadmap | Persist |
| Roadmap | Impact | Transform |
| Impact | Closing | Focus Shift |

---

# Lifecycle

## Current

```text
Render Scene A

↓

Destroy Scene A

↓

Render Scene B
```

---

## Target

```text
Render Scene A

↓

Render Scene B

↓

Run Transition

↓

Deactivate Scene A

↓

Scene B Active
```

---

# Future Container Model

```html
<div id="scene-container">

    <div id="scene-outgoing">
    </div>

    <div id="scene-active">
    </div>

    <div id="scene-incoming">
    </div>

</div>
```

---

# Hero Transition Rule

Hero Scenes deben soportar:

```text
fullscreen

↓

compact

↓

chapter reveal
```

antes de abandonar pantalla.

---

# Outside Recommendation

Para propuestas comerciales:

```text
Hero
↓
Collapse

Chapter
↓
Persist

Timeline
↓
Reveal

Insight
↓
Focus

Solution
↓
Transform

Roadmap
↓
Journey

Impact
↓
Grow

Closing
↓
Focus
```

---

# Regla Arquitectónica Principal

Las escenas no se reemplazan.

Las escenas evolucionan.

```text
Narrativa
↓
Estado
↓
Transición
↓
Nueva Narrativa
```

El motor debe priorizar continuidad antes que reemplazo visual.

# Presentation Schema V1

## Objetivo

El Presentation Schema define la estructura oficial de una presentación dentro del Outside Storytelling Framework.

Toda experiencia debe comenzar desde un único archivo:

```text
presentation.json
```

El objetivo es separar:

```text
Contenido
↓
Narrativa
↓
Renderizado
```

---

# Principios

## Contenido antes que tecnología

El schema describe:

- historia
- escenas
- estados
- datos
- comportamiento

No describe:

- HTML
- CSS
- GSAP
- D3

---

## Independencia tecnológica

La misma presentación debe poder renderizarse en:

```text
HTML
React
PDF
PowerPoint
Video
```

sin modificar el JSON.

---

# Root Schema

```json
{
  "id": "",
  "title": "",
  "client": "",
  "version": "1.0",

  "theme": "",
  "mode": "",

  "navigation": {},

  "dataset": "",

  "settings": {},

  "scenes": []
}
```

---

# Metadata Contract

```json
{
  "id": "retailnova-club-beneficios-v3",

  "title": "Club RetailNova",

  "client": "RetailNova",

  "version": "1.0"
}
```

---

# Theme Contract

```json
{
  "theme": "outside-light"
}
```

Valores soportados:

```text
outside-light
outside-dark
custom
```

---

# Experience Mode Contract

```json
{
  "mode": "scrollytelling"
}
```

Valores soportados:

```text
scrollytelling
presentation
autoplay
hybrid
```

---

# Navigation Contract

```json
{
  "navigation": {
    "scroll": true,
    "autoplay": true,
    "keyboard": true,
    "touch": true
  }
}
```

---

# Dataset Contract

```json
{
  "dataset": "retailnova-v3"
}
```

---

# Settings Contract

```json
{
  "settings": {
    "safeArea": "80%",
    "reducedMotion": true,
    "showProgress": true
  }
}
```

---

# Scene Collection

```json
{
  "scenes": []
}
```

---

# Scene Contract

Toda escena debe cumplir:

```json
{
  "id": "",
  "type": "",

  "title": "",

  "theme": "",

  "states": [],

  "transitions": [],

  "dataSource": ""
}
```

---

# Scene Types

```text
hero-scene
timeline-scene
chapter-scene
data-scene
map-scene
insight-scene
benchmark-scene
ecosystem-scene
journey-scene
roadmap-scene
business-case-scene
closing-scene
```

---

# State Contract

```json
{
  "id": "",

  "title": "",

  "payload": {},

  "metadata": {}
}
```

---

# Transition Contract

```json
{
  "from": "",
  "to": "",
  "behavior": "",
  "duration": 1000
}
```

---

# Data Binding Contract

```json
{
  "dataSource": "Clientes"
}
```

o

```json
{
  "dataSource": {
    "dataset": "retailnova-v3",
    "collection": "clientes"
  }
}
```

---

# Layer Contract

```json
{
  "layers": {
    "background": [],
    "narrative": [],
    "visual": [],
    "data": [],
    "navigation": []
  }
}
```

---

# Presentation Lifecycle

```text
Load Presentation
↓
Register Scenes
↓
Create Renderers
↓
Resolve Data
↓
Activate Scene
↓
Advance States
↓
Complete Experience
```

---

# Versioning Rules

Toda presentación debe incluir:

```json
{
  "version": "1.0"
}
```

Cambios incompatibles implican:

```text
2.0
3.0
etc.
```

---

# Valid Presentation Rule

Una presentación válida debe contener:

✅ id

✅ title

✅ version

✅ theme

✅ scenes

✅ al menos una escena

---

# Architectural Principle

El archivo presentation.json es la única fuente de verdad de la narrativa.

```text
presentation.json
↓
Engine
↓
Renderer
↓
Experience
```

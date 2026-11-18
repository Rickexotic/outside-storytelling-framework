# Scene Layer Model V1

## Objetivo

El Scene Layer Model define cómo conviven múltiples escenas durante una transición.

Su propósito es permitir experiencias de storytelling donde una escena pueda:

- Persistir
- Transformarse
- Colapsar
- Superponerse
- Revelar otra escena

sin destruir inmediatamente el contenido anterior.

---

# Problema que resuelve

Modelo actual:

```text
Scene A
↓
Destroy
↓
Scene B
```

Resultado:

```text
Narrativa fragmentada
```

---

Modelo objetivo:

```text
Scene A
↓
Transform
↓
Scene A + Scene B
↓
Scene B
```

Resultado:

```text
Narrativa continua
```

---

# Arquitectura de Capas

## Estructura Oficial

```html
<div id="scene-container">

    <div id="scene-outgoing"></div>

    <div id="scene-active"></div>

    <div id="scene-incoming"></div>

</div>
```

---

# Layer Definitions

## scene-active

Escena principal visible.

```text
Única escena dominante.
```

---

### Responsabilidades

- Escena actual
- Interacción principal
- Foco narrativo

---

### Restricciones

Sólo puede existir:

```text
1 active scene
```

---

## scene-incoming

Escena entrante.

---

### Responsabilidades

- Preparar nueva escena
- Ejecutar reveal
- Ejecutar transform

---

### Estado inicial

```css
opacity: 0;
```

---

### Estado final

```css
opacity: 1;
```

---

## scene-outgoing

Escena saliente.

---

### Responsabilidades

- Persistencia temporal
- Collapse
- Fade
- Transform

---

### Estado inicial

```css
opacity: 1;
```

---

### Estado final

```css
opacity: 0;
```

---

# Scene Promotion Pipeline

## Patrón Oficial

```text
Incoming
↓
Active

Active
↓
Outgoing

Outgoing
↓
Destroy
```

---

## Flujo completo

```text
Render Incoming

↓

Run Transition

↓

Promote Incoming

↓

Demote Active

↓

Destroy Outgoing
```

---

# Layer Lifecycle

## Incoming Scene

### Estado 1

```text
Renderizada
No visible
```

---

### Estado 2

```text
Transición
```

---

### Estado 3

```text
Visible
```

---

### Estado 4

```text
Active
```

---

# Active Scene

### Estado 1

```text
Principal
```

---

### Estado 2

```text
Pierde foco
```

---

### Estado 3

```text
Outgoing
```

---

# Outgoing Scene

### Estado 1

```text
Persistencia
```

---

### Estado 2

```text
Transición de salida
```

---

### Estado 3

```text
Destroy
```

---

# Supported Transition Models

## Replace

```text
A
↓
B
```

Destruye inmediatamente.

---

## Persist

```text
A
+
B
```

Ambas visibles.

---

## Collapse

```text
Hero

↓

Hero Compact

↓

Chapter
```

---

## Overlay

```text
A

+

B
```

---

## Transform

```text
Elementos compartidos

↓

Nueva escena
```

---

# Hero Layer Rules

## Hero Full

```text
100vh
```

---

## Hero Collapsed

```text
Escala reducida

Posición fija

Contexto narrativo
```

---

## Hero Destroy

Sólo después de:

```text
Hero
↓
Collapse
↓
Chapter
↓
Timeline
```

---

# Layer Ownership Rules

## Scene Engine

Controla:

```text
Promoción
Democión
Destroy
```

---

## State Engine

No conoce capas.

---

## Renderers

No conocen capas.

---

## Transition Engine

Ejecuta movimientos entre capas.

---

# Z-Index Strategy

## Incoming

```text
30
```

---

## Active

```text
20
```

---

## Outgoing

```text
10
```

---

# Opacity Strategy

## Incoming

```css
0 → 1
```

---

## Active

```css
1
```

---

## Outgoing

```css
1 → 0
```

---

# Destruction Rules

Una escena puede destruirse sólo si:

```text
No es Active
```

y

```text
No participa en transición
```

---

# Future Extensions

Compatible con:

```text
GSAP Timeline

ScrollTrigger

Three.js

Sticky Storytelling

Narrative Persistence

Context Layers

Map Storytelling
```

---

# Architectural Principle

Las escenas no compiten.

Las escenas colaboran.

```text
Incoming
↓
Active
↓
Outgoing
↓
Destroy
```

Esta secuencia permite construir experiencias de storytelling continuas, coherentes y alineadas con la filosofía visual de Outside.

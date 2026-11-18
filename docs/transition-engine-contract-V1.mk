# Transition Engine Contract V1

## Objetivo

El Transition Engine es responsable de gestionar el movimiento entre estados y escenas.

Es el único componente autorizado para ejecutar comportamientos visuales.

---

# Posición en la Arquitectura

```text
presentation.json
        │
        ▼
Scene Engine
        │
        ▼
State Engine
        │
        ▼
Transition Engine
        │
        ▼
Renderer
```

---

# Responsabilidades

## 1. Ejecutar Transiciones

Transformar:

```text
Estado A
↓
Estado B
```

en una experiencia visual coherente.

---

## 2. Resolver Behaviors

Interpretar:

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

y convertirlos en animaciones.

---

## 3. Mantener Consistencia

Garantizar que todas las presentaciones Outside utilicen:

- las mismas velocidades
- las mismas curvas
- los mismos comportamientos

---

## 4. Coordinar Renderers

Aplicar transiciones sobre elementos renderizados.

---

# Qué NO Hace

El Transition Engine NO:

❌ Renderiza escenas

❌ Calcula datos

❌ Controla navegación

❌ Administra estados

❌ Gestiona datasets

---

# Principio Fundamental

```text
Narrativa primero.

Movimiento segundo.
```

Las transiciones existen para reforzar comprensión.

Nunca para demostrar tecnología.

---

# Constructor Contract

```javascript
new TransitionEngine({
    config,
    animationLibrary
});
```

---

# Dependencias

Inicialmente:

```text
GSAP
ScrollTrigger
```

---

## Futuro

Compatible con:

```text
Native Web Animations API
Motion One
Framer Motion
Three.js
```

---

# Public API

## run()

Ejecuta una transición.

### Firma

```javascript
run(
    source,
    target,
    behavior
)
```

---

## Ejemplo

```javascript
transitionEngine.run(
    stateA,
    stateB,
    "transform"
);
```

---

## queue()

Agrega transición a cola.

### Firma

```javascript
queue(transition)
```

---

## play()

Reproduce cola.

### Firma

```javascript
play()
```

---

## pause()

Pausa animaciones activas.

### Firma

```javascript
pause()
```

---

## resume()

Continúa animaciones.

### Firma

```javascript
resume()
```

---

## stop()

Detiene y limpia.

### Firma

```javascript
stop()
```

---

# Transition Contract

Toda transición debe cumplir:

```javascript
{
    id,
    behavior,
    source,
    target,
    duration,
    easing
}
```

---

# Ejemplo

```javascript
{
    id: "rfm-01",

    behavior: "expand",

    source: "all-customers",

    target: "rfm-breakdown",

    duration: 1200,

    easing: "power2.out"
}
```

---

# Behavior Registry

Todos los comportamientos oficiales.

---

## Reveal

### Objetivo

Descubrir información.

### Patrón

```text
Invisible
↓
Visible
```

---

## Transform

### Objetivo

Mutar un elemento existente.

### Patrón

```text
A
↓
B
```

---

### Regla

Preferido frente a:

```text
Eliminar
↓
Crear
```

---

## Expand

### Objetivo

Agregar complejidad.

### Patrón

```text
Nodo
↓
Nodo + Hijos
```

---

## Collapse

### Objetivo

Reducir complejidad.

### Patrón

```text
A+B+C
↓
A
```

---

## Connect

### Objetivo

Mostrar relaciones.

### Patrón

```text
Nodo A
│
▼
Nodo B
```

---

## Focus

### Objetivo

Dar protagonismo.

### Patrón

```text
Muchos elementos
↓
Uno principal
```

---

## Travel

### Objetivo

Mover viewport o cámara.

### Casos

```text
Mapas
Three.js
Geo
```

---

## Journey

### Objetivo

Avanzar en etapas.

### Patrón

```text
Etapa 1
↓
Etapa 2
↓
Etapa 3
```

---

### Casos

```text
Customer Journey
Roadmap
Madurez
```

---

## Pin

### Objetivo

Mantener elemento fijo.

### Patrón

```text
Elemento fijo
↓
Contenido evoluciona
```

---

### Referencias

```text
Snow Fall
Nature
Scrollytelling
```

---

## Parallax

### Objetivo

Generar profundidad.

### Patrón

```text
Capas
↓
Velocidades distintas
```

---

### Regla

Sutil.

Nunca protagonista.

---

## Compare

### Objetivo

Comparar alternativas.

### Casos

```text
Benchmark
Competidores
Programas
```

---

## Grow

### Objetivo

Mostrar crecimiento.

### Casos

```text
ROI
Ingresos
Usuarios
KPIs
```

---

# Animation Defaults

## Duraciones

```javascript
{
    fast: 300,
    normal: 600,
    hero: 1000,
    storytelling: 1500
}
```

---

## Easings

```javascript
[
    "power1.out",
    "power2.out",
    "power3.out"
]
```

---

## Default

```text
power2.out
```

---

# Reduced Motion Support

Debe respetar:

```css
prefers-reduced-motion
```

---

## Comportamiento

Si está activo:

```text
Sin travel
Sin parallax
Sin movement-heavy
```

Manteniendo:

```text
Opacity
Visibility
Focus
```

---

# Scene Transitions

Cambio entre escenas.

---

## Fade Transition

```text
Scene A
↓
Fade
↓
Scene B
```

---

## Crossfade

```text
Scene A
+
Scene B
```

---

## Narrative Transform

```text
Escena A evoluciona
↓
Escena B
```

---

### Prioridad

Siempre preferido.

---

# State Transitions

Cambio dentro de una escena.

---

## Ejemplo

```text
Todos los clientes
↓
RFM
↓
Champions
```

---

El renderer permanece.

Sólo cambia:

```text
state
```

---

# Queue Management

El Transition Engine mantiene:

```javascript
{
    activeTransition,
    queue,
    isPlaying
}
```

---

# Eventos Oficiales

## transition:start

```javascript
{
    transitionId,
    behavior
}
```

---

## transition:complete

```javascript
{
    transitionId,
    behavior
}
```

---

## transition:error

```javascript
{
    transitionId,
    error
}
```

---

# Navigation Rules

## Rule 01

Sólo una transición activa.

---

## Rule 02

Toda transición debe finalizar.

No dejar estados intermedios.

---

## Rule 03

No ejecutar nueva transición si existe una activa.

Salvo:

```text
interruptable = true
```

---

## Rule 04

El renderer nunca ejecuta GSAP directamente.

Siempre pertenece al Transition Engine.

---

# Future Extensions

Compatible con:

```text
Three.js Camera Travel

Voice Sync

Timeline Narration

AI Presenter

Interactive Workshops

Multi-user Experiences
```

sin modificar el contrato.

---

# Regla Arquitectónica Principal

El Transition Engine es el responsable exclusivo del movimiento.

```text
Scene Engine
↓
Dónde estamos

State Engine
↓
Qué estado está activo

Transition Engine
↓
Cómo evolucionamos

Renderer
↓
Qué vemos
```

La separación estricta garantiza consistencia visual, mantenibilidad y reutilización del framework en cualquier proyecto Outside.

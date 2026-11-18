# State Engine Contract V1

## Objetivo

El State Engine es responsable de gestionar la evolución interna de una escena.

Mientras que:

```text
Scene Engine
↓
Controla escenas
```

el State Engine controla:

```text
Escena
↓
Estado 1
↓
Estado 2
↓
Estado 3
↓
Estado N
```

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
Renderer
```

---

# Responsabilidades

## 1. Administrar Estados

Ejemplo:

```text
Customer Discovery

├─ All Customers
├─ RFM
├─ Champions
├─ Loyal
└─ At Risk
```

El State Engine controla cuál está activo.

---

## 2. Navegar entre Estados

Debe soportar:

```text
nextState()
previousState()
goToState()
```

---

## 3. Actualizar Renderer

Cuando cambia un estado:

```text
State Engine
↓
Renderer.update()
```

---

## 4. Coordinar Transiciones

No ejecuta animaciones.

Solicita al Transition Engine.

```text
Estado A
↓
Estado B
↓
Transition Engine
```

---

# Qué NO Hace

El State Engine NO:

❌ Renderiza

❌ Consulta datasets

❌ Interpreta scroll

❌ Controla escenas

❌ Controla autoplay

---

# Constructor Contract

```javascript
new StateEngine({
    transitionEngine
});
```

---

# State Definition Contract

Cada estado debe cumplir:

```javascript
{
    id,
    title,
    metadata,
    payload
}
```

---

## Ejemplo

```javascript
{
    id: "champions",
    title: "Clientes Champions",

    payload: {
        segment: "Champions"
    }
}
```

---

# Internal State

El engine mantiene:

```javascript
{
    scene,
    states,
    activeState,
    activeStateIndex,
    stateCount
}
```

---

# Public API

## start()

Inicializa estados.

### Firma

```javascript
start(scene)
```

---

## stop()

Detiene gestión de estados.

### Firma

```javascript
stop()
```

---

## reset()

Vuelve al primer estado.

### Firma

```javascript
reset()
```

---

## nextState()

Avanza.

### Firma

```javascript
nextState()
```

### Ejemplo

```text
State 01
↓
State 02
```

---

## previousState()

Retrocede.

### Firma

```javascript
previousState()
```

---

## goToState()

Navega directamente.

### Firma

```javascript
goToState(stateId)
```

---

## getCurrentState()

Retorna estado activo.

### Firma

```javascript
getCurrentState()
```

---

## getState()

Busca estado.

### Firma

```javascript
getState(stateId)
```

---

## getStates()

Lista estados.

### Firma

```javascript
getStates()
```

---

# State Lifecycle

## 1. Initialize

```text
Scene entra
↓
State Engine inicia
```

---

## 2. Activate

```text
State activo
```

---

## 3. Transition

```text
State A
↓
State B
```

---

## 4. Update Renderer

```text
Renderer.update()
```

---

## 5. Complete

```text
Último estado alcanzado
```

---

# Integración con Renderer

Cuando cambia el estado:

```javascript
renderer.update(
    currentState
);
```

---

# Integración con Transition Engine

Cuando existe transición:

```javascript
transitionEngine.run(
    previousState,
    currentState,
    behavior
);
```

---

# Eventos Oficiales

## state:loaded

```javascript
{
    stateId
}
```

---

## state:enter

```javascript
{
    stateId
}
```

---

## state:exit

```javascript
{
    stateId
}
```

---

## state:changed

```javascript
{
    previousState,
    currentState
}
```

---

## state:completed

```javascript
{
    stateId
}
```

---

# Navigation Rules

## Rule 01

Sólo un estado puede estar activo.

```javascript
activeState
```

---

## Rule 02

Todo cambio de estado debe pasar por State Engine.

---

## Rule 03

Nunca modificar estados desde Renderer.

---

## Rule 04

Renderer sólo recibe estados.

Nunca los crea.

---

# State Types

Todos los estados pertenecen a una categoría.

---

## Informational State

```text
Texto
Headline
Insight
```

---

## Data State

```text
KPIs
Charts
Benchmarks
```

---

## Journey State

```text
Step 1
Step 2
Step 3
```

---

## Ecosystem State

```text
Nodes
Connections
Clusters
```

---

## Roadmap State

```text
Phase 1
Phase 2
Phase 3
```

---

# Completion Logic

Una escena puede definirse como completa cuando:

```text
Último estado alcanzado
```

o

```text
Todos los estados visitados
```

dependiendo de la configuración.

---

# Future Extensions

Este contrato permite incorporar:

```text
Branching Narratives

Conditional States

AI-generated Insights

Interactive Workshops

Audience Voting

Scenario Selection

Dynamic Data Updates
```

sin modificar la arquitectura actual.

---

# Regla Arquitectónica Principal

El State Engine es el responsable de la progresión narrativa dentro de una escena.

```text
Scene Engine
↓
Controla escenas

State Engine
↓
Controla estados

Transition Engine
↓
Controla movimiento

Renderer
↓
Controla visualización
```

La separación estricta entre estos cuatro componentes es la base del Outside Storytelling Framework.

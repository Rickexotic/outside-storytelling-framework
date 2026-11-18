# Scene Engine Contract V1

## Objetivo

El Scene Engine es el orquestador principal del Outside Storytelling Framework.

Es responsable de:

```text
Cargar presentación
↓
Resolver escenas
↓
Gestionar ciclo de vida
↓
Coordinar estados
↓
Coordinar transiciones
↓
Activar renderers
```

El Scene Engine:

✅ Coordina

✅ Orquesta

✅ Navega

✅ Gestiona ciclo de vida

---

El Scene Engine NO:

❌ Renderiza

❌ Anima

❌ Calcula métricas

❌ Ejecuta lógica de negocio

❌ Interpreta datasets

---

# Posición en la Arquitectura

```text
presentation.json
        │
        ▼
Scene Engine
        │
        ├── Data Engine
        ├── State Engine
        ├── Transition Engine
        │
        ▼
Renderer
```

---

# Responsabilidades

## 1. Load Presentation

Cargar el archivo:

```json
{
  "id": "",
  "title": "",
  "scenes": []
}
```

y construir la estructura interna.

---

## 2. Register Scenes

Transformar definiciones JSON en escenas ejecutables.

Ejemplo:

```json
{
  "id": "customer-discovery",
  "type": "data-scene"
}
```

↓

```javascript
SceneInstance
```

---

## 3. Resolve Renderer

Asignar el renderer correcto según el tipo de escena.

Ejemplo:

```text
hero-scene
↓
HeroRenderer

journey-scene
↓
JourneyRenderer

benchmark-scene
↓
BenchmarkRenderer
```

---

## 4. Lifecycle Management

Controlar el ciclo completo.

```text
load
↓
render
↓
enter
↓
update
↓
exit
↓
destroy
```

---

## 5. Navigation Control

Administrar navegación:

```text
Scroll
Keyboard
Autoplay
Touch
```

---

## 6. Scene Registry

Mantener inventario completo de escenas.

```text
presentation
↓
scene registry
↓
scene instances
```

---

# Constructor Contract

```javascript
new SceneEngine({
  presentation,
  dataEngine,
  stateEngine,
  transitionEngine
});
```

---

# Public API

## load()

### Objetivo

Cargar una presentación completa.

### Firma

```javascript
load(presentation)
```

### Responsabilidades

- Validar JSON
- Construir escenas
- Registrar renderers
- Crear índices

---

## start()

### Objetivo

Iniciar experiencia.

### Firma

```javascript
start()
```

### Resultado

Activa la primera escena.

---

## stop()

### Objetivo

Detener experiencia.

### Firma

```javascript
stop()
```

---

## restart()

### Objetivo

Reiniciar experiencia.

### Firma

```javascript
restart()
```

---

## nextScene()

### Objetivo

Avanzar a la siguiente escena.

### Firma

```javascript
nextScene()
```

---

## previousScene()

### Objetivo

Volver a la escena anterior.

### Firma

```javascript
previousScene()
```

---

## goToScene()

### Objetivo

Navegar a una escena específica.

### Firma

```javascript
goToScene(sceneId)
```

### Ejemplo

```javascript
engine.goToScene('customer-discovery');
```

---

## getScene()

### Objetivo

Obtener una escena registrada.

### Firma

```javascript
getScene(sceneId)
```

---

## getScenes()

### Objetivo

Obtener todas las escenas.

### Firma

```javascript
getScenes()
```

---

## getCurrentScene()

### Objetivo

Obtener escena activa.

### Firma

```javascript
getCurrentScene()
```

---

## destroy()

### Objetivo

Destruir completamente la instancia.

### Firma

```javascript
destroy()
```

---

# Scene Instance Contract

Toda escena registrada debe cumplir:

```javascript
{
  id,
  type,
  renderer,
  states,
  transitions,
  metadata
}
```

---

# Internal State

El Scene Engine mantiene:

```javascript
{
  presentation,
  scenes,
  activeScene,
  activeSceneIndex,
  isRunning
}
```

---

# Renderer Resolution Registry

Mapa oficial de renderers.

```javascript
{
  "hero-scene": HeroRenderer,
  "timeline-scene": TimelineRenderer,
  "chapter-scene": ChapterRenderer,
  "data-scene": DataRenderer,
  "map-scene": MapRenderer,
  "insight-scene": InsightRenderer,
  "benchmark-scene": BenchmarkRenderer,
  "ecosystem-scene": EcosystemRenderer,
  "journey-scene": JourneyRenderer,
  "roadmap-scene": RoadmapRenderer,
  "business-case-scene": BusinessCaseRenderer,
  "closing-scene": ClosingRenderer
}
```

---

# Scene Lifecycle

## 1. Load

```text
JSON
↓
Scene Instance
```

---

## 2. Render

```text
Renderer.render()
```

---

## 3. Enter

```text
Renderer.enter()
```

---

## 4. Active

```text
State Engine controla estados
```

---

## 5. Exit

```text
Renderer.exit()
```

---

## 6. Destroy

```text
Renderer.destroy()
```

---

# Integración con Data Engine

El Scene Engine no interpreta datasets.

Solicita información.

```javascript
const data =
  dataEngine.resolve(scene);
```

---

# Integración con State Engine

El Scene Engine no controla estados internos.

Delega.

```javascript
stateEngine.start(scene);
```

---

# Integración con Transition Engine

El Scene Engine no anima.

Delega.

```javascript
transitionEngine.run(
  currentScene,
  nextScene
);
```

---

# Eventos Oficiales

## scene:loaded

Disparado al registrar una escena.

```javascript
{
  sceneId
}
```

---

## scene:enter

Disparado al entrar a una escena.

```javascript
{
  sceneId
}
```

---

## scene:exit

Disparado al salir de una escena.

```javascript
{
  sceneId
}
```

---

## scene:changed

Disparado al cambiar de escena.

```javascript
{
  previousScene,
  currentScene
}
```

---

## presentation:loaded

Disparado al cargar la presentación.

```javascript
{
  presentationId
}
```

---

## presentation:started

Disparado al iniciar la experiencia.

---

## presentation:finished

Disparado al finalizar la experiencia.

---

# Scroll Integration

El Scene Engine escucha:

```text
Scroll
Wheel
Keyboard
Touch
Autoplay
```

---

Pero transforma la interacción en navegación.

Ejemplo:

```text
Wheel Down
↓
nextScene()
```

```text
Arrow Up
↓
previousScene()
```

```text
Autoplay Tick
↓
nextScene()
```

---

# Safe Navigation Rules

## Rule 01

Nunca destruir una escena sin ejecutar:

```text
exit()
```

---

## Rule 02

Nunca entrar a una escena sin ejecutar:

```text
render()
↓
enter()
```

---

## Rule 03

Sólo una escena puede estar activa.

```javascript
activeScene
```

---

## Rule 04

Las escenas son independientes.

Ninguna escena puede modificar otra.

---

## Rule 05

Toda navegación debe pasar por Scene Engine.

---

# Future Extensions

Este contrato permite incorporar posteriormente:

```text
Autoplay Engine

Voice Narration

AI Narration

Scene Prefetching

Lazy Loading

Analytics

PDF Export

PowerPoint Export

React Renderer

Next.js Renderer

Presentation Recording
```

sin modificar la arquitectura existente.

---

# Regla Arquitectónica Principal

El Scene Engine es el director de orquesta.

```text
No renderiza.
No anima.
No calcula.
No interpreta negocio.
```

Simplemente coordina:

```text
Escenas
↓
Estados
↓
Transiciones
↓
Renderers
```

para convertir cualquier `presentation.json` en una experiencia narrativa consistente, reutilizable y escalable dentro del Outside Storytelling Framework.

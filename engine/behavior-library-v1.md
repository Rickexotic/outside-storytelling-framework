# Behavior Library V1

## Objetivo

La Behavior Library define todos los comportamientos oficiales del Outside Storytelling Framework.

Ningún renderer puede inventar nuevos comportamientos sin aprobar una nueva versión del framework.

---

# Principio

```text
Narrativa
↓
Behavior
↓
Animación
```

Nunca:

```text
Animación
↓
Narrativa
```

---

# Configuración Base

## Duraciones

```json
{
  "fast": 300,
  "normal": 600,
  "hero": 1000,
  "storytelling": 1500
}
```

---

## Easing Oficial

```text
power2.out
```

---

# Reveal

## Objetivo

Mostrar información.

## Patrón

```text
Invisible
↓
Visible
```

## Casos

- Headlines
- KPIs
- Imágenes
- Citas

---

# Transform

## Objetivo

Evolucionar un elemento existente.

## Patrón

```text
A
↓
B
```

## Casos

- KPI antes/después
- Insights
- Cambios de etapa

## Regla

Siempre preferido frente a:

```text
Remove
↓
Add
```

---

# Expand

## Objetivo

Agregar capas de información.

## Patrón

```text
Uno
↓
Muchos
```

## Casos

- Ecosistemas
- Arquitecturas
- Componentes

---

# Collapse

## Objetivo

Reducir complejidad.

## Patrón

```text
Muchos
↓
Uno
```

---

# Connect

## Objetivo

Mostrar relaciones.

## Patrón

```text
Nodo
↓
Nodo
```

---

## Casos

- Partners
- Stakeholders
- Ecosistemas

---

# Focus

## Objetivo

Dirigir atención.

## Patrón

```text
Contexto
↓
Elemento principal
```

---

# Travel

## Objetivo

Moverse por un espacio.

## Casos

- Mapas
- Three.js
- Exploración geográfica

---

# Journey

## Objetivo

Recorrer etapas.

## Patrón

```text
Etapa 1
↓
Etapa 2
↓
Etapa 3
```

---

## Casos

- Customer Journey
- Roadmap
- Madurez

---

# Pin

## Objetivo

Mantener elementos fijos.

## Patrón

```text
Elemento fijo
↓
Contenido cambia
```

---

## Casos

- Snow Fall
- Nature
- Scrollytelling

---

# Parallax

## Objetivo

Crear profundidad.

## Patrón

```text
Capas
↓
Velocidades distintas
```

---

## Regla

Nunca protagonista.

Siempre secundario.

---

# Compare

## Objetivo

Comparar alternativas.

## Casos

- Benchmark
- Competidores
- Programas

---

# Grow

## Objetivo

Representar crecimiento.

## Casos

- ROI
- Usuarios
- Ventas
- Beneficios

---

# Behavior Compatibility Matrix

| Behavior | Hero | Data | Benchmark | Ecosystem | Journey | Roadmap |
|----------|------|------|------------|-----------|----------|----------|
| Reveal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Transform | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Expand | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ |
| Collapse | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ |
| Connect | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Focus | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Travel | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Journey | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Pin | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Parallax | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Compare | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Grow | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |

---

# Reduced Motion Rules

Si el usuario tiene activado:

```css
prefers-reduced-motion
```

se desactivan:

```text
Travel
Parallax
Large Movement
```

y se reemplazan por:

```text
Opacity
Visibility
Focus
```

---

# Behavior Governance

Todo nuevo comportamiento requiere:

1. Definición.
2. Casos de uso.
3. Compatibilidad.
4. Restricciones.
5. Aprobación de nueva versión.

---

# Architectural Principle

Los Behaviors representan el lenguaje de movimiento del framework.

```text
Scene
↓
State
↓
Behavior
↓
Transition Engine
↓
Experiencia
```

Toda animación debe originarse desde un Behavior oficial.

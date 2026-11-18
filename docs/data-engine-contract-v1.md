# Data Engine Contract V1

## Objetivo

El Data Engine es la capa responsable de abstraer el acceso a datos dentro del Outside Storytelling Framework.

Su función es desacoplar completamente los renderers, escenas y estados de la fuente real de datos.

```text
Excel
CSV
JSON
Power BI Export
Dataverse
REST API
SQL
SharePoint
        ↓
    Data Engine
        ↓
 Scene / State / Renderer
```

---

# Responsabilidades

## Resolver datasets

```javascript
resolveDataset(datasetId)
```

## Resolver métricas

```javascript
resolveMetric(metricId)
```

## Resolver colecciones

```javascript
resolveCollection(collectionId)
```

## Resolver datos por estado

```javascript
resolveStateData(sceneId, stateId)
```

## Administrar caché

```javascript
cache(key, value)
```

## Prefetch

```javascript
prefetch(datasetId)
```

---

# Qué NO Hace

❌ Renderizar

❌ Animar

❌ Navegar

❌ Interpretar narrativa

❌ Manipular DOM

---

# Constructor Contract

```javascript
new DataEngine({
  sources,
  cache,
  adapters
});
```

---

# Fuentes Soportadas V1

```text
JSON
Excel
CSV
```

---

# Public API

## load()

Carga fuentes registradas.

```javascript
load()
```

## resolveDataset()

```javascript
resolveDataset(datasetId)
```

## resolveMetric()

```javascript
resolveMetric(metricId)
```

## resolveCollection()

```javascript
resolveCollection(collectionId)
```

## resolveStateData()

```javascript
resolveStateData(sceneId, stateId)
```

## preload()

```javascript
preload(datasetIds)
```

## clearCache()

```javascript
clearCache()
```

---

# Dataset Contract

```javascript
{
  id,
  source,
  type,
  schema,
  records
}
```

---

# Metric Contract

```javascript
{
  id,
  label,
  value,
  format
}
```

---

# Eventos Oficiales

```text
data:loaded
data:resolved
data:error
cache:hit
cache:miss
```

---

# Regla Arquitectónica Principal

El Data Engine es la única capa autorizada para acceder a datos.

```text
Scene Engine
↓
State Engine
↓
Renderer
↓
Data Engine
↓
Fuente de Datos
```

Ningún renderer debe conocer si los datos provienen de Excel, JSON, Power BI o APIs.

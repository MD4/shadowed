shadowed

# shadowed

## Table of contents

### Interfaces

- [Bounds](interfaces/bounds.md)
- [Segment2](interfaces/segment2.md)
- [Vec2](interfaces/vec2.md)

### Functions

- [computeShadows](README.md#computeshadows)

## Functions

### computeShadows

▸ `Const` **computeShadows**(`bounds`, `walls`, `light`): [Vec2](interfaces/vec2.md)[][]

Computes casted shadows by a light for a given set of walls within specified bounds.

**`example`**
```ts
computeShadows(
  {
    topLeft: { x: 0, y: 0 },
    bottomRight: { x: 640, y: 360 },
  },
  [{
    a: { x: 20, y: 80 },
    b: { x: 80, y: 30}
  }],
  { x: 100, y: 200 },
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bounds` | [Bounds](interfaces/bounds.md) | A rectangle where the shadows will be contained. |
| `walls` | [Segment2](interfaces/segment2.md)[] | Segments that will cast shadows. |
| `light` | [Vec2](interfaces/vec2.md) | Position of the light. |

#### Returns

[Vec2](interfaces/vec2.md)[][]

#### Defined in

[computeShadows.ts:39](https://github.com/MD4/shadowed/blob/95331da/src/computeShadows.ts#L39)

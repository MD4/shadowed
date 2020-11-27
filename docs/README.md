**[shadowed](README.md)**

> Globals

# shadowed

## Index

### Functions

* [computeShadows](README.md#computeshadows)

## Functions

### computeShadows

▸ `Const`**computeShadows**(`bounds`: Bounds, `walls`: Segment2[], `light`: Vec2): Vec2[][]

*Defined in [computeShadows.ts:39](https://github.com/MD4/shadowed/blob/61455c6/src/computeShadows.ts#L39)*

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

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`bounds` | Bounds | A rectangle where the shadows will be contained. |
`walls` | Segment2[] | Segments that will cast shadows. |
`light` | Vec2 | Position of the light.  |

**Returns:** Vec2[][]

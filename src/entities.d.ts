export interface Vec2 {
  x: number;
  y: number;
}

export interface Bounds {
  topLeft: Vec2;
  bottomRight: Vec2;
}

export interface Segment2 {
  a: Vec2;
  b: Vec2;
}

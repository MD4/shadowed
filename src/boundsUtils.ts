import type { Bounds, Segment2, Vec2 } from './entities';
import { BOUNDS_PAD } from './constants';
import { getIntersection } from './getIntersection';

/**
 * @hidden
 */
export const padBounds = ({ topLeft, bottomRight }: Bounds): Bounds => ({
  topLeft: { x: topLeft.x - BOUNDS_PAD, y: topLeft.y - BOUNDS_PAD },
  bottomRight: { x: bottomRight.x + BOUNDS_PAD, y: bottomRight.y + BOUNDS_PAD },
});

/**
 * @hidden
 */
export const isInBounds = (
  { topLeft, bottomRight }: Bounds,
  { x, y }: Vec2,
): boolean =>
  x > topLeft.x && y > topLeft.y && x < bottomRight.x && y < bottomRight.y;

/**
 * @hidden
 */
export const getBoundsWalls = ({
  topLeft,
  bottomRight,
}: Bounds): Segment2[] => [
  { a: { x: topLeft.x, y: topLeft.y }, b: { x: bottomRight.x, y: topLeft.y } },
  {
    a: { x: bottomRight.x, y: topLeft.y },
    b: { x: bottomRight.x, y: bottomRight.y },
  },
  {
    a: { x: bottomRight.x, y: bottomRight.y },
    b: { x: topLeft.x, y: bottomRight.y },
  },
  { a: { x: topLeft.x, y: bottomRight.y }, b: { x: topLeft.x, y: topLeft.y } },
];

/**
 * @hidden
 */
export const isWallInBounds = (bounds: Bounds) => (wall: Segment2): boolean =>
  isInBounds(bounds, wall.a) ||
  isInBounds(bounds, wall.b) ||
  getBoundsWalls(bounds).some((boundsWall) =>
    getIntersection(wall, boundsWall),
  );

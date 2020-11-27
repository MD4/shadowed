import type { Bounds, Segment2, Vec2 } from './entities';
import { sortClockwise } from './sortClockwise';
import { isNotNull } from './isNotNull';
import { getWallProjectionToBounds } from './getWallProjectionToBounds';
import { isWallInBounds, padBounds } from './boundsUtils';

/**
 * @hidden
 */
const computeShadow = (bounds: Bounds, light: Vec2) => (
  wall: Segment2,
): Vec2[] | null => {
  const projection = getWallProjectionToBounds(bounds, light, wall);

  return projection.length >= 2 ? projection.concat(wall.a, wall.b) : null;
};

/**
 * Computes casted shadows by a light for a given set of walls within specified bounds.
 * @param bounds A rectangle where the shadows will be contained.
 * @param walls Segments that will cast shadows.
 * @param light Position of the light.
 *
 * @example
 * ```ts
 * computeShadows(
 *   {
 *     topLeft: { x: 0, y: 0 },
 *     bottomRight: { x: 640, y: 360 },
 *   },
 *   [{
 *     a: { x: 20, y: 80 },
 *     b: { x: 80, y: 30}
 *   }],
 *   { x: 100, y: 200 },
 * );
 * ```
 */
export const computeShadows = (
  bounds: Bounds,
  walls: Segment2[],
  light: Vec2,
): Vec2[][] =>
  walls
    .filter(isWallInBounds(bounds))
    .map(computeShadow(padBounds(bounds), light))
    .filter(isNotNull)
    .map(sortClockwise);

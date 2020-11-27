import type { Bounds, Segment2, Vec2 } from './entities';
import { getIntersection } from './getIntersection';
import { PRECISION } from './constants';
import { isInBounds } from './boundsUtils';

/**
 * @hidden
 */
const computeLightRay = (target: Vec2, light: Vec2): Segment2 => ({
  a: light,
  b: {
    x:
      light.x +
      Math.cos(Math.atan2(target.y - light.y, target.x - light.x) + PRECISION),
    y:
      light.y +
      Math.sin(Math.atan2(target.y - light.y, target.x - light.x) + PRECISION),
  },
});

/**
 * @hidden
 */
const computeLightRayIntersection = (
  target: Vec2,
  light: Vec2,
  wall: Segment2,
): Vec2 | null => getIntersection(computeLightRay(target, light), wall);

/**
 * @hidden
 */
export const computeLightRayIntersectionWithinBounds = (
  bounds: Bounds,
  wallExt: Vec2,
  light: Vec2,
  boundsWall: Segment2,
): Vec2 | null => {
  const intersection = computeLightRayIntersection(wallExt, light, boundsWall);

  if (intersection) {
    return isInBounds(bounds, wallExt) ? intersection : wallExt;
  }

  return null;
};

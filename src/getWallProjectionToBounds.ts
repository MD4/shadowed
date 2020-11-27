import type { Bounds, Segment2, Vec2 } from './entities';
import { getBoundsWalls } from './boundsUtils';
import { isNotNull } from './isNotNull';
import { computeLightRayIntersectionWithinBounds } from './computeLightRayIntersection';

/**
 * @hidden
 */
export const getWallProjectionToBounds = (
  bounds: Bounds,
  light: Vec2,
  wall: Segment2,
): Vec2[] =>
  getBoundsWalls(bounds)
    .map((boundsWall) => [
      computeLightRayIntersectionWithinBounds(
        bounds,
        wall.a,
        light,
        boundsWall,
      ),
      computeLightRayIntersectionWithinBounds(
        bounds,
        wall.b,
        light,
        boundsWall,
      ),
      computeLightRayIntersectionWithinBounds(bounds, boundsWall.a, light, wall)
        ? boundsWall.a
        : null,
    ])
    .reduce((acc, value) => acc.concat(value))
    .filter(isNotNull);

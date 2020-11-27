import type { Segment2, Vec2 } from './entities';

/**
 * @hidden
 */
export const getIntersection = (
  ray: Segment2,
  segment: Segment2,
): Vec2 | null => {
  const r_px = ray.a.x;
  const r_py = ray.a.y;
  const r_dx = ray.b.x - ray.a.x;
  const r_dy = ray.b.y - ray.a.y;

  const s_px = segment.a.x;
  const s_py = segment.a.y;
  const s_dx = segment.b.x - segment.a.x;
  const s_dy = segment.b.y - segment.a.y;

  const r_mag = Math.sqrt(r_dx * r_dx + r_dy * r_dy);
  const s_mag = Math.sqrt(s_dx * s_dx + s_dy * s_dy);

  if (r_dx / r_mag == s_dx / s_mag && r_dy / r_mag == s_dy / s_mag) {
    return null;
  }

  const T2 =
    (r_dx * (s_py - r_py) + r_dy * (r_px - s_px)) / (s_dx * r_dy - s_dy * r_dx);
  const T1 = (s_px + s_dx * T2 - r_px) / r_dx;

  if (T1 < 0) return null;
  if (T2 < 0 || T2 > 1) return null;

  return {
    x: r_px + r_dx * T1,
    y: r_py + r_dy * T1,
  };
};

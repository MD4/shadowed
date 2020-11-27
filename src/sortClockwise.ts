/**
 * All credits to @Blindman67
 * https://stackoverflow.com/users/3877726/blindman67
 *
 * @see https://stackoverflow.com/a/45662872/10681298
 */
import type { Vec2 } from './entities';

/**
 * TODO: refactor this in a more elegant way.
 * @hidden
 */
export const sortClockwise = (_vertices: Vec2[]): Vec2[] => {
  const vertices = [..._vertices];

  vertices.sort((a, b) => a.y - b.y);

  const cy = (vertices[0].y + vertices[vertices.length - 1].y) / 2;

  vertices.sort((a, b) => b.x - a.x);

  const cx = (vertices[0].x + vertices[vertices.length - 1].x) / 2;
  const center = { x: cx, y: cy };

  let startAng = 0;

  return vertices
    .map((vertex) => {
      let angle = Math.atan2(vertex.y - center.y, vertex.x - center.x);
      if (!startAng) {
        startAng = angle;
      } else {
        if (angle < startAng) {
          // ensure that all vertices are clockwise of the start vertex
          angle += Math.PI * 2;
        }
      }

      return {
        ...vertex,
        angle,
      };
    })
    .sort((a, b) => a.angle - b.angle)
    .map(({ x, y }) => ({
      x,
      y,
    }));
};

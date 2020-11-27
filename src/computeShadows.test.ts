import { computeShadows } from './computeShadows';

describe('computeShadows', () => {
  it('compute shadows', () => {
    expect(
      computeShadows(
        {
          topLeft: { x: 0, y: 0 },
          bottomRight: { x: 640, y: 360 },
        },
        [
          // Polygon #1
          { a: { x: 100, y: 150 }, b: { x: 120, y: 50 } },
          { a: { x: 120, y: 50 }, b: { x: 200, y: 80 } },
          { a: { x: 200, y: 80 }, b: { x: 140, y: 210 } },
          { a: { x: 140, y: 210 }, b: { x: 100, y: 150 } },

          // Polygon #2
          { a: { x: 100, y: 200 }, b: { x: 120, y: 250 } },
          { a: { x: 120, y: 250 }, b: { x: 60, y: 300 } },
          { a: { x: 60, y: 300 }, b: { x: 100, y: 200 } },

          // Polygon #3
          { a: { x: 200, y: 260 }, b: { x: 220, y: 150 } },
          { a: { x: 220, y: 150 }, b: { x: 300, y: 200 } },
          { a: { x: 300, y: 200 }, b: { x: 350, y: 320 } },
          { a: { x: 350, y: 320 }, b: { x: 200, y: 260 } },

          // Polygon #4
          { a: { x: 340, y: 60 }, b: { x: 360, y: 40 } },
          { a: { x: 360, y: 40 }, b: { x: 370, y: 70 } },
          { a: { x: 370, y: 70 }, b: { x: 340, y: 60 } },

          // Polygon #5
          { a: { x: 450, y: 190 }, b: { x: 560, y: 170 } },
          { a: { x: 560, y: 170 }, b: { x: 540, y: 270 } },
          { a: { x: 540, y: 270 }, b: { x: 430, y: 290 } },
          { a: { x: 430, y: 290 }, b: { x: 450, y: 190 } },

          // Polygon #6
          { a: { x: 400, y: 95 }, b: { x: 580, y: 50 } },
          { a: { x: 580, y: 50 }, b: { x: 480, y: 150 } },
          { a: { x: 480, y: 150 }, b: { x: 400, y: 95 } },
        ],
        { x: 200, y: 200 },
      ),
    ).toMatchSnapshot();
  });
  it('excludes out-of-bounds walls', () => {
    expect(
      computeShadows(
        {
          topLeft: { x: 0, y: 0 },
          bottomRight: { x: 640, y: 360 },
        },
        [{ a: { x: 500, y: 400 }, b: { x: 700, y: 350 } }],
        { x: 200, y: 200 },
      ),
    ).toStrictEqual([]);
  });
});

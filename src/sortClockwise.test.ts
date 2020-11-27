import { sortClockwise } from './sortClockwise';

describe('sortClockwise', () => {
  it('sort vertices clockwise', () => {
    expect(
      sortClockwise([
        { x: 200, y: 260 },
        { x: 300, y: 200 },
        { x: 220, y: 150 },
        { x: 350, y: 320 },
      ]),
    ).toStrictEqual([
      { x: 350, y: 320 },
      { x: 200, y: 260 },
      { x: 220, y: 150 },
      { x: 300, y: 200 },
    ]);
  });
});

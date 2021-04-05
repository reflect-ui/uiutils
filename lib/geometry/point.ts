import { Point } from "../types";

export function distanceBetween(
  { x: x1, y: y1 }: Point,
  { x: x2, y: y2 }: Point
): number {
  const a = x2 - x1;
  const b = y2 - y1;

  return Math.sqrt(a * a + b * b);
}

export function pointSum(
  { x: x1, y: y1 }: Point,
  { x: x2, y: y2 }: Point
): Point {
  return {
    x: x1 + x2,
    y: y1 + y2,
  };
}

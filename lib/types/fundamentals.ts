/**
 * simple x, y point
 */
export type Point = { x: number; y: number };

/**
 * Transform data represented by affine transformation
 */
export type Transform = [[number, number, number], [number, number, number]];

/**
 * Rect data in a x,y, width, height format
 */
export type Rect = { x: number; y: number; width: number; height: number };

/**
 * represents a simple vector data - x, y
 */
export type Vector = {
  readonly x: number;
  readonly y: number;
};

//
// region colors
//
export interface RGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export interface RGBA {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number;
}

export interface RGBAF {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number;
}
//
// endregion colors
//

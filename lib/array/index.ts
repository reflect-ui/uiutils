export * from "./is-all-equal";
export * from "./nearest-value";
export * from "./make-range-array";

// region filters
import { onlyUnique } from "./filter-only-unique";
import { notEmpty } from "../validators/not-empty";
export const filters = {
  onlyUnique,
  notEmpty,
};
// endregion

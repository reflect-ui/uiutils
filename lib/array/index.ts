export * from "./is-all-equal";

// region filters
import { onlyUnique } from "./filter-only-unique";
import { notEmpty } from "../validators/not-empty";
export const filters = {
  onlyUnique,
  notEmpty,
};
// endregion

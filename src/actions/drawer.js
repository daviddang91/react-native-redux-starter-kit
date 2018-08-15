import type { Action } from "../constants/action-types";
import  { OPEN_DRAWER, CLOSE_DRAWER } from "../constants/action-types";

export function openDrawer():Action {
  return {
    type: OPEN_DRAWER,
  };
}

export function closeDrawer():Action {
  return {
    type: CLOSE_DRAWER,
  };
}

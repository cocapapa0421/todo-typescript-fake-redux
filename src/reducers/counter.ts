import { ActionT } from "../types/types";
export default function counter(state = 0, action: ActionT) {
  if (action.type === "INCREMENT") {
    return state + action.payload.step;
  }

  return state;
}

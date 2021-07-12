import { TodoStateT, ActionT } from "./../types/types";

export default function todolist(
  state: TodoStateT = { status: "idle", data: [], idEdit: "" },
  action: ActionT
) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        status: "success",
        data: [...state.data, action.payload.item],
      };

    case "SET_ID_EDIT":
      return {
        ...state,
        idEdit: action.payload.id,
      };

    case "EDIT_ITEM":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id !== action.payload.item.id) {
            return item;
          }

          return {
            ...item,
            content: action.payload.item.content,
          };
        }),
        idEdit: "",
      };

    case "COMPLETE_ITEM":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id !== action.payload.item.id) {
            return item;
          }

          return {
            ...item,
            complete: action.payload.item.complete,
          };
        }),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}

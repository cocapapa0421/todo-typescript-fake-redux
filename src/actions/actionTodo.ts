import { Type, CardT } from "../types/types";
import store from "../configureStore";
import {
  asyncAddCard,
  asyncEditCard,
  asyncCompleteCard,
  asyncDeleteCard,
} from "../api/TodoAPI";

export async function actionAddCard(content: Type) {
  if (!content) {
    return;
  }

  const data = {
    content,
    complete: false,
    createdDate: Date.now().toString(),
  };

  const item = await asyncAddCard(data);

  store.dispatch({
    type: "ADD_ITEM",
    payload: { item },
  });
}

export function actionSetIdEdit(id: string) {
  if (!id) {
    return;
  }

  store.dispatch({
    type: "SET_ID_EDIT",
    payload: { id },
  });
}

export async function actionEditCard({
  id,
  content,
}: Pick<CardT, "id" | "content">) {
  if (!id || !content) {
    return;
  }
  const data = await asyncEditCard({ id, content });

  store.dispatch({
    type: "EDIT_ITEM",
    payload: { item: data },
  });
}

export async function actionCompleteCard(id: string) {
  if (!id) {
    return;
  }

  const data = await asyncCompleteCard(id);

  store.dispatch({
    type: "COMPLETE_ITEM",
    payload: { item: data },
  });
}

export async function actionDeleteCard(id: string) {
  if (!id) {
    return;
  }

  const deleteCardId = await asyncDeleteCard(id);

  store.dispatch({
    type: "DELETE_ITEM",
    payload: { id: deleteCardId },
  });
}

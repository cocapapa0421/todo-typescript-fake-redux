import { CardT } from "./../types/types";
import { config } from "../config/config";
import axios from "axios";

export interface CardResultT {
  id: string;
  content: string;
  complete: boolean;
  createdDate: string;
}

const {
  api: { baseUrl },
} = config;

export async function asyncAddCard(item: Pick<CardT, "content" | "complete">) {
  const respon = await axios({
    method: "post",
    url: baseUrl,
    data: item,
  });
  const data: CardResultT = respon.data;

  return data;
}

export async function asyncEditCard({
  id,
  content,
}: Pick<CardT, "id" | "content">) {
  const respon = await axios({
    method: "put",
    url: `${baseUrl}/${id}`,
    data: { content },
  });
  const data: CardResultT = respon.data;
  return data;
}

export async function asyncCompleteCard(id: string) {
  const card = await getCard(id);
  const respon = await axios({
    method: "put",
    url: `${baseUrl}/${id}`,
    data: { complete: !card.complete },
  });

  const data: CardResultT = respon.data;
  return data;
}

export async function asyncDeleteCard(id: string) {
  const respon = await axios({
    method: "delete",
    url: `${baseUrl}/${id}`,
  });
  const data: CardResultT = respon.data;
  return data.id;
}

async function getCard(id: string) {
  const respon = await axios.get(`${baseUrl}/${id}`);
  const data: CardResultT = respon.data;
  return data;
}

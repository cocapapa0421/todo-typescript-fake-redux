import { CardT } from "../../types/types";
import Card from "../Card/Card";
import "./ListCard.scss";

export default function ListCard(list: CardT[]) {
  return `
    <div class="todo__list">
      ${
        !!list.length
          ? list.map(Card).join(" ")
          : "No records, please add a new one"
      }
    </div>
  `;
}

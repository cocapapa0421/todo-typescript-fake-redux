import Button from "../Button/Button";
import { CardT } from "../../types/types";
import "./Card.scss";

export default function Card({ id, content, complete }: CardT) {
  const dataAttributes = [`data-id=${id}`];
  const completeButtonClassName = `button--complete complete ${
    complete ? "is-active" : ""
  }`;
  return `
    <div class="card grid ${complete ? "is-active" : ""}">
      <div class="card__status">
        ${Button({
          text: "Complete",
          className: completeButtonClassName,
          dataAttributes,
        })}
      </div>
      <div class="card__content">${content}</div>
      <div class="card__actions">
        ${Button({
          text: "Edit",
          className: "button--edit edit",
          dataAttributes,
        })}
        ${Button({
          text: "Delete",
          className: "button--delete delete",
          dataAttributes,
        })}
      </div>
    </div>
  `;
}

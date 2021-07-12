import "./Button.scss";

export interface ButtonT {
  text: string;
  className?: string;
  dataAttributes?: string[];
}

export default function Button({ text, className, dataAttributes }: ButtonT) {
  return `
    <button class="button ${!!className ? className : ""}" ${
    dataAttributes ? dataAttributes.join(" ") : ""
  }>
      <span class="button__text">${text}</span>
    </button>
  `;
}

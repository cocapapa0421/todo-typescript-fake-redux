import axios from "axios";
import "./scss/styles.scss";
import Todo from "./components/Todo/Todo";
import { config } from "./config/config";

const {
  api: { baseUrl },
} = config;

function witData<T extends { new (...args: any): any }>(Component: T) {
  class TodoWithData {
    constructor(private selector: string) {
      this.init();
    }

    private async getData() {
      const respon = await axios.get(baseUrl);
      const data = respon.data;

      return data;
    }

    private async init() {
      const data = await this.getData();
      return new Component(this.selector, {
        status: "idle",
        data: data,
        idEdit: "",
      });
    }
  }

  return TodoWithData;
}

const TodoWithData = witData(Todo);
new TodoWithData("#app");

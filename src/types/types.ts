export type Type = string;
export type ListenerT = () => void;
export type UnSubscribeT = () => void;
export type StatusT = "idle" | "request" | "success" | "failure";
export interface ActionT {
  type: Type;
  payload?: any;
}
export interface CardT {
  id: string;
  content: string;
  complete?: boolean;
  createdDate?: string;
}
export interface TodoStateT {
  status: StatusT;
  idEdit: "";
  data: CardT[];
}

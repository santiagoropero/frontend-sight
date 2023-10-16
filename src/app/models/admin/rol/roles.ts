import { MessageResponse } from "../../generic-response";

export interface ResponseAllRol {
  messageResponse: MessageResponse;
  data:            ResponseAllRolData;
  message:         null;
}

export interface ResponseAllRolData {
  roles: Role[];
}

export interface Role {
  idRol: number;
  name:  string;
  state: string;
}

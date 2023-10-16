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

// Crear rol
export class RequestCreateRol {
  name!:  string;
  state!: string;
}

export interface ResponseCreateRol {
  messageResponse: MessageResponse;
  data:            ResponseCreateRolData;
  message:         string;
}

export interface ResponseCreateRolData {
  rol: Role;
}




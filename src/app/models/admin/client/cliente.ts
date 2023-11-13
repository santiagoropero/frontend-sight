import { MessageResponse } from "../../generic-response";

export interface ResponseAllClient {
  messageResponse: MessageResponse;
  data:            ResponseAllClientData;
  message:         null;
}

export interface ResponseAllClientData {
  clients: Client[];
}

export interface Client {
  idClient: number;
  name:     string;
  state:    string;
}

export class RequestCreateClient {
  name!:  string;
  state!: string;
}

export interface ResponseCreateClient {
  messageResponse: MessageResponse;
  data:            ResponseCreateClientData;
  message:         string;
}

export interface ResponseCreateClientData {
  name:  string;
  state: string;
}


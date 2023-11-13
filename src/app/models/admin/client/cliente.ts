import { MessageResponse } from "../../generic-response";

export interface ResponseAllClient {
  messageResponse: MessageResponse;
  data:            Data;
  message:         null;
}

export interface Data {
  clients: Client[];
}

export interface Client {
  idClient: number;
  name:     string;
  state:    string;
}


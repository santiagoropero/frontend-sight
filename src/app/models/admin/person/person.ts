import { MessageResponse } from "../../generic-response";
import { Role } from "../roles/roles";

export interface ResponseAllPerson {
  messageResponse: MessageResponse;
  data:            ResponseAllPersonData;
  message:         null;
}

export interface ResponseAllPersonData {
  persons: Person[];
}

export interface Person {
  idPerson:  number;
  names:     string;
  lastNames: string;
  email:     string;
  state:     string;
  rol:       Role;
}


export class RequestCreatePerson {
  numberIdentification!: number;
  names!:                string;
  lastNames!:            string;
  email!:                string;
  state!:                string;
  rol!:                  number;
}

export interface ResponseCreatePerson {
  messageResponse: MessageResponse;
  data:            ResponseCreatePersonData;
  message:         string;
}

export interface ResponseCreatePersonData {
  numberIdentification: number;
  names:                string;
  lastNames:            string;
  email:                string;
  state:                string;
}

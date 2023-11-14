import { MessageResponse } from "../../generic-response";
import { Client } from "../client/cliente";
import { Person } from "../person/person";

export interface ResponseAllProject {
  messageResponse: MessageResponse;
  data:            ResponseAllProjectData;
  message:         null;
}

export interface ResponseAllProjectData {
  projects: Project[];
}

export interface Project {
  idProject: number;
  name:      string;
  startDate: Date;
  endDate:   Date;
  state:     string;
  client:    Client;
  person:    Person;
}

export class RequestCreateProject {
  name!:      string;
  client!:    number;
  person!:    number;
  dateStart!: string | null;
  dateEnd!:   string | null;
  state!:     string;
}

export interface ResponseCreateProject {
  messageResponse: MessageResponse;
  data:            ResponseCreateProjectData;
  message:         string;
}

export interface ResponseCreateProjectData {
  name:      string;
  startDate: Date;
  endDate:   Date;
  state:     string;
}

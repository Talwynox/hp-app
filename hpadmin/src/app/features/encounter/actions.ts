import { EncounterActionTypes } from './types';
import { Encounter } from "../../../services/openAPIClient";
import { action } from "typesafe-actions"

export const loadAction = (encounters: Encounter[]) =>  action(EncounterActionTypes.LOAD, encounters)


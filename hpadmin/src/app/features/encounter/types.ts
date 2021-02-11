import { Encounter } from '../../../services/openAPIClient/models/Encounter';
import { ActionType } from 'typesafe-actions';
import * as encounterAction from './actions';

export enum EncounterActionTypes {
  LOAD = 'load'
}

export type EncounterActions = ActionType<typeof encounterAction>;

export type EncounterState = {
    encounters: Encounter[]
}
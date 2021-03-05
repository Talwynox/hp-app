import { Encounter } from '../../../services/hpcore/';
import { ActionType } from 'typesafe-actions';
import * as encounterAction from './actions';

export enum EncounterActionTypes {
  GET_ALL = 'getAll',
  MERGE_STATE = 'mergeState'
}

export type EncounterActions = ActionType<typeof encounterAction>;

export type EncounterState = {
    encounters: Encounter[]
}
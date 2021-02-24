import { Encounter } from './../../../services/openAPIClient/models/Encounter';
import { EncounterActionTypes } from './types'
import { action } from "typesafe-actions"

export const getAllAction = () =>  action(EncounterActionTypes.GET_ALL, [])
export const mergeStateAction = (encounters: Encounter[]) =>  action(EncounterActionTypes.MERGE_STATE, encounters)

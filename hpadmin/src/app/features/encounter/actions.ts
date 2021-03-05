import { EncounterActionTypes } from './types'
import { action } from "typesafe-actions"
import { Encounter } from '../../../services/hpcore'

export const getAllAction = () =>  action(EncounterActionTypes.GET_ALL, [])
export const mergeStateAction = (encounters: Encounter[]) =>  action(EncounterActionTypes.MERGE_STATE, encounters)

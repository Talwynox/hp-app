import { EncounterControllerApi } from '../../../services/hpcore';
import { Encounter } from './../../../services/hpcore/models/Encounter';
import { EncounterActions, EncounterActionTypes, EncounterState } from './types'

export function encounterReducer(
    state: EncounterState = {encounters: []},
    action: EncounterActions
  ): EncounterState {
    switch (action.type) {
        case EncounterActionTypes.MERGE_STATE:
            return {
                ...state,
                encounters: action.payload
            }
        case EncounterActionTypes.MERGE_ENCOUNTER:
            let encounter: Encounter = action.payload
            new EncounterControllerApi().insert({encounter})
            return state
        default:
            return state
    }
}
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
        default:
            return state
    }
}
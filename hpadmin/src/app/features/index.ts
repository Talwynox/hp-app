import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { encounterReducer } from './encounter/reducers'
import { getEncountersEpic } from './encounter/epics';

export const rootEpic = combineEpics(
  getEncountersEpic
)

export const rootReducer = combineReducers({
  encounterReducer
})
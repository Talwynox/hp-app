import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { encounterReducer } from './encounter/reducers'
import { getAllEncountersEpic } from './encounter/epics';

export const rootEpic = combineEpics(
  getAllEncountersEpic
)

export const rootReducer = combineReducers({
  encounterReducer
})
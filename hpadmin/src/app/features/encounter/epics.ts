import { Encounter, EncounterControllerApi } from '../../../services/openAPIClient';
import { EncounterActionTypes } from './types';
import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { filter, mergeMap } from "rxjs/operators"
import { mergeStateAction } from './actions';

const getAll = () => {
  return new EncounterControllerApi()
  .getAll()
  .then((response: Encounter[])=>{
    return (mergeStateAction(response))
  })
}

export const getAllEncountersEpic: Epic = (action$) =>
  action$.pipe(
    filter(isOfType((EncounterActionTypes.GET_ALL))),
    mergeMap(() => getAll())
  )

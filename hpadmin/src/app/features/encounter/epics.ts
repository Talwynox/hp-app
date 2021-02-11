import { Encounter, EncounterControllerApi } from '../../../services/openAPIClient';
import { EncounterActionTypes } from './types';
import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { filter, mergeMap } from "rxjs/operators"


export const getEncountersEpic: Epic = (action$) =>
  action$.pipe(
    filter(isOfType((EncounterActionTypes.LOAD))),
    mergeMap(() =>  new EncounterControllerApi()
      .getAll()
      .then((response: Encounter[])=>{
        return ({type: EncounterActionTypes.LOAD, payload: response})
      }))
  )

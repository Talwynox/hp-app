import React, { useEffect, useState } from 'react'
import { connect, RootStateOrAny } from 'react-redux'
import { getAllAction, mergeEncounterAction } from '../../../app/features/encounter/actions'
import { RouteComponentProps } from 'react-router-dom'
import { EncounterStats } from './EncounterStats'
import { Button, Card, CardActions, CardContent, Grid } from '@material-ui/core'
import { Encounter } from '../../../services/hpcore'
import { EncounterFeatures } from './EncounterFeatures'

interface Props{
  encounter: Encounter
  loadData: () => void
  mergeData: (encounter: Encounter) => void
}

interface MatchParams{
  name: string
}

const mapStateToProps = (state: RootStateOrAny, props: RouteComponentProps<MatchParams>) => ({
  encounter: state.encounterReducer.encounters.find((item: Encounter) => item.name === props.match.params.name)
})

const mapDispatchToProps = (dispatch: any) => ({ 
  loadData: () => dispatch(getAllAction()),
  mergeData: (encounter: Encounter) => dispatch(mergeEncounterAction(encounter))
})

export const EncounterDetails = (props: Props) => {
  const [encounter, setEncounter] = useState<Encounter>(props.encounter)

  useEffect(() => {
    props.loadData()
  }, [])

  useEffect(() => {
    setEncounter(props.encounter)
  }, [props.encounter])

  const onSubmit = () => {
    if(encounter !== undefined){
      props.mergeData(encounter)
    }
  }  

  return props.encounter === undefined ? null : (
    <Card>
      <CardContent>
        <h1>{props.encounter.name}</h1>
        {encounter !== undefined &&
        <Grid container justify="center">
          <Grid key="stats" item>
            <EncounterStats encounter={encounter} setEncounter={setEncounter}/>
          </Grid>
          <Grid key="features" item>
            <EncounterFeatures encounter={encounter} setEncounter={setEncounter}/>
          </Grid>
        </Grid>
        }
      </CardContent>
      <CardActions>
        <Button variant="outlined" onClick={onSubmit}>Save Changes</Button>
      </CardActions>
    </Card>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EncounterDetails)

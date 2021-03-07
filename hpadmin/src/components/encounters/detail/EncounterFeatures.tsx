import { Grid, List, ListItem, TextField } from '@material-ui/core'
import { Action, Encounter, Feature } from '../../../services/hpcore'

interface Props{
    encounter: Encounter,
    setEncounter: (encounter: Encounter) => void
}

export const EncounterFeatures = (props: Props) => {

  //TODO set feature / actions

  return (
    <Grid container justify="center">
        <Grid item>
        <List>
            {props.encounter.features.map((feature: Feature) => (
            <ListItem>
                <TextField id="standard-basic" type="number" label="Name" value={feature.name}/>
                <TextField id="standard-basic" type="number" label="Description" value={feature.description} multiline variant="outlined"/>
            </ListItem>
            ))}
        </List>      
        </Grid>
        <Grid item>
        <List>
            {props.encounter.actions.map((action: Action) => (
            <ListItem>
              <TextField id="standard-basic" type="number" label="Name" value={action.name}/>
              <TextField id="standard-basic" type="number" label="Description" value={action.description} multiline variant="outlined"/>
            </ListItem>
            ))}
        </List>      
        </Grid>
    </Grid>        
  )
}
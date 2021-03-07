import { Grid, List, ListItem, TextField } from '@material-ui/core'
import { Encounter } from '../../../services/hpcore'

interface Props{
  encounter: Encounter,
  setEncounter: (encounter: Encounter) => void
}

export const EncounterStats = (props: Props) => {
  return (
    <Grid container justify="center">
      <Grid item>
        <List>
          <ListItem>
            <TextField id="standard-basic" type="number" label="CR" value={props.encounter.challengeRating} 
            onChange={e => props.setEncounter({ ...props.encounter, challengeRating: parseFloat(e.target.value) })}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" type="number" label="Armor Class" value={props.encounter.armorClass}
            onChange={e => props.setEncounter({ ...props.encounter, armorClass: parseInt(e.target.value) })}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" type="number" label="HP" value={props.encounter.hitPoints}
            onChange={e => props.setEncounter({ ...props.encounter, hitPoints: parseInt(e.target.value) })}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" type="number" label="Move Speed" value={props.encounter.moveSpeed} 
            onChange={e => props.setEncounter({ ...props.encounter, moveSpeed: parseInt(e.target.value) })}/>
          </ListItem>
        </List>      
      </Grid>
      <Grid item>
        <List>
          <ListItem>
            <TextField id="standard-basic" type="number" label="Strength" value={props.encounter.strength}
            onChange={e => props.setEncounter({ ...props.encounter, strength: parseInt(e.target.value) })}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" type="number" label="Dexterity" value={props.encounter.dexterity}
            onChange={e => props.setEncounter({ ...props.encounter, dexterity: parseInt(e.target.value) })}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" type="number" label="Constitution" value={props.encounter.constitution}
            onChange={e => props.setEncounter({ ...props.encounter, constitution: parseInt(e.target.value) })}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" type="number" label="Intelligence" value={props.encounter.intelligence}
            onChange={e => props.setEncounter({ ...props.encounter, intelligence: parseInt(e.target.value) })}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" type="number" label="Wisdom" value={props.encounter.wisdom}
            onChange={e => props.setEncounter({ ...props.encounter, wisdom: parseInt(e.target.value) })}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" type="number" label="Charisma" value={props.encounter.charisma}
            onChange={e => props.setEncounter({ ...props.encounter, charisma: parseInt(e.target.value) })}/>
          </ListItem>
        </List>      
      </Grid>
    </Grid>        
  )
}
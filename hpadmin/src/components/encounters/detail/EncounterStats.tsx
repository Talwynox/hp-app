import { Button, Card, CardActions, CardContent, List, ListItem, ListItemIcon, ListItemText, ListSubheader, TextField } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { Encounter } from '../../../services/hpcore'
import BallotIcon from '@material-ui/icons/Ballot'
import React, { useState } from 'react'

interface Props{
  encounter: Encounter
}

export const EncounterOverview = (props: Props) => {
  const onSubmit = () => {
    //TODO
  }
  return (
    <Card>
      <CardContent>
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {props.encounter.name}
            </ListSubheader>
          }>
          <ListItem>
            <TextField id="standard-basic" label="Armor Class" defaultValue={props.encounter.armorClass}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" label="Hit Points" defaultValue={props.encounter.hp}/>
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" label="Hit Points" defaultValue={props.encounter.challengeRating}/>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button onClick={onSubmit} size="small">Save Changes</Button>
      </CardActions>
    </Card>
  )
}

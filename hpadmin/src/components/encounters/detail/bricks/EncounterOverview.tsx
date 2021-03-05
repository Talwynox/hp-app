import { Card, CardContent, Collapse, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import BallotIcon from '@material-ui/icons/Ballot'
import { StatList } from './StatList'
import { Encounter } from '../../../../services/openAPIClient'
import { useState } from 'react'

interface Props{
  encounter: Encounter
}

export const EncounterOverview = (props: Props) => {
  const [open, setOpen] = useState(true)
  const handleClick = () => {setOpen(!open)}
  
  return (
    <Card>
      <CardContent>
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {props.encounter.name}
            </ListSubheader>
          }>
          <ListItem onClick={handleClick}>
            <ListItemIcon>
              <BallotIcon/>
            </ListItemIcon>
            <ListItemText primary="Stats" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <StatList stats={props.encounter.stats}/>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  )
}

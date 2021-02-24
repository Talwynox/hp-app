import { Stat } from '../../../../services/openAPIClient'
import { Button, Card, CardActions, CardContent, List, ListItem, ListSubheader, TextField, Typography } from '@material-ui/core'
import React from 'react'

interface Props {
  stat: Stat
}

export const StatDetails = (props: Props) => {  
  return (
    <Card>
      <CardContent>
        <Typography component="h1">
          {props.stat.name}
        </Typography>
        <Typography color="textSecondary">
          {props.stat.value}
        </Typography>
        <TextField id="baseValue" label="Base Value" variant="outlined" />
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Modifiers
            </ListSubheader>
          }>
          {props.stat.modifiers.map(modifier => (
            <ListItem>
              <Typography color="textSecondary">
                {props.stat.value}
              </Typography>
              <TextField id="base" label="Base Value" variant="outlined" />
              <TextField id="roll" label="Roll" variant="outlined" />
              <TextField id="stat" label="Stat" variant="outlined" />
              <TextField id="statMultiplier" label="Stat Multiplier" variant="outlined" />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">Save Changes</Button>
      </CardActions>
    </Card>
  )
}


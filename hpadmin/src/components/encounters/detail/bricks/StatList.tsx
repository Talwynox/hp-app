import { Stat } from '../../../../services/openAPIClient'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { DetailType } from '../EncounterDetails'

interface Props {
  stats: Stat[]
  onStatClicked: Function
}

export const StatList = (props: Props) => {  
  return (
    <List>
      {props.stats.map((stat: Stat) => (
      <ListItem button key={stat.name} onClick={props.onStatClicked(stat, DetailType.STAT)}>
        <ListItemText primary={stat.name} />
        <ListItemText primary={stat.value} />
      </ListItem>
      ))}
    </List>
  )
}


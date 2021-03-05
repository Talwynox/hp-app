import { Stat } from '../../../../services/openAPIClient'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { StatDetails } from './StatDetails'
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Props {
  stats: Stat[]
}

export const StatList = (props: Props) => {  
  const [open, setOpen] = useState(true)

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Stat</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.stats.map((stat: Stat) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

/*
<List>
      {props.stats.map((stat: Stat) => (
      <ListItem button key={stat.name}>
         <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        <ListItemText primary={stat.name} />
        <ListItemText primary={stat.value} />
        <StatDetails stat={stat}/>
      </ListItem>
      ))}
    </List>
*/
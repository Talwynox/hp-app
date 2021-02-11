import React, { useEffect } from 'react'
import './style.css'
import { connect, RootStateOrAny } from 'react-redux'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Encounter } from '../../services/openAPIClient'
import { store } from '../../app/store'
import { loadAction } from '../../app/features/encounter/actions'

interface Props {
  items: Encounter[]
}

const mapStateToProps = (state: RootStateOrAny) => ({
  items: state.encounterReducer.encounters
})

export const EncounterList = (props: Props) => {

  useEffect(() => {
    store.dispatch({type: EncounterActionTypes.LOAD, payload: []})
  })

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((item: Encounter) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default connect(mapStateToProps)(EncounterList)

import { useEffect } from 'react'
import { connect, RootStateOrAny } from 'react-redux'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Encounter } from '../../../services/hpcore'
import { getAllAction } from '../../../app/features/encounter/actions'
import { Link } from 'react-router-dom'
import BallotIcon from '@material-ui/icons/Ballot'

interface Props {
  items: Encounter[]
  loadData: () => void
}

const mapStateToProps = (state: RootStateOrAny) => ({
  items: state.encounterReducer.encounters
})

const mapDispatchToProps = (dispatch: any) => ({ 
  loadData: () => dispatch(getAllAction())
});

export const EncounterList = (props: Props) => {
  useEffect(() => {
    props.loadData()
  }, [])

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((item: Encounter) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to={`/encounters/${item.name}`}>
                  <BallotIcon/>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EncounterList)

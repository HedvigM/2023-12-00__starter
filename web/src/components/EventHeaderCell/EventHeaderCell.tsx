import formatRelative from 'date-fns/formatRelative'
import type {
  FindEventHeaderQuery,
  FindEventHeaderQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

/* import prittyfyDate from 'src/helpers/dateHelp ers' */

import Button from '../Button/Button'
import Icon from '../Icon/Icon'

export const QUERY = gql`
  query FindEventHeaderQuery($id: String!) {
    event(id: $id) {
      date
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEventHeaderQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
  showEditForm,
}: CellSuccessProps<FindEventHeaderQuery, FindEventHeaderQueryVariables> & {
  showEditForm: () => void
}) => {
  const prittyfyDate = (dateString: string) => {
    const date = new Date(dateString)
    const baseDate = new Date()
    return formatRelative(date, baseDate)
  }
  return (
    <>
      <h3 className="font-handwriting text-4xl uppercase text-white">
        <>{prittyfyDate(event.date)}</>
      </h3>
      <div className="flex items-center gap-3">
        <h1 className="m-0 flex-1 p-0 font-condensed text-[100px] uppercase leading-[o.8] text-white">
          {event.name}
        </h1>
        <button onClick={showEditForm}>
          <>
            <Icon id="edit" />
            edit
          </>
        </button>
        <Button
          size="small"
          className="bg-supernova text-black"
          handleClick={() => {}}
        >
          Match
        </Button>
      </div>
    </>
  )
}

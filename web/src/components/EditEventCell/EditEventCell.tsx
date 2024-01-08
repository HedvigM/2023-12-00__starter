import type {
  FindEditEventQuery,
  FindEditEventQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventForm from '../EventForm/EventForm'
import SlideInPanel from '../SlideInPanel/SlideInPanel'

export const QUERY = gql`
  query FindEditEventQuery($id: String!) {
    event(id: $id) {
      name
      id
      sendReminder
      date
    }
  }
`
const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEventMutation($id: String!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      date
      id
      name
      sendReminder
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditEventQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
  editClose,
}: CellSuccessProps<FindEditEventQuery, FindEditEventQueryVariables> & {
  editClose: () => void
}) => {
  const [updateEvent, { loading }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event updated')
      editClose()
    },
    onError: (error) => {
      toast.error(error.message)
      console.log(error)
    },
  })

  const handleSubmit = (data) => {
    updateEvent({
      variables: {
        id: event.id,
        input: {
          name: data.eventName,
          date: data.eventDate,
          sendReminder: data.eventReminder,
        },
      },
    })
  }

  return (
    <div>
      <SlideInPanel handleClose={editClose}>
        <h1 className="leding-[0.8] m-0 p-0 font-condensed text-[116px] uppercase text-white">
          Edit Details
        </h1>
        <h2 className="mb-10 font-handwriting text-3xl uppercase text-white">
          it the current event
        </h2>
        <EventForm
          buttonLabel="Update"
          handleSubmit={handleSubmit}
          loading={loading}
          defaultValues={{
            eventName: event.name,
            eventDate: event.date,
            eventReminder: event.sendReminder,
          }}
        />{' '}
      </SlideInPanel>
    </div>
  )
}

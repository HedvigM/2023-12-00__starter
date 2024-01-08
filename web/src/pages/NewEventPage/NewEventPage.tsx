import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventForm from 'src/components/EventForm/EventForm'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const CREATE_EVENT_MUTATION = gql`
  mutation CreateEventMutation(
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    createEvent(
      input: { name: $name, date: $date, sendReminder: $sendReminder }
    ) {
      date
      id
      createdAt
      name
    }
  }
`

const NewEventPage = () => {
  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: (data) => {
      toast.success('Event created')
      navigate(routes.eventInvite({ id: data.createEvent.id }))
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleSubmit = (data) => {
    createEvent({
      variables: {
        name: data.eventName,
        date: data.eventDate,
        sendReminder: data.eventReminder,
      },
    })
  }

  return (
    <>
      <MetaTags title="Set up your event" />
      <div className="auth-form">
        <HeaderWithRulers
          className=" mb-8 text-white"
          heading="Set up your event"
        />
        <EventForm handleSubmit={handleSubmit} loading={loading} />
      </div>
    </>
  )
}

export default NewEventPage

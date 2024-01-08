import { DateField, Form, Label, TextField } from '@redwoodjs/forms'

import Checkbox from '../Checkbox/Checkbox'

interface EventFormProps {
  buttonLabel?: string
  defaultValues?: {
    eventName?: string
    eventDate?: string
    eventReminder?: boolean
  }
  handleSubmit: (data) => void
  loading: boolean
}

const EventForm = ({
  buttonLabel = 'Submit',
  defaultValues,
  handleSubmit,
  loading,
}: EventFormProps) => {
  const formateDateforInput = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  return (
    <Form onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <div className="field">
          <Label name="eventName">Event Name </Label>
          <TextField
            name="eventName"
            placeholder=""
            validation={{ required: true }}
            defaultValue={defaultValues.eventName}
          />
        </div>
        <div className="field">
          <Label name="eventDate">Event Date </Label>
          <DateField
            name="eventDate"
            placeholder=""
            validation={{ required: true }}
            defaultValue={formateDateforInput(defaultValues.eventDate)}
          />
        </div>
        <div className="field">
          <Checkbox
            defaultChecked={defaultValues.eventReminder}
            name="eventReminder"
            label="send out a reminder for an event"
          />
        </div>
        <button type="submit">{buttonLabel}</button>
      </fieldset>
    </Form>
  )
}

export default EventForm

import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import EditEventCell from 'src/components/EditEventCell'
import EventHeaderCell from 'src/components/EventHeaderCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitePage = ({ id }) => {
  const [showEdit, setShowEdit] = useState(false)

  const toggleShowEdit = () => {
    setShowEdit((prevValue) => !prevValue)
  }

  return (
    <>
      <MetaTags title="invite to event" description="EventInvite page" />
      <EventHeaderCell id={id} showEditForm={toggleShowEdit} />
      <InviteGroup id={id} />
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-3/4 transition-transform duration-500 ${
          showEdit ? `translate-x-0` : `translate-x-[120%]`
        }`}
      >
        <EditEventCell id={id} editClose={toggleShowEdit} />
      </div>
    </>
  )
}

export default EventInvitePage

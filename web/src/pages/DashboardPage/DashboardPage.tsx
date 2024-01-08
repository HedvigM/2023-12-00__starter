import { MetaTags, useQuery } from '@redwoodjs/web'

import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const GET_USERS = gql`
  query Redwood {
    users {
      avatar
      email
      firstName
      id
      lastName
    }
  }
`
const DashboardPage = () => {
  const {
    loading: usersLoading,
    error: usersError,
    data: usersData,
  } = useQuery(GET_USERS)
  console.log(usersLoading, usersError, usersData)

  if (usersLoading) return <div>Loading...</div>
  if (usersError) return <div>Error: {usersError.message}</div>
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
      <h1 className="label text-white">4 weeks & 2 days until</h1>
      <h2 className="label text-white">The Event</h2>
      <InviteGroup data={usersData.users} />
    </>
  )
}

export default DashboardPage

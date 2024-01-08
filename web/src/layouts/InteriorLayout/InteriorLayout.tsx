import { useState } from 'react'

import { useQuery } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'

import Footer from 'src/components/Footer/Footer'
import Hamburger from 'src/components/Hamburger/Hamburger'
import MyAccount from 'src/components/MyAccount/MyAccount'
import Nav from 'src/components/Nav/Nav'

type InteriorLayoutProps = {
  children?: React.ReactNode
}
const GET_USER = gql`
  query GetUser($id: Int!) {
    user(id: $id) {
      avatar
      email
      firstName
      lastName
    }
  }
`

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  const [showHamburger, setShowHamburger] = useState(false)
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_USER, {
    variables: {
      id: 1,
    },
  })

  if (userLoading) return <div>Loading...</div>
  if (userError) return <div>Error: {userError.message}</div>

  const handleHamburgerClick = () => {
    setShowHamburger(!showHamburger)
  }

  return (
    <>
      <Toaster />
      <main className="bg-interior pb-20">
        <aside className="col-span-4 bg-no-repeat pb-10">
          <img src="/images/bg__interior.svg" alt="" />
          <Hamburger handleClick={handleHamburgerClick} />
          {showHamburger && <Nav />}
          <img
            src="/images/logo__secret-santa.svg"
            alt="Secret Santa"
            className="absolute top-[7vw] w-[25vw]"
          />
        </aside>
        <div className="col-span-8 pr-12 pt-7">
          <div className="flex justify-end">
            {userData && (
              <MyAccount
                name={userData.user.firstName}
                lastName={userData.user.lastName}
              />
            )}
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default InteriorLayout

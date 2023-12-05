import { useEffect, useRef } from 'react'

import { Form, Label, Submit, FieldError, EmailField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { username: string }) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />
      <HeaderWithRulers className="mb-8 text-white" heading="Forgot Password" />
      <Form onSubmit={onSubmit} className="auth-form">
        <div className="field">
          <Label name="e-mail" errorClassName="error">
            E-mail
          </Label>
          <EmailField
            name="username"
            errorClassName="error"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'E-mail is required',
              },
            }}
          />

          <FieldError name="e-mail" className="error-message" />
        </div>
        <div className="field">
          <Submit className="">Submit</Submit>
        </div>
        <div className="auth-links">
          <Link to={routes.login()}>Log in!</Link> |{' '}
          <Link className="" to={routes.signup()}>
            Need an acount?
          </Link>
        </div>
      </Form>
    </>
  )
}

export default ForgotPasswordPage

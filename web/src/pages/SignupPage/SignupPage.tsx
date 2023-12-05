import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, Label, FieldError, Submit, EmailField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />
      <HeaderWithRulers className="mb-8 text-white" heading="Sign Up" />
      <Form onSubmit={onSubmit} className="auth-form">
        <div className="field">
          <Label name="e-mail" errorClassName="error">
            E-mail
          </Label>
          <EmailField
            name="username"
            placeholder=""
            errorClassName="error"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'E-mail is required',
              },
            }}
          />
        </div>
        <div className="field">
          <FieldError name="username" className="error-message" />
          <ShowHidePassword
            placeholder=""
            label="password"
            name="password"
            errorClassName="error-message"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />
          <FieldError name="password" className="error-message" />
        </div>
        <Submit>Sign Up</Submit>
        <div className="auth-links">
          <Link to={routes.login()}>Log in!</Link>|{' '}
          <Link className="" to={routes.forgotPassword()}>
            Forgot Password?
          </Link>
        </div>
      </Form>
    </>
  )
}

export default SignupPage

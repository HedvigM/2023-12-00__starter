import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, Label, Submit, FieldError, EmailField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />
      <HeaderWithRulers className="auth-form text-white" heading="Login" />
      <Form onSubmit={onSubmit}>
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
                message: 'Username is required',
              },
            }}
          />
          <FieldError name="username" className="error-message" />
        </div>
        <div className="field">
          <ShowHidePassword
            name="password"
            label="Password"
            placeholder=""
            errorClassName=" rw-input-error"
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

        <div className="rw-button-group">
          <Submit>Login</Submit>
        </div>
      </Form>
      <div className="auth-links">
        <Link className="" to={routes.signup()}>
          Need an acount?
        </Link>{' '}
        |{' '}
        <Link className="" to={routes.forgotPassword()}>
          Forgot Password?
        </Link>
      </div>
    </>
  )
}

export default LoginPage

/* eslint-disable no-console */
import React from 'react'
import tw from 'twin.macro'
import { Box, Button, TextField, Typography } from '@mui/material'
import InputLabel from 'components/atoms/InputLabel'
import { useForm, SubmitHandler } from 'react-hook-form'

type InputsType = {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<InputsType>()

  const handleLogin: SubmitHandler<InputsType> = (data) => {
    console.log(data)
  }

  return (
    <Container>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit(handleLogin)} noValidate sx={{ mt: 1 }}>
        <InputLabel>Email Address</InputLabel>
        <TextField
          hiddenLabel
          margin="normal"
          required
          fullWidth
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Email Address"
          autoFocus
          {...register('email')}
        />
        <InputLabel>Password</InputLabel>
        <TextField
          hiddenLabel
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          {...register('password')}
        />
        <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, mb: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  )
}

const Container = tw.div`
    w-screen
    h-screen
    flex
    flex-col
    justify-center
    items-center
`

export default Login

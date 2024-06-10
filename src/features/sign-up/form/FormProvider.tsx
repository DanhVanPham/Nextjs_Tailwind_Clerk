import { AuthContextProvider } from '@/context/useAuthContext'
import React from 'react'
import { FormProvider } from 'react-hook-form'

type Props = {
  children: React.ReactNode
}

const SignUpFormProvider = ({ children }: Props) => {
  return (
    <AuthContextProvider>
      <FormProvider>{children}</FormProvider>
    </AuthContextProvider>
  )
}

export default SignUpFormProvider

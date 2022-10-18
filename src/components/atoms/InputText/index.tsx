import {
  InputAdornment,
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputProps as MuiOutlinedInputProps,
} from '@mui/material'
import React, { ReactNode, useMemo, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import InputLabel from '../InputLabel'

export interface InputTextPropsInterface extends React.ComponentPropsWithoutRef<'div'> {
  type?: string
  value?: unknown
  onChange?: () => void
  prefixIcon?: ReactNode
  suffixIcon?: ReactNode
  placeholder?: string
  label?: string
  disabled?: boolean
  isError?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  helper?: string
}

type HelperType = {
  error?: boolean
  success?: boolean
  warning?: boolean
  helperText?: string
}

const InputText = ({
  type = 'text',
  value,
  onChange,
  prefixIcon,
  suffixIcon,
  placeholder,
  label,
  disabled,
  isError = false,
  isSuccess = false,
  isWarning = false,
  helper = '',
}: InputTextPropsInterface) => {
  const [helperVal] = useState<HelperType>({
    error: isError,
    success: isSuccess,
    warning: isWarning,
    helperText: helper,
  })

  const helperText = useMemo(() => {
    if (helperVal.success) {
      return <HelperComponent success>{helperVal.helperText}</HelperComponent>
    } else if (helperVal.warning) {
      return <HelperComponent warning>{helperVal.helperText}</HelperComponent>
    } else if (helperVal.error) {
      return <HelperComponent error>{helperVal.helperText}</HelperComponent>
    } else {
      return <span />
    }
  }, [helperVal])

  return (
    <InputTextComponent>
      {label && <InputLabel>{label}</InputLabel>}
      <OutlinedInput
        error={isError}
        type={type}
        value={value}
        onChange={onChange}
        endAdornment={
          suffixIcon ? <InputAdornment position="end">{suffixIcon}</InputAdornment> : <span />
        }
        startAdornment={
          prefixIcon ? (
            <InputAdornment
              position="start"
              disablePointerEvents={disabled}
              disableTypography={disabled}
            >
              {prefixIcon}
            </InputAdornment>
          ) : (
            <span />
          )
        }
        placeholder={placeholder}
        disabled={disabled}
      />
      {helperText}
    </InputTextComponent>
  )
}

const InputTextComponent = tw.div`flex flex-col gap-1`
const OutlinedInput = styled(MuiOutlinedInput)<MuiOutlinedInputProps>(() => [tw`px-3`])

const HelperComponent = styled.div<HelperType>(({ error, success, warning }: HelperType) => [
  tw`text-sm`,
  error && tw`text-red-600`,
  success && tw`text-blueP2`,
  warning && tw`text-yellow-600`,
])

export default InputText

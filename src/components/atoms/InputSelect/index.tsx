import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import InputLabel from '../InputLabel'

export interface InputSelectOptionInterface {
  id: number
  value: string
  name: string
  child?: []
  checked?: boolean
}

export interface InputSelectPropsInterface extends React.ComponentPropsWithoutRef<'div'> {
  label?: string
  listOption?: InputSelectOptionInterface[]
  value?: unknown
  onChange?: () => void
  isError?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  helper?: string
  disabled?: boolean
}

type HelperType = {
  error?: boolean
  success?: boolean
  warning?: boolean
  helperText?: string
}

const InputSelect = ({
  label,
  listOption,
  value,
  onChange,
  disabled,
  isError = false,
  isSuccess = false,
  isWarning = false,
  helper = '',
}: InputSelectPropsInterface) => {
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
    <InputSelectComponent>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        value={value}
        displayEmpty
        inputProps={{ 'aria-label': label }}
        disabled={disabled}
        onChange={onChange}
        defaultValue=""
      >
        <MenuItem value="">Select </MenuItem>
        {listOption?.map((e, index) => (
          <MenuItem key={index} value={e.value}>
            {e.name}
          </MenuItem>
        ))}
      </Select>
      {helperText}
    </InputSelectComponent>
  )
}

const InputSelectComponent = tw.div`flex flex-col gap-1`

const HelperComponent = styled.div<HelperType>(({ error, success, warning }: HelperType) => [
  tw`text-sm`,
  error && tw`text-red-600`,
  success && tw`text-blueP2`,
  warning && tw`text-yellow-600`,
])

export default InputSelect

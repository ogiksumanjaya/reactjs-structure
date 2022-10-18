/* eslint-disable @typescript-eslint/naming-convention */
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material'
import { memo } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export type TextFieldPropsType = MuiTextFieldProps

const TextField = styled(MuiTextField)<TextFieldPropsType>({
  '& label.Mui-focused': tw`text-blueP1`,
  '& .MuiInput-underline:after': tw`border-blueP1`,
  '& .MuiOutlinedInput-root': {
    '& fieldset': tw`border-gray-600`,
    '&:hover fieldset': tw`border-gray-600`,
    '&.Mui-focused fieldset': tw`border-blueP1`,
  },
})

export default memo(TextField)

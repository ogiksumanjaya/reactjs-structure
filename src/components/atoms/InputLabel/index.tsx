import { InputLabel as MuiInputLabel, InputLabelProps as MuiInputLabelProps } from '@mui/material'
import styled from 'styled-components'
import tw from 'twin.macro'

export type InputLabelPropsType = MuiInputLabelProps

const InputLabel = styled(MuiInputLabel)<InputLabelPropsType>`
  ${tw`translate-x-['2px'] translate-y-['-6px'] scale-100 text-sm text-gray-900`}
`

export default InputLabel

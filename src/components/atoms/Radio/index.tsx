import React, { memo } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export interface RadioPropsInterface extends React.ComponentPropsWithRef<'input'> {
  checked?: boolean
  disabled?: boolean
  label?: string
}

const Radio = ({ checked = false, disabled, label, ...rest }: RadioPropsInterface) => (
  <Container>
    <Input type="checkbok" checked={checked} disabled={disabled} {...rest} />
    <RadioComponent checked={checked} disabled={disabled} {...rest} />
    {label && <Label>{label}</Label>}
  </Container>
)

const Container = tw.label`relative w-4 h-4 cursor-pointer`
const Input = tw.input`absolute opacity-0 cursor-pointer w-0 h-0`
const Label = tw.span`text-sm inline-block ml-5 whitespace-nowrap`

const RadioComponent = styled.div<RadioPropsInterface>(
  ({ checked, disabled }: RadioPropsInterface) => [
    checked && [
      tw`
        after:absolute 
        after:w-[8px]
        after:h-[8px]
        after:rotate-45 
        after:top-[2px]
        after:left-[2px] 
        after:rounded-lg
        after:content-['']
      `,
      disabled ? tw`after:bg-gray-200 cursor-default` : tw`after:bg-gray-600 cursor-pointer`,
    ],

    tw`
      absolute 
      w-4 
      h-4 
      transition-all 
      ease-linear 
      duration-150 
      border-2 
      border-solid 
      rounded-xl
      top-[35%]
      bg-transparent
    `,

    disabled ? tw`border-gray-200 cursor-default` : tw`border-gray-600`,
  ],
)

export default memo(Radio)

import { memo } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export interface CheckboxPropsInterface extends React.ComponentPropsWithoutRef<'input'> {
  checked?: boolean
  disabled?: boolean
  label?: string
}

const Checkbox = ({
  checked = false,
  disabled = false,
  label,
  ...rest
}: CheckboxPropsInterface) => (
  <Container>
    <Input type="checkbok" checked={checked} disabled={disabled} {...rest} />
    <CheckboxComponent checked={checked} disabled={disabled} {...rest} />
    {label && <Label>{label}</Label>}
  </Container>
)

const Container = tw.label`relative w-4 h-4 cursor-pointer`
const Input = tw.input`absolute opacity-0 cursor-pointer w-0 h-0`
const Label = tw.span`text-sm inline-block ml-5 whitespace-nowrap`

const CheckboxComponent = styled.div<CheckboxPropsInterface>(
  ({ checked, disabled }: CheckboxPropsInterface) => [
    tw`
      absolute 
      w-4 
      h-4 
      transition-all 
      ease-linear 
      duration-150 
      border-2 
      border-solid 
      rounded 
      top-[35%]
    `,

    disabled ? tw`border-gray-200 cursor-default` : tw`border-gray-600`,

    checked
      ? [
          tw`
          after:top-0 
          after:absolute 
          after:w-[5px]
          after:h-[10px]
          after:border-solid 
          after:border-white
          after:rotate-45 
          after:left-1 
          after:border-r-[2.5px] 
          after:border-b-[2.5px]
          after:rounded-sm 
          after:content-['']
      `,
          disabled ? tw`after:cursor-default bg-gray-200` : tw`after:cursor-pointer  bg-gray-600`,
        ]
      : tw`
        bg-transparent
      `,
  ],
)

export default memo(Checkbox)

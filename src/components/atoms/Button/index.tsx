import React, { memo } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

type ButtonVariantsType = 'primary' | 'outline'
type ButtonSizesType = 'sm' | 'md' | 'lg'
export interface ButtonPropsInterface extends React.ComponentPropsWithoutRef<'button'> {
  size?: ButtonSizesType
  disabled?: boolean
  variant?: ButtonVariantsType
  icon?: React.ComponentType<unknown>
  children: React.ReactNode
}

const Button = ({
  size = 'md',
  disabled,
  variant = 'primary',
  children,
  ...rest
}: ButtonPropsInterface) => (
  <ButtonComponent disabled={disabled} variant={variant} size={size} {...rest}>
    {children}
  </ButtonComponent>
)

const ButtonComponent = styled.button(({ variant, size, disabled }: ButtonPropsInterface) => [
  tw`rounded-lg self-center flex flex-row gap-3`,

  variant === 'primary' && (!disabled ? tw`bg-gray-600 text-white` : tw`bg-gray-200 text-white`),

  variant === 'outline' &&
    (!disabled
      ? tw` bg-transparent text-gray-600 border-solid border-2 border-gray-600 `
      : tw` bg-transparent text-gray-200 border-solid border-2 border-gray-200 `),

  size === 'sm' && tw`py-1 px-2 text-xs`,
  size === 'md' && tw`py-2 px-4`,
  size === 'lg' && tw`py-3 px-5 text-lg`,
])

export default memo(Button)

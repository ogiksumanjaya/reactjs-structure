import { memo } from 'react'
import css from './Button.module.css'

export type ButtonVariantsType = 'primary' | 'outline'
export type ButtonSizesType = 'sm' | 'md' | 'lg'
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
}: ButtonPropsInterface) => {
  let buttonSize = ''
  let buttonVariant = ''

  switch (size) {
    case 'sm':
      buttonSize = 'py-1 px-2 text-xs'
      break
    case 'md':
      buttonSize = 'py-2 px-4'
      break
    case 'lg':
      buttonSize = 'py-3 px-5 text-lg'
      break
  }

  switch (variant) {
    case 'primary':
      buttonVariant = disabled ? css.buttonPrimaryDisabled : css.buttonPrimary
      break
    case 'outline':
      buttonVariant = disabled ? css.buttonOutlineDisabled : css.buttonOutline
      break
  }

  const buttonStyle = `${buttonSize} ${buttonVariant} ${css.buttonStyle}`

  return (
    <button disabled={disabled} className={buttonStyle} {...rest}>
      {children}
    </button>
  )
}
export default memo(Button)

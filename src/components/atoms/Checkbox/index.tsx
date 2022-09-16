import { memo } from 'react'
import css from './Checkbox.module.css'

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
}: CheckboxPropsInterface) => {
  let checkboxBg = ''
  if (checked) {
    checkboxBg = disabled ? 'bg-gray-200 ' : 'bg-gray-600 '
  } else {
    checkboxBg = 'bg-transparent'
  }

  return (
    <label className="relative w-4 h-4 cursor-pointer">
      <input
        className="absolute opacity-0 cursor-pointer w-0 h-0"
        {...rest}
        type="checkbok"
        checked={checked}
        disabled={disabled}
      />
      <span
        {...rest}
        className={`${checkboxBg} ${css.spanCheckbox} ${checked ? css.spanCheckbox_after : ''} ${
          disabled ? css.spanDisabledTrue : css.spanDisabledFalse
        } ${
          disabled ? css.spanCheckbox_after_DisabledTrue : css.spanCheckbox_after_DisabledFalse
        } `}
      />
      {label ? <span className={css.spanCheckbox_label}>{label}</span> : ''}
    </label>
  )
}

export default memo(Checkbox)

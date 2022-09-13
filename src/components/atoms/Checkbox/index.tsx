import { memo } from 'react'
import css from './Checkbox.module.css'

export interface CheckboxPropsInterface extends React.ComponentPropsWithoutRef<'input'> {
  checked?: boolean
  disabled?: boolean
  label?: string
}

const Checkbox = ({ checked = false, disabled, label, ...rest }: CheckboxPropsInterface) => {
  let checkboxBg = ''
  if (checked) {
    checkboxBg = 'bg-gray-600 '
  } else {
    checkboxBg = 'bg-transparent'
  }
  return (
    <label className="relative w-4 h-4 cursor-pointer">
      <input
        className="absolute opacity-0 cursor-pointer"
        {...rest}
        type="checkbok"
        checked={checked}
      />
      <span
        {...rest}
        className={`${checkboxBg} ${css.spanCheckbox} ${checked ? css.spanCheckbox_after : ''}`}
      />
      {label ? <span className={css.spanCheckbox_label}>{label}</span> : ''}
    </label>
  )
}

export default memo(Checkbox)

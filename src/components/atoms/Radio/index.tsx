import React, { memo } from 'react'

import css from './Radio.module.css'

export interface RadioPropsInterface extends React.ComponentPropsWithRef<'input'> {
  checked?: boolean
  disabled?: boolean
  label?: string
}

const Radio = ({ checked = false, disabled, label, ...rest }: RadioPropsInterface) => (
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
      className={` ${css.spanRadio} ${checked ? css.spanRadio_after : ''} ${
        disabled ? css.spanRadio_after_DisabledTrue : css.spanRadio_after_DisabledFalse
      }  ${disabled ? css.spanDisabledTrue : css.spanDisabledFalse}`}
    />
    {label ? <span className={css.spanRadio_label}>{label}</span> : ''}
  </label>
)

export default memo(Radio)

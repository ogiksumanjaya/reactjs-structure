import { memo } from 'react'
import css from './Box.module.css'
import useJoin from 'utils/customHooks/useJoin'

export type BoxDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type BoxJustifyType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-evenly'
export type BoxAlignType = 'start' | 'end' | 'center' | 'baseline'
export type WrapPropsType = 'wrap' | 'nowrap'
export type PositionType = 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static'
export interface BoxPropsInterface extends React.ComponentPropsWithRef<'div'> {
  direction?: BoxDirectionType
  justify?: BoxJustifyType
  align?: BoxAlignType
  wrap?: WrapPropsType
  position?: PositionType
  maxWidth?: number
  minWidth?: number
  zIndex?: number
  className?: string
  children?: React.ReactNode
}

const Box = ({
  children,
  direction,
  justify,
  wrap,
  align,
  maxWidth,
  minWidth,
  position,
  className = '',
  ...rest
}: BoxPropsInterface) => {
  const boxDirection = css[`direction__${direction}`]
  const boxJustify = css[`justify__${justify}`]
  const boxWrap = css[`wrap__${wrap}`]
  const boxAlign = css[`wrap__${align}`]
  const boxPosition = css[`position__${position}`]

  const boxStyled = useJoin([
    boxDirection,
    boxJustify,
    boxWrap,
    boxAlign,
    boxPosition,
    maxWidth && `max-w-${maxWidth}px`,
    minWidth && `min-w-${maxWidth}px`,
    className,
  ])
  return (
    <div className={`${boxStyled} `} {...rest}>
      {children}
    </div>
  )
}

export default memo(Box)

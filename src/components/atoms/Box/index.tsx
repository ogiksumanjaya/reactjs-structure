import { memo } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

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
  zIndex?: number
  children?: React.ReactNode
}

const Box = ({
  children,
  direction,
  justify,
  wrap,
  align,
  position,
  ...rest
}: BoxPropsInterface) => (
  <BoxContainer direction={direction} justify={justify} wrap={wrap} align={align} {...rest}>
    {children}
  </BoxContainer>
)

const BoxContainer = styled.div<BoxPropsInterface>`
  ${({ direction }) => {
    switch (direction) {
      case 'row':
        return tw`flex flex-row`
      case 'row-reverse':
        return tw`flex flex-row-reverse`
      case 'column':
        return tw`flex flex-col`
      case 'column-reverse':
        return tw`flex flex-col-reverse`
      default:
        return tw``
    }
  }}
  ${({ justify }) => {
    switch (justify) {
      case 'flex-start':
        return tw`justify-start`
      case 'flex-end':
        return tw`justify-end`
      case 'center':
        return tw`justify-center`
      case 'space-between':
        return tw`justify-between`
      case 'space-evenly':
        return tw`justify-evenly`
      default:
        return tw``
    }
  }}
  ${({ align }) => {
    switch (align) {
      case 'start':
        return tw`items-start`
      case 'end':
        return tw`items-end`
      case 'center':
        return tw`items-center`
      case 'baseline':
        return tw`items-baseline`
      default:
        return tw``
    }
  }}
  ${({ wrap }) => {
    switch (wrap) {
      case 'wrap':
        return tw`flex-wrap`
      case 'nowrap':
        return tw`flex-nowrap`
      default:
        return tw``
    }
  }}
  ${({ position }) => {
    switch (position) {
      case 'relative':
        return tw`relative`
      case 'absolute':
        return tw`absolute`
      case 'fixed':
        return tw`fixed`
      case 'sticky':
        return tw`sticky`
      case 'static':
        return tw`static`
      default:
        return tw``
    }
  }}
`

export default memo(Box)

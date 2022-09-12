import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatchType, RootStateType } from 'store'

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

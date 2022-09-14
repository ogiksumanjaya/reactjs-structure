import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatchType, RootStateType } from 'redux/store'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

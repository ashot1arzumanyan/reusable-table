import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { GlobalState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector;

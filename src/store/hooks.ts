import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, TAppDispatch } from './index.types';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

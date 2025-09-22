import {createContext} from 'react'
import {IVariablesCalendarProps} from '@/public/features/Variables/VariablesCalendar'

export const ContextCalendar = createContext<IVariablesCalendarProps | null>(null)
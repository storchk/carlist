import { useContext } from 'react'

import { AppContext } from './Context'
import type { AppContextType } from './Context.types'

export const useAppContext = (): AppContextType => useContext(AppContext)

import { createContext, FC } from 'react'

import { useClickControl } from '../hooks/useClickControl'
import { ClickControlContextType } from '../types'

export const ClickControlContext = createContext<ClickControlContextType>({
  isLeftClicked: false,
  isRightClicked: false,
})

export const ClickControlProvider: FC = ({ children }) => {
  const {
    isLeftClicked,
    isRightClicked,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
  } = useClickControl()

  return (
    <ClickControlContext.Provider value={{ isLeftClicked, isRightClicked }}>
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </ClickControlContext.Provider>
  )
}

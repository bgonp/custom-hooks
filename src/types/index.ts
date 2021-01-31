import { MouseEvent } from 'react'

export type UseClickControlType = {
  handleMouseDown: (e: MouseEvent) => void
  handleMouseUp: (e: MouseEvent) => void
  handleMouseLeave: () => void
  isLeftClicked: boolean
  isRightClicked: boolean
}

export type ClickControlContextType = {
  isLeftClicked: boolean
  isRightClicked: boolean
}

export type UseLocalStorageType<T> = [
  T,
  (value: T | ((state: T) => T)) => void,
  () => void
]

export type UseTimeoutType = {
  setTimeout: (callback: () => void, milliseconds: number) => void
  clearTimeout: () => void
}

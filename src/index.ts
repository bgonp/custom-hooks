if (typeof window === 'undefined') {
  throw new Error(`bgon-custom-hooks package can only be used on browser`)
}

export { useClickControl } from './hooks/useClickControl'
export { useLocalStorage } from './hooks/useLocalStorage'
export { useTimeout } from './hooks/useTimeout'

export { ClickControlContext, ClickControlProvider } from './contexts/ClickControlContext'

import { useCallback, useEffect, useState } from 'react'

import { UseLocalStorageType } from '../types'

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): UseLocalStorageType<T> => {
  const [value, setValue] = useState<T>(
    (): T => {
      try {
        const value = window.localStorage.getItem(key)
        return value ? JSON.parse(value) : initialValue
      } catch (error) {
        console.error(error)
        return initialValue
      }
    }
  )

  const cleanStorage = useCallback<() => void>(() => {
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error(error)
    }
  }, [key])

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }, [key, value])

  return [value, setValue, cleanStorage]
}

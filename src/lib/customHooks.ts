import { useEffect, useState } from 'react'

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

/**
 *
 * @param value
 * @param delay
 * @returns `debounceValue`
 * @example
 * const [searchValue, setSearchValue] = useState<string>('')
 * const debounce = useDebounce(searchValue, 2000)
 * useEffect(() => {console.log('debounce')}, [debounce])
 */

export const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounceValue
}

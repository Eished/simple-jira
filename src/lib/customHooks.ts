import { useEffect, useState } from 'react'

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
    // TODO 依赖项里加上 callback 会造成无限循环，这个和 useCallback 以及 useMemo 有关系
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export const useDebounce = <T>(value: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounceValue
}

export const useArray = <T>(
  value: T[]
): [T[], (index: number, obj: T) => void, (index: number, obj: T) => void, (index: number) => void, () => void] => {
  const [arr, setArr] = useState(value)

  const clear = () => {
    setArr([])
  }
  const add = (index: number, obj: T) => {
    arr.splice(index, 0, obj)
    setArr([...arr])
  }
  const replace = (index: number, obj: T) => {
    arr.splice(index, 1, obj)
    setArr([...arr])
  }
  const remove = (index: number) => {
    arr.splice(index, 1)
    setArr([...arr])
  }

  return [arr, add, replace, remove, clear]
}

export const useArray2Obj = <T>(value: T[]) => {
  const [arr, setArr] = useState(value)

  const clear = () => {
    setArr([])
  }
  const add = (index: number, obj: T) => {
    arr.splice(index, 0, obj)
    setArr([...arr])
  }
  const replace = (index: number, obj: T) => {
    arr.splice(index, 1, obj)
    setArr([...arr])
  }
  const remove = (index: number) => {
    arr.splice(index, 1)
    setArr([...arr])
  }

  return { arr, add, replace, remove, clear }
}

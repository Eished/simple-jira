import { GenericObject } from 'type/Common'

export const isEmpty = (value: unknown) => value === undefined || value === null || value === ''

export const cleanObject = (obj: GenericObject) => {
  const result = { ...obj }
  Object.keys(result).forEach((key: string) => {
    const value = result[key]
    if (isEmpty(value)) {
      delete result[key]
    }
  })
  return result
}

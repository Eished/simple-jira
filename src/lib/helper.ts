/**
 *   let i = 0
  const run = debounce((num) => {
    console.log(num, 'num')
  }, 2000)

  run(String(++i))
  setTimeout(() => run(String(++i)), 2100)
  setTimeout(() => run(String(++i)), 2900)
 * 
 */
export const debounce = (func: (...args: unknown[]) => unknown, delay: number) => {
  console.log('debounce')
  let timer: number
  return (...args: unknown[]) => {
    console.log('timer', args)
    if (timer) {
      clearTimeout(timer)
    }
    timer = window.setTimeout(() => func(...args), delay)
  }
}

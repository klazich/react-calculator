export const initGenerator = generator => (...args) => {
  const iter = generator(...args)
  iter.next()
  return iter
}

export const value = ({ value }) => value

export const toCamelCase = p => {
  return p.replace(/\s./g, str => {
    return str.charAt(1).toUpperCase()
  })
}

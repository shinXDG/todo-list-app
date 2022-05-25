export function getDateNow(time?: number) {
  const date = time ? new Date(time) : new Date()
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate()}`
}

export function compare(a: any, b: any) {
  // Sử dụng toUpperCase() để chuyển các kí tự về cùng viết hoa
  var typeA = a.type.toUpperCase()
  var typeB = b.genre.toUpperCase()

  let comparison = 0
  if (typeA > typeB) {
    comparison = 1
  } else if (typeA < typeB) {
    comparison = -1
  }
  return comparison
}

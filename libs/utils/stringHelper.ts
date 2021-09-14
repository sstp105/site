export const formatDate = (date: Date) => {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return ''
  }
  return date.toString().split('T')[0]
}

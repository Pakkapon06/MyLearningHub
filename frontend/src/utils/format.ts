export const formatDate = (date: string | Date, locale = 'th-TH') =>
  new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(date))

export const formatNumber = (n: number) =>
  new Intl.NumberFormat('en-US').format(n)

export const truncate = (str: string, maxLen: number) =>
  str.length > maxLen ? `${str.slice(0, maxLen)}...` : str

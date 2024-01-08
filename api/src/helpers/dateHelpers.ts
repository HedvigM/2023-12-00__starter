import { formatRelative } from 'date-fns'

export const prittyfyDate = (dateString: string) => {
  const date = new Date(dateString)
  const baseDate = new Date()
  return formatRelative(date, baseDate)
}

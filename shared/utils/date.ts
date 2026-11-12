const formatter = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' })

/** "2021-04" -> "Apr 2021" */
export function formatMonth(isoMonth: string): string {
  const [year, month] = isoMonth.split('-').map(Number)
  if (!year || !month) throw new Error(`Invalid ISO month: ${isoMonth}`)
  return formatter.format(new Date(Date.UTC(year, month - 1)))
}

/** ("2021-04", null) -> "Apr 2021 – Present" */
export function formatPeriod(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`
}

import { describe, expect, it } from 'vitest'
import { formatMonth, formatPeriod } from '../../shared/utils/date'

describe('formatMonth', () => {
  it('formats an ISO month', () => {
    expect(formatMonth('2021-04')).toBe('Apr 2021')
  })

  it('throws on invalid input', () => {
    expect(() => formatMonth('nope')).toThrow('Invalid ISO month')
  })
})

describe('formatPeriod', () => {
  it('uses "Present" for an open end date', () => {
    expect(formatPeriod('2022-01', null)).toBe('Jan 2022 – Present')
  })

  it('formats a closed range', () => {
    expect(formatPeriod('2018-01', '2021-12')).toBe('Jan 2018 – Dec 2021')
  })
})

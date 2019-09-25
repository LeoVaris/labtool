import { createCourseIdWithYearAndTerm } from '../util/format'

describe('should generate courseId with year and term', () => {
  it('when course starts in 1.period', () => {
    expect(createCourseIdWithYearAndTerm('TKT20010.2018.S.K.1', '2018-09-16T21:00:00.000Z')).toEqual('TKT20010 18-19 1.period')
  })
  it('when course starts in 2.period', () => {
    expect(createCourseIdWithYearAndTerm('TKT20010.2018.S.K.2', '2018-10-16T21:00:00.000Z')).toEqual('TKT20010 18-19 2.period')
  })
  it('when course starts in 3.period', () => {
    expect(createCourseIdWithYearAndTerm('TKT20010.2018.K.A.1', '2018-01-16T21:00:00.000Z')).toEqual('TKT20010 17-18 3.period')
  })
  it('when course starts in 4.period', () => {
    expect(createCourseIdWithYearAndTerm('TKT20010.2018.K.A.2', '2018-03-21T21:00:00.000Z')).toEqual('TKT20010 17-18 4.period')
  })
  it('when course starts in early Summer', () => {
    expect(createCourseIdWithYearAndTerm('TKT20010.2018.V.K.1', '2018-05-11T21:00:00.000Z')).toEqual('TKT20010 18 early Summer')
  })
  it('when course starts in late Summer', () => {
    expect(createCourseIdWithYearAndTerm('TKT20010.2018.V.K.2', '2018-07-27T21:00:00.000Z')).toEqual('TKT20010 18 late Summer')
  })
})
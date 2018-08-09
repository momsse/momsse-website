import React, { PropTypes } from 'react'
import Calendar from 'react-icons/lib/fa/calendar'
import moment from 'moment';

moment.locale('fr-FR');

import { Container, Period, Title } from './styledComponents'

const DATE_FORMAT = 'MMMM YYYY';

export function formatPeriod(startDate, endDate) {
  if (!endDate) return moment(startDate).format(DATE_FORMAT)
  return `${moment(startDate).format(DATE_FORMAT)} - ${moment(endDate).format(DATE_FORMAT)}`
}

const Job = ({ enterprise, position, startDate, endDate, children }) => (
  <Container>
    <Title>{position} ({enterprise})</Title>
    <Period>
      <Calendar /> {formatPeriod(startDate, endDate)}
    </Period>
    {children}
  </Container>
)

Job.propTypes = {}
Job.defaultProps = {}

export default Job

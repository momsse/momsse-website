import React, { PropTypes } from 'react'
import {
  Container,
  Technology,
  TechnologyLink,
  Title,
} from './styledComponents'

const Project = ({ title, abstract, technologies }) => (
  <Container>
    <p>
      {title && <Title>{title} :</Title>} {abstract}
    </p>

    {technologies && technologies.map(technology => (
      <Technology key={technology.name}>
        <TechnologyLink href={technology.link}>
          {technology.name}
          {technology.version ? ` ${technology.version}` : ''}
        </TechnologyLink>
      </Technology>
    ))}
  </Container>
)

Project.propTypes = {
  title: PropTypes.string,
  abstract: PropTypes.string,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}
Project.defaultProps = {}

export default Project

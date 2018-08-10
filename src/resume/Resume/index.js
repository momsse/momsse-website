import React, { PropTypes } from 'react'

import Job from '../Job'
import technologies from '../../core/enums/technologies'
import Project from '../Project'
import { Container } from './styledComponents'

const Resume = () => (
  <Container>
    <Job
      enterprise="Chauffeur privé"
      position="Senior Software engineer"
      startDate={new Date('Nov 01 2015')}
    >
      <Project
        title="Driver onboarding"
        abstract="initialization de la stack et developpement de la web app d'onboarding chauffeur"
        technologies={[
          technologies.Javascript,
          technologies.NodeJS,
          technologies.Express,
          technologies.ReactJS,
          technologies.Webpack,
        ]}
      />

      <Project
        title="Sauron (real time driver and booking manager)"
        abstract="initialization de la stack et developpement de la web app de gestion de la flotte chauffeurs."
        technologies={[
          technologies.Javascript,
          technologies.NodeJS,
          technologies.Express,
          technologies.ReactJS,
          technologies.Webpack,
          technologies.Bootstrap,
          technologies.SocketIO,
          technologies.IndexedDB,
          technologies.MongoDB,
        ]}
      />

      <Project
        title="Driver state (real time driver's state)"
        abstract="initialization de la stack et developpement de l'API d'état des chauffeurs"
        technologies={[
          technologies.Javascript,
          technologies.NodeJS,
          technologies.Express,
          technologies.RabbitMQ,
          technologies.MongoDB,
        ]}
      />

      <Project
        title="Business backend"
        abstract="migration de l'API monolithique vers une architecture micro services."
        technologies={[
          technologies.Javascript,
          technologies.NodeJS,
          technologies.MongoDB,
        ]}
      />
    </Job>

    <Job
      enterprise="Ekino"
      position="Software engineer"
      startDate={new Date('Jul 01 2014')}
      endDate={new Date('Oct 01 2015')}
    >
      <Project
        title="Coorpacademy"
        abstract="Application d'e-learning (MOOC)."
        technologies={[
          technologies.Javascript,
          technologies.NodeJS,
          { ...technologies.AngularJS, version: '1.x' },
          technologies.MongoDB,
        ]}
      />

      <Project
        title="SFR"
        abstract="Backend d'une application de gestion des ventes de forfaits mobile et fixes."
        technologies={[
          { ...technologies.Java, version: '8' },
          technologies.Spring,
          { ...technologies.Tomcat, version: '8' },
          technologies.Oracle,
        ]}
      />

      <Project
        title="SFR"
        abstract="Backend d'une application mobile assistant les vendeurs lors des ventes en boutique physique."
        technologies={[
          { ...technologies.Java, version: '8' },
          { ...technologies.Jersey, version: '2' },
          { ...technologies.Spring, version: '4' },
          { ...technologies.Tomcat, version: '8' },
          technologies.Oracle,
        ]}
      />

      <Project
        title="SFR"
        abstract="API permettant la collecte d'information des visiteurs lors de leurs passages en boutique physique et/ou en ligne."
        technologies={[
          { ...technologies.Java, version: '7' },
          { ...technologies.Spring, version: '4' },
          technologies.SpringBatch,
          { ...technologies.Tomcat, version: '7' },
          technologies.MongoDB,
        ]}
      />
    </Job>

    <Job
      enterprise="Groupe Onepoint"
      position="Software engineer"
      startDate={new Date('Nov 01 2011')}
      endDate={new Date('Jun 01 2014')}
    >
      <Project
        title="Ministère de la Justice"
        abstract=" TMA de l'ensemble applicatif de gestion de la chaîne pénale (KCOP)."
        technologies={[
          { ...technologies.Java, verison: '6' },
          technologies.Struts,
          { ...technologies.EJB, verison: '3' },
          technologies.Hibernate,
          technologies.JBoss,
          technologies.Oracle,
        ]}
      />

      <Project
        title="BMW"
        abstract="Développement de la 2nd version du portail du groupe."
        technologies={[
          { ...technologies.Java, version: '6' },
          technologies.JSF,
          { ...technologies.EJB, version: '3.1' },
          technologies.Glassfish,
          technologies.Oracle,
        ]}
      />

      <Project
        title="SFR"
        abstract="Refonte de l'application de facturation/comptabilité du groupe SFR (RefCCOP). "
        technologies={[
          { ...technologies.Java, version: '6' },
          technologies.Wicket,
          technologies.Spring,
          technologies.Hibernate,
          technologies.Tomcat,
          technologies.Oracle,
        ]}
      />
    </Job>

    <Job
      enterprise="Scalian"
      position="Student software engineer"
      startDate={new Date('Apr 01 2011')}
      endDate={new Date('Sep 01 2011')}
    >
      <Project
        title="Youkan"
        abstract="Développement de la troisième version d’une application web de gestion de projet agile en ligne. "
        technologies={[
          { ...technologies.Java, version: '6' },
          { ...technologies.Flex, version: '4.5' },
          technologies.Spring,
          technologies.iBatis,
          technologies.Tomcat,
          technologies.PostgreSQL,
        ]}
      />
    </Job>

    <Job
      enterprise="Université de Bordeaux"
      position="Master Génie Logiciel "
      startDate={new Date('Sep 01 2006')}
      endDate={new Date('Oct 01 2011')}
    >
      <Project
        abstract="Préparation d'une Licence puis d'un Master spécialité génie logiciel à l'université de Bordeaux (M. Bien)."
      />
    </Job>
  </Container>
)

export default Resume

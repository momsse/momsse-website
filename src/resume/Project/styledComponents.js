import styled from 'styled-components';

export const Container = styled.div`
  font-size: 0.75rem;
`;

export const Title = styled.span`
  font-weight: bold;
`;

export const Technology = styled.span`
  &::after {
    content: ' ';
  }
`

export const TechnologyLink = styled.a.attrs({ target: '_blank' })`
  color: #86994d;
  text-decoration: none;
  @media print {
    color: darken(#86994d, 25%)
  }

  &:hover {
    text-decoration: underline;
  }
`;

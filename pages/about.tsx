import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: ${(props) => props.theme.color.typography};
  background-color: ${(props) => props.theme.color.surface};
  height: 500px;
  width: 800px;
  margin: 100px auto;
`

const AboutPage: React.FC = () => {
  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  )
}

export default AboutPage

import React, { Component } from 'react'
import { Header } from './HeaderComponents/Header'
import { Homepage } from './HomeComponents/Homepage'
import { Registration } from './RegistrationComponents/Registration'
import { Registration1 } from './RegistrationComponents/Registration1'
import { Registration2 } from './RegistrationComponents/Registration2'
import { Footer } from './Footer'
import styled, { ThemeProvider } from 'styled-components'
import { Router } from '@reach/router'

import { theme } from './utils/theme'

const Container = styled.section`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-family: '${(props) => props.theme.fonts.primary}', sans-serif;
  header {
    border: 8px solid #ff6347;
  }
  main {
    border: 8px solid #568f56;
  }
  footer {
    border: 8px solid #24248f;
  }
  img {
    height: 75px;
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Router>
            <Homepage path="/" />
            <Registration path="/registration" />
            <Registration1 path="/registration-1" />
            <Registration2 path="/registration-2" />
          </Router>
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App

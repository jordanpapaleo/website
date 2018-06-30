import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import nunito from './Assets/fonts/Nunito/Nunito-Regular.ttf'
import oswald from './Assets/fonts/Oswald/Oswald-Regular.ttf'

injectGlobal`
    @font-face {
        font-family: 'Nunito';
        src: url('${nunito}') format('woff2');
    }
    @font-face {
        font-family: 'Oswald';
        src: url('${oswald}') format('woff2');
    }
    body {
        margin: 0;
        padding: 0;
    }
`

const uri = process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000'
const client = new ApolloClient({uri})

console.log('%cwelcome to high fives', 'color: purple; font-size: 40px')
console.log('%cthank you so much for your help!!!', 'color: blue; font-size: 20px')
console.log('connected to graphql endpoint ', uri)

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()

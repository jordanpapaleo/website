import React from 'react'
import { A11yNav } from './A11yNav'
import { Login } from './Login'
import { Nav } from './Nav'

export const Header = () => (
  <header>
    <h1 style={{ color: '#ff6347' }}>Header Components</h1>
    <A11yNav />
    <Login />
    <Nav type='HEADER' />
  </header>
)

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { HighFivesLogo } from '../Icons'
import { Link } from '@reach/router'
import { theme } from '../utils/theme'

const StyledNav = styled.nav`
  align-items: center;
  height: 125px;
  padding-left: 30px;
  padding-right: 30px;

  ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    li {
      list-style-type: none;
      margin-left: 30px;

      a {
        border-bottom: 3px solid ${theme.colors.burntSienna};
        color: white;
        font-family: ${theme.fonts.futura};
        font-size: 18px;
        padding-bottom: 10px;
        padding-top: 10px;
        text-decoration: none;

        &.btn {
          background-color: ${theme.colors.burntSienna};
          padding: 15px 25px;
        }
      }
    }
  }
`

const getProps = ({ isCurrent }) => ({
  style: {
    borderBottomWidth: isCurrent ? 3 : 0
  }
})

export const Nav = ({type}) => (
  <StyledNav className='row' style={{
    backgroundColor: type === 'HEADER' ? theme.colors.blackO85 : theme.colors.arsenic
  }}>
    <div className='col-xs-12 col-sm-12 col-md-4'>
      <HighFivesLogo primaryColor={theme.colors.burntSienna} />
    </div>

    <ul className='col-xs-12 col-sm-12 col-md-8'>
      <li><Link to='/about' getProps={getProps}>About</Link></li>
      <li><Link to='/programs' getProps={getProps}>Programs</Link></li>
      <li><Link to='/events' getProps={getProps}>Events</Link></li>
      <li><Link to='/apply' getProps={getProps}>Apply</Link></li>
      <li><Link to='/donate' className='btn'>Donate</Link></li>
    </ul>
  </StyledNav>
)

Nav.propTypes = {
  type: PropTypes.oneOf(['HEADER', 'OTHER'])
}

/**
 * Colorful names courtesy of http://chir.ag/projects/name-that-color/
 *
 * Accessible in all styled-components as:
 *
 * color: ${(props) => props.theme.colors.pewter}
 * OR
 * color: ${({ theme }) => theme.colors.pewter}
 */

export const theme = {
  colors: {
    contrast: '#E5834B', // Bright Orange
    pewter: '#8D9C99',
    nevada: '#5B6569',
    limedSpruce: '#323E48',
    ecruWhite: '#F6F6E9',
    primary: '#728D87', // Dark Sea Green
    patina: '#699990',
    monteCarlo: '#85CECA',
    copper: '#C66B37',
    secondary: '#62B3AF' // Dark Turqiose
  },
  fonts: {
    primary: 'Oswald',
    secondary: 'Nunito'
  }
}

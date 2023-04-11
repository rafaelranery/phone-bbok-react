import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${variables.textPrimary};
  font-family: 'Sora', sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 280px auto;
}
`
export const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 16px;
  background-color: ${variables.green};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 18px;
`

export default GlobalStyle

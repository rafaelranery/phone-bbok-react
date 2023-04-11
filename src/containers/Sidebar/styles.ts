import styled from 'styled-components'
import variables from '../../styles/variables'
import { Button } from '../../styles'

export const Aside = styled.aside`
  background-color: ${variables.backgroundPrimary};
  height: 100vh;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const ButtonAddContact = styled(Button)`
  margin: 0 32px;
`
export const ButtonReturn = styled(ButtonAddContact)`
  background-color: ${variables.textPrimary};
  margin-top: 54px;
`

export const SearchInput = styled.input`
  max-width: 100%;
  margin: 12px 32px;
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 16px;
  border: 1px solid ${variables.textPrimary};
`

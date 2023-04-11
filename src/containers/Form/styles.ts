import styled from 'styled-components'
import variables from '../../styles/variables'
import { Button } from '../../styles'

export const Form = styled.form`
  display: block;
  margin: auto auto;
  padding: 12px;
  width: 380px;
  background-color: ${variables.backgroundSecondary};
  border: 2px solid ${variables.textPrimary};
  border-radius: 6px;
`

export const InputGroup = styled.div`
  &:first-child {
    margin-top: 0px;
  }
  margin: 24px 0;

  label {
    display: block;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  input {
    padding: 4px;
    border-radius: 8px;
    width: 100%;
    font-size: 22px;
  }
`
export const AddButton = styled(Button)`
  width: 100%;
`

import styled from 'styled-components'
import variables from '../../styles/variables'

export const Card = styled.li`
  background-color ${variables.backgroundPrimary};
  max-width: 320px;
  width: 100%;
  margin: 16px 0;
  box-shadow: 0px 0px 4px #000;
`

export const CardHeader = styled.div`
  background-color: ${variables.textPrimary};
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 8px 0;
  padding-right: 8px;
`

export const CardButtonExclude = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: red;
  border: none;
  font-size: 18px;
  margin: 0 8px;
  font-weight: bold;
`
export const CardButtonEdit = styled.button`
  padding: 2px 4px;
  border-radius: 6px;
  background-color ${variables.backgroundPrimary};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
export const CardButtonSave = styled(CardButtonEdit)`
  background-color: ${variables.green};
  margin-right: 2px;
`
export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 8px;

  input {
    padding: 4px;
    font-size: 18px;
    margin-left: 6px;
    width: 100%;
  }
`

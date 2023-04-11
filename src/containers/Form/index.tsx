/* NPM */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
/* DATA */
import { add } from '../../store/reducers/contacts'
/* STYLES */
import * as S from './styles'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')

  const addAction = (e: React.MouseEvent) => {
    e.preventDefault()
    if (name.length <= 0) {
      alert('Please, complete de "Name" field to add a contact.')
    } else {
      dispatch(
        add({
          name,
          email,
          telephone
        })
      )
      navigate('/')
    }
  }

  return (
    <S.Form action="submit">
      <S.InputGroup>
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="New name..."
          id="name"
        />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="New email..."
          id="email"
        />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="telephone">Telephone:</label>
        <input
          onChange={(e) => setTelephone(e.target.value)}
          type="telephone"
          placeholder="New telephone..."
          id="telephone"
        />
      </S.InputGroup>
      <S.AddButton onClick={(e) => addAction(e)}>Add new contact</S.AddButton>
    </S.Form>
  )
}
export default Form

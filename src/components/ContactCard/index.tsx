/* NPM */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
/* DATA */
import { edit, remove } from '../../store/reducers/contacts'
/* MODELS */
import ContactClass from '../../models/ContactClass'
/* STYLES */
import * as S from './styles'
/* IMGS */
import mailIcon from '../../assets/mail-icon.svg'
import phoneIcon from '../../assets/smartphone-icon.svg'
import userIcon from '../../assets/user-icon.svg'

type Props = ContactClass

const ContactCard = ({
  id,
  name: nameOriginal,
  email: emailOriginal,
  telephone: telephoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')

  useEffect(() => {
    if (
      nameOriginal.length > 0 ||
      emailOriginal.length > 0 ||
      telephoneOriginal.length > 0
    ) {
      setName(nameOriginal)
      setEmail(emailOriginal)
      setTelephone(telephoneOriginal)
    }
  }, [nameOriginal, emailOriginal, telephoneOriginal])

  const discardChange = () => {
    setName(nameOriginal)
    setEmail(emailOriginal)
    setTelephone(telephoneOriginal)
    setIsEditing(!isEditing)
  }

  const saveChange = () => {
    if (name.length > 0 && email.length > 0 && telephone.length > 0) {
      dispatch(
        edit({
          id,
          name,
          email,
          telephone
        })
      )
      setIsEditing(!isEditing)
    } else {
      alert('You cannot assign a edited contact field as "black"')
      discardChange()
    }
  }

  return (
    <S.Card>
      <S.CardHeader>
        {isEditing ? (
          <>
            <S.CardButtonSave onClick={() => saveChange()}>
              Save
            </S.CardButtonSave>
            <S.CardButtonEdit onClick={() => discardChange()}>
              Discard
            </S.CardButtonEdit>
          </>
        ) : (
          <>
            <S.CardButtonEdit
              onClick={() => setIsEditing(!isEditing)}
              type="button"
            >
              Edit
            </S.CardButtonEdit>
            <S.CardButtonExclude
              onClick={() => dispatch(remove({ id }))}
              type="button"
            >
              X
            </S.CardButtonExclude>
          </>
        )}
      </S.CardHeader>
      <S.InputGroup>
        <img src={userIcon} alt="User Icon" />
        <input
          value={name}
          type="text"
          placeholder="Name..."
          disabled={!isEditing}
          onChange={(e) => setName(e.target.value)}
        />
      </S.InputGroup>
      <S.InputGroup>
        <img src={mailIcon} alt="Mail Icon" />
        <input
          value={email}
          type="email"
          placeholder="example@email.com..."
          disabled={!isEditing}
          onChange={(e) => setEmail(e.target.value)}
        />
      </S.InputGroup>
      <S.InputGroup>
        <img src={phoneIcon} alt="Phone Icon" />
        <input
          value={telephone}
          type="tel"
          placeholder="(00) 00000-0000"
          disabled={!isEditing}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </S.InputGroup>
    </S.Card>
  )
}
export default ContactCard

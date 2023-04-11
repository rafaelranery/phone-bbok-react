/* COMPONENTS */
import ContactList from '../../components/ContactList'
/* STYLES */
import * as S from './styles'

const Contacts = () => {
  return (
    <S.Main
      onWheel={(e) => {
        e.currentTarget.scrollBy({
          left: e.deltaY < 0 ? -30 : 30
        })
      }}
    >
      <ContactList />
    </S.Main>
  )
}
export default Contacts

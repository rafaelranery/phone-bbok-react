/* NPM */
import { useSelector } from 'react-redux'
// import { useState } from 'react'
/* DATA */
import { RootReducer } from '../../store/store'
/* MODELS */
// import ContactClass from '../../models/ContactClass'
/* COMPONENTS */
import ContactCard from '../ContactCard'
/* STYLES */
import * as S from './styles'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  let contactsFiltered = itens
  const searchFilter = () => {
    if (term !== undefined && term !== '') {
      contactsFiltered = contactsFiltered.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )
      return contactsFiltered
    } else {
      return itens
    }
  }
  const CONTACTSFILTEREDLIST = searchFilter()

  const renderDisclaimer = () =>
    term?.length > 0
      ? `There are ${CONTACTSFILTEREDLIST.length} contacts matching the term: "${term}"`
      : `There are ${CONTACTSFILTEREDLIST.length} contacts in your list.`

  return (
    <>
      <S.Disclaimer>{renderDisclaimer()}</S.Disclaimer>
      <S.List>
        {CONTACTSFILTEREDLIST.map((contact) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            name={contact.name}
            email={contact.email}
            telephone={contact.telephone}
          />
        ))}
      </S.List>
    </>
  )
}

export default ContactList

/* NPM */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/* CLASS */
import ContactClass from '../../models/ContactClass'

type ContactState = {
  itens: ContactClass[]
}
const initialState: ContactState = {
  itens: [
    {
      id: 1,
      name: 'Gabriel Fortunato',
      email: 'dramaemcrise@gmail.com',
      telephone: '11 953616215'
    },
    {
      id: 2,
      name: 'Leonardo Zocolaro',
      email: 'leonardozocolaro@gmail.com',
      telephone: '11 953616215'
    },
    {
      id: 3,
      name: 'James Noborikawa',
      email: 'jamesnoborikawa@gmail.com',
      telephone: '11 953616215'
    },
    {
      id: 4,
      name: 'Martha Silveira',
      email: 'marthasilveira@gmail.com',
      telephone: '11 953616215'
    },
    {
      id: 5,
      name: 'Katia Afonso',
      email: 'katiaafonso@gmail.com',
      telephone: '11 953616215'
    },
    {
      id: 6,
      name: 'Renan Godoi',
      email: 'renangodoi@gmail.com',
      telephone: '11 953616215'
    }
  ]
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<ContactClass>) => {
      /* 1: Achar o index da tarefa que se edita */
      const contactIndex = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (contactIndex >= 0) {
        /* selecionando a própria tarefa no state a partir do seu index,
        e atualizando-a com o conteúdo do payload */
        state.itens[contactIndex] = action.payload
      }
    },
    remove: (
      state,
      action: PayloadAction<Omit<ContactClass, 'name' | 'email' | 'telephone'>>
    ) => {
      const itensWithoutPayload = state.itens.filter(
        (item) => item.id !== action.payload.id
      )
      state.itens = itensWithoutPayload
    },
    add: (state, action: PayloadAction<Omit<ContactClass, 'id'>>) => {
      const CONTACTEXIST = state.itens.find(
        (item) => item.name === action.payload.name
      )

      if (CONTACTEXIST) {
        alert(`You've already added a contact named ${action.payload.name}`)
      } else {
        const LASTCONTACT = state.itens[state.itens.length - 1]

        const NEWCONTACT = {
          ...action.payload,
          id: LASTCONTACT ? LASTCONTACT.id + 1 : 1
        }
        state.itens.push(NEWCONTACT)
      }
    }
  }
})

export const { edit, remove, add } = contactsSlice.actions
export default contactsSlice.reducer

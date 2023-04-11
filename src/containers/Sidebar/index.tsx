/* NPM */
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
/* DATA */
import { RootReducer } from '../../store/store'
import { alterFilter } from '../../store/reducers/filter'
/* Styles */
import * as S from './styles'

type Props = {
  isHome?: boolean
}

const Sidebar = ({ isHome }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      {isHome ? (
        <>
          <S.SearchInput
            value={term}
            onChange={(e) => dispatch(alterFilter(e.target.value))}
            type="text"
            placeholder="Search by name..."
          />
          <S.ButtonAddContact onClick={() => navigate('/new-contact')}>
            Add contact
          </S.ButtonAddContact>
        </>
      ) : (
        <S.ButtonReturn onClick={() => navigate('/')}>Return</S.ButtonReturn>
      )}
    </S.Aside>
  )
}

export default Sidebar

/* NPM */
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
/* DATA */
import { store } from './store/store'
/* PAGES */
import Home from './pages/Home'
import AddContact from './pages/AddContact'

/*  STYLES */
import GlobalStyle from './styles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new-contact',
    element: <AddContact />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <RouterProvider router={routes} />
      </div>
    </Provider>
  )
}

export default App

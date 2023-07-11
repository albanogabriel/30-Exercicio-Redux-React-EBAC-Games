import Header from './components/Header'
import Produtos from './containers/Produtos'

import { Container, GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type ProdutoType = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Header />
        <Produtos />
      </Container>
    </Provider>
  )
}

export default App

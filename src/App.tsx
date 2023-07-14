import { Route, Routes } from 'react-router-dom'
import { DetailPage, ListPage, NotFoundPage } from './pages'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyles } from './styles/globals'
import { Navigation } from './components/Organism/Navigation'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/cars/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  )
}

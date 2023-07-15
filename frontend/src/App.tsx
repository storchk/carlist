import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@/styles'
import { theme } from '@/theme'

import { Navigation } from './components/Organism/Navigation'
import { DetailPage, ListPage, NotFoundPage } from './pages'

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

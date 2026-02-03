import { ThemeProvider } from '@damarkuncoro/ui-library'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { PaletteColors } from './pages/palette-colors'
import { ButtonPage } from './pages/components/button'
import { InputPage } from './pages/components/input'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palette-colors" element={<PaletteColors />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/input" element={<InputPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

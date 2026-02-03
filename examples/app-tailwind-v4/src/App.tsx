import { ThemeProvider } from '@damarkuncoro/ui-library'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { PaletteColors } from './pages/palette-colors'
import { ButtonPage } from './pages/components/button'
import { InputPage } from './pages/components/input'
import { LayoutPage } from './pages/tailwind-v4/Layout'
import { FlexboxPage } from './pages/tailwind-v4/Flexbox'
import { GridPage } from './pages/tailwind-v4/Grid'
import { SizingPage } from './pages/tailwind-v4/Sizing'
import { SpacingPage } from './pages/tailwind-v4/Spacing'

export default function App() {
  return (
    <ThemeProvider>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palette-colors" element={<PaletteColors />} />
            <Route path="/components/button" element={<ButtonPage />} />
            <Route path="/components/input" element={<InputPage />} />
            <Route path="/tailwind-v4/Layout" element={<LayoutPage />} />
            <Route path="/tailwind-v4/Flexbox" element={<FlexboxPage />} />
            <Route path="/tailwind-v4/Grid" element={<GridPage />} />
            <Route path="/tailwind-v4/Sizing" element={<SizingPage />} />
            <Route path="/tailwind-v4/Spacing" element={<SpacingPage />} />
          </Routes>
        </BrowserRouter>
      
    </ThemeProvider>
  )
}

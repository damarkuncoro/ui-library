import { ThemeProvider } from '@damarkuncoro/ui-library'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { PaletteColors } from './pages/palette-colors'
import { ButtonPage } from './pages/components/button'
import { InputPage } from './pages/components/input'

export default function App() {
  return (
    <ThemeProvider>
      <div className="text-[50px] p-4 text-red-500 text-my-red w-[123px] rounded-[123px] rounded-[6px] w-10 rounded-md bg-blue-500 border-2 border-black">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palette-colors" element={<PaletteColors />} />
            <Route path="/components/button" element={<ButtonPage />} />
            <Route path="/components/input" element={<InputPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

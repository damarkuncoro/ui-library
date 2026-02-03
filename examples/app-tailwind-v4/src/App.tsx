import { ThemeProvider } from '@damarkuncoro/ui-library'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { PaletteColors } from './pages/palette-colors'
import { ButtonPage } from './pages/components/button'
import { InputPage } from './pages/components/input'
import { ShapePage } from './pages/components/shape'
import { LayoutPage } from './pages/tailwind-v4/Layout'
import { FlexboxPage } from './pages/tailwind-v4/Flexbox'
import { GridPage } from './pages/tailwind-v4/Grid'
import { SizingPage } from './pages/tailwind-v4/Sizing'
import { SpacingPage } from './pages/tailwind-v4/Spacing'
import { TypographyPage } from './pages/tailwind-v4/Typography'
import { BordersPage } from './pages/tailwind-v4/Borders'
import { BackgroundsPage } from './pages/tailwind-v4/Backgrounds'
import { EffectsPage } from './pages/tailwind-v4/Effects'
import FiltersPage from './pages/tailwind-v4/Filters'
import TablesPage from './pages/tailwind-v4/Tables'
import TransitionsPage from './pages/tailwind-v4/Transitions'
import TransformsPage from './pages/tailwind-v4/Transforms'
import AnimationPage from './pages/tailwind-v4/Animation'
import AccessibilityPage from './pages/tailwind-v4/Accessibility'
import InteractivityPage from './pages/tailwind-v4/Interactivity'
import SVGPage from './pages/tailwind-v4/SVG'

export default function App() {
  return (
    <ThemeProvider>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palette-colors" element={<PaletteColors />} />
            <Route path="/components/button" element={<ButtonPage />} />
            <Route path="/components/input" element={<InputPage />} />
            <Route path="/components/shape" element={<ShapePage />} />
            <Route path="/tailwind-v4/Layout" element={<LayoutPage />} />
            <Route path="/tailwind-v4/Flexbox" element={<FlexboxPage />} />
            <Route path="/tailwind-v4/Grid" element={<GridPage />} />
            <Route path="/tailwind-v4/Sizing" element={<SizingPage />} />
            <Route path="/tailwind-v4/Spacing" element={<SpacingPage />} />
            <Route path="/tailwind-v4/Typography" element={<TypographyPage />} />
            <Route path="/tailwind-v4/Borders" element={<BordersPage />} />
            <Route path="/tailwind-v4/Backgrounds" element={<BackgroundsPage />} />
            <Route path="/tailwind-v4/Effects" element={<EffectsPage />} />
            <Route path="/tailwind-v4/Filters" element={<FiltersPage />} />
            <Route path="/tailwind-v4/Tables" element={<TablesPage />} />
            <Route path="/tailwind-v4/Transitions" element={<TransitionsPage />} />
            <Route path="/tailwind-v4/Transforms" element={<TransformsPage />} />
            <Route path="/tailwind-v4/Animation" element={<AnimationPage />} />
            <Route path="/tailwind-v4/Accessibility" element={<AccessibilityPage />} />
            <Route path="/tailwind-v4/Interactivity" element={<InteractivityPage />} />
            <Route path="/tailwind-v4/SVG" element={<SVGPage />} />
          </Routes>
        </BrowserRouter>
      
    </ThemeProvider>
  )
}

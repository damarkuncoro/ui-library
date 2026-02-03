import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickDemo } from './components/QuickDemo';
import { NavigationSections } from './components/NavigationSections';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-bg via-neutral-bg-surface to-neutral-bg">
      <Header />
      <Hero />
      <QuickDemo />
      <NavigationSections />
      <Features />
      <Footer />
    </div>
  );
}

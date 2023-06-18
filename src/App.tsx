import { ThemeProvider } from './ThemeProvider';
import './App.css'
import CarouselComp from './components/Welcome/CarouselComp';

export default function App() {
  return (
    <ThemeProvider>
      <CarouselComp/>
    </ThemeProvider>
  );
  
}

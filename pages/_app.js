import '../assets/styles/globals.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../assets/styles/globals.css';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  
  return (
    <div className='font-jetbrains'>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Navigation/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default MyApp;

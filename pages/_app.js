import '../assets/styles/globals.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../assets/styles/globals.css';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Navigation/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default MyApp;

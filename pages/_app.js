import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {

  // pour appeler le serveur au chargement de la page et récupérer la response et les données (data)

  return (
    <> 
      <Navbar/>
      <Component {...pageProps} />
    </>
    )
};

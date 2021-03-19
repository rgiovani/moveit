import '../styles/global.css'

import { AuthProvider } from '../context/AuthContext';
import { RankingProvider } from '../context/RankingContext';

//Contem tudo o que repete entre as telas. (!"Recalcula/recarrega" a cada interação do usuário)
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <RankingProvider>
        <Component {...pageProps} />
      </RankingProvider>
    </AuthProvider>
  )

}

export default MyApp

import '../styles/global.css'

import { ChallengesProvider } from '../context/ChallengesContexts';
import { AuthProvider } from '../context/AuthContext';

//Contem tudo o que repete entre as telas. (!"Recalcula/recarrega" a cada interação do usuário)
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )

}

export default MyApp

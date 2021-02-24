import '../styles/global.css'

import { ChallengesProvider } from '../context/ChallengesContexts';

//Contem tudo o que repete entre as telas. (!"Recalcula/recarrega" a cada interação do usuário)
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )

}

export default MyApp

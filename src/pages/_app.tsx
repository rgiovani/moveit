import '../styles/global.css'

//Contem tudo o que repete entre as telas. (!"Recalcula/recarrega" a cada interação do usuário)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Principal from './componentes/Principal'
import './index.css'
function App() {
  return (
    <div className='h-dvh w-dvw flex flex-col'>
      <Header className="flex-1" />
      <Principal className="flex-1" />
      <Footer className="flex-1" />
    </div>
  )
}

export default App
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [devmons, setDevmons] = useState([])

  async function fetchData() {
    const apiUrl = 'https://backend-iniciante-integrar-com-frontend.onrender.com/personagemm'

    const response = await fetch(apiUrl).catch(function (error) {
      console.error('Erro ao chamar endpoint /personagem', error)
      toast.error('Erro ao carregar lista de DevMon')
    })

    if (response.ok) {
      const data = await response.json()

      setDevmons(data)
    } else {
      toast.error('Erro ao carregar lista de DevMon')
    }
  }

  useEffect(function () {
    fetchData()
  }, [])

  return (
    <>
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div>
      <ToastContainer />
    </>
  )
}

export default App

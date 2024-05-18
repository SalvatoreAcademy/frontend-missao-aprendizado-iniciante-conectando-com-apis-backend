import './App.css'
import Card from './components/Card/Card'

function App() {
  const devmons = []

  async function fetchData() {
    const apiUrl = 'https://backend-iniciante-integrar-com-frontend.onrender.com/personagem'

    const response = await fetch(apiUrl)

    const data = await response.json()

    console.log(45, data)
  }

  fetchData()

  return (
    <>
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div>
    </>
  )
}

export default App

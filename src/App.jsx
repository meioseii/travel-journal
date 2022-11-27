import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import data from './data'

function App() {
  const card = data.map(card => {
    return <Card 
              key={card.id}
              item={card}
          />
  })

  return (
    <>
      <Navbar />
      <section className='content'>
        {card}
      </section>
    </>
    
  )
}

export default App

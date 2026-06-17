import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb67Pjs51IM4dHMh2w8TJ2e8sdt1gLbjaEig&s"
      name="Mohan"
      class="B.Tech"
      />
      <br/>
      <Card
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVck9tAg_R6pZEY5_Dp3Amo7B3QxKlP2AEQ&s"
      name="Sohan"
      class="B.Tech"
      />
      <br/>
      <Card
      img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPUfQdBVVyk5EtnHnJ60AjOM2oUalTeRjPg&s'
      name="Rohan"
      class="B.Tech"
      />
    </div>
    
      
    
    
  )
}

export default App

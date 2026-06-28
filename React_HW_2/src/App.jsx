import Greeting from './components/Greeting'
import ShoppingList from './components/ShoppingList'
import './App.css'

function App() {
  const items = ["Кепка", "Шапка", "Очки"];

  return (
    <>
      <div>
        <Greeting name="Александр" />
      </div>
      <div>
        <ShoppingList items={items} />
      </div>
    </>
  )
}

export default App

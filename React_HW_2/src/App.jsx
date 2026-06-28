import Greeting from './components/Greeting'
import ShoppingList from './components/ShoppingList'
import OrderStatus from "./components/OrderStatus";
import './App.css'

function App() {
  const items = ["Кепка", "Шапка", "Очки"];

  const orders = [
      { orderId: 1, status: "в пути" },
      { orderId: 2, status: "Обработан" },
      { orderId: 3, status: "Доставлен" },
  ];

  return (
    <>
      <div>
        <Greeting name="Александр" />
      </div>
      <div>
        <ShoppingList items={items} />
      </div>
      {orders.map((order) => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </>
  )
}

export default App

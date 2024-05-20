import { useState } from "react";
import "./App.css";


interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`,
  timestamp: number,
  text: string
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Peliculas",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Series",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Documentales",
  }
]

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)
  return (
    <main>
      <aside>
        <h1>Prueba tecnica React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>

        <form action="">
          <label htmlFor="">
            Elemento a introducir
            <input name="item" required type="text" placeholder="Elemento" />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {
            items.map(item => {
              return(
                <li key={item.id}>
                  { item.text }
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default App;

      
import './App.css'
import { Carrito } from './Components/ui/Carrito/Carrito'
import { ListProducts } from './Components/ui/ListProducts/ListProducts'
import { useStoreCarrito } from './Store/useStoreCarrito'

function App() {

const products  = [
  {
    "name": "Zapatillas Running Hombre",
    "Category": {
      "id": 1,
      "name": "Calzado"
    },
    "productType": "FISICO",
    "sex": "Hombre",
    "prices": {
      "id": 1,
      "amount": 15999.99,
      "currency": "ARS"
    },
    "image": {
      "id": 1,
      "url": "https://ejemplo.com/imagenes/zapatillas.jpg"
    },
    "sizes": [
      { "id": 1, "label": "40" },
      { "id": 2, "label": "41" }
    ],
    "colors": [
      { "id": 1, "name": "Rojo" },
      { "id": 2, "name": "Negro" }
    ]
  },
  {
    "name": "Remera Oversize Unisex",
    "Category": {
      "id": 2,
      "name": "Ropa"
    },
    "productType": "FISICO",
    "sex": "Unisex",
    "prices": {
      "id": 2,
      "amount": 7999.50,
      "currency": "ARS"
    },
    "image": {
      "id": 2,
      "url": "https://ejemplo.com/imagenes/remera.jpg"
    },
    "sizes": [
      { "id": 3, "label": "M" },
      { "id": 4, "label": "L" }
    ],
    "colors": [
      { "id": 3, "name": "Blanco" },
      { "id": 4, "name": "Gris" }
    ]
  },
  {
    "name": "Gorra Logo Streetwear",
    "Category": {
      "id": 3,
      "name": "Accesorios"
    },
    "productType": "FISICO",
    "sex": "Hombre",
    "prices": {
      "id": 3,
      "amount": 4999.00,
      "currency": "ARS"
    },
    "image": {
      "id": 3,
      "url": "https://ejemplo.com/imagenes/gorra.jpg"
    },
    "sizes": [
      { "id": 5, "label": "Único" }
    ],
    "colors": [
      { "id": 5, "name": "Negro" },
      { "id": 6, "name": "Azul" }
    ]
  }
]

const {mostrarCarrito, toggleCarrito} = useStoreCarrito()


  return (
    <div className='containerGeneral'>
      <button onClick={toggleCarrito}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></button>
      <ListProducts products={products}/>
     {mostrarCarrito && <Carrito/>} 
    </div>
  )
}

export default App
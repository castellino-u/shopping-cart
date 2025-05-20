
import { useStoreCarrito } from '../../../Store/useStoreCarrito'

export const Carrito = () => {
    const {productosEnCarrito} = useStoreCarrito()
  return (
    <div>
        <h1>Carrito</h1>
                <div>

        {productosEnCarrito.map((product) => (
            <div>
                
            <p>{product.name}</p>
            <br />
     
            <p>{product.prices.amount}</p>

            <button onClick={async () => {
              console.log(productosEnCarrito)
            }}>Eliminar del carrito</button>
            </div>
        ))}
        </div>
    </div>
  )
}

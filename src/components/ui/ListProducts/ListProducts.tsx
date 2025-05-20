import type { FC } from "react"
import { useStoreCarrito } from "../../../Store/useStoreCarrito"



interface ListProducts {
    products: any[]
}


export const ListProducts: FC<ListProducts> = ({products}) => {
  const {addProduct, productosEnCarrito} = useStoreCarrito()
  return (
    <div>
        Catalogo de productos


        <div>

        {products.map((product) => (
            <div>
                
            <p>{product.name}</p>
            <br />
     
            <p>{product.prices.amount}</p>

            <button onClick={async () => {
              await addProduct(product)
              console.log(productosEnCarrito)
            }}>Enviar a carrito</button>
            </div>
        ))}
        </div>
    </div>
  )
}
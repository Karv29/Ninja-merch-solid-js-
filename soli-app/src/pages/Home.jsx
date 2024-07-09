import { For, Show, createResource } from "solid-js"
import Card from "../components/Cards"
import { A } from "@solidjs/router"

const fetchProducts = async()=>{
  const res = await fetch('http://localhost:8000/products')
  return res.json()
}
export default function Home() {
  const [products] = createResource(fetchProducts)
  
  return (
    <Show when={products() } fallback = {<p> Loading ....</p>}>
    <div class="grid grid-cols-4 gap-10 my-4">
      {/* <Card flat={true} rounded={false}>
        <h2>Ninja Tee, black</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, expedita?</p>
        <button class="btn">view</button>
      </Card>
      <Card flat={false} rounded={true}>
        <h2>Ninja Tee, white</h2>
        <button class="btn">view</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, expedita?</p>
        <p>Only £10</p>
      </Card> */}
<For each = {products()}>
  {(products)=>(

<Card rounded = {true} flat = {true}>
  <img src={products.image}  alt="products Image"/>
  <h1 class="my-4 font-bold">
    {products.title}
  </h1>
  <A href={"/products/" + products.id}  class="btn" > View product</A>
</Card>
  )}

</For>

      <p>{console.log(products(), products.loading)}</p>
    </div>
    </Show>
  )
}
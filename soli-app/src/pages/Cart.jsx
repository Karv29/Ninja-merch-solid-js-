import Card from "../components/Cards";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { items } = useCartContext();

  const total = () => {
    return items.reduce((acc, p) => {
      return acc + p.quantity * p.price;
    }, 0);
  };

  return (
    <div class="max-w-md my-8 mx-auto">
      <Card rounded={true}>
        <h2 class="text-xl font-bold mb-4">Your Shopping Cart</h2>
        <div>
          <For each={items}>
            {(item) => (
              <div class="flex justify-between items-center" key={item.id}>
                <div>
                  <p class="text-lg font-semibold">{item.title}</p>
                  <p class="text-gray-500">Price: ${item.price.toFixed(2)}</p>
                </div>
                <p class="text-gray-700">Quantity: {item.quantity}</p>
              </div>
            )}
          </For>
        </div>
        <p class="mt-8 pt-4 border-t-2 font-bold text-xl">
          Total Amount: ${total().toFixed(2)}
        </p>
      </Card>
    </div>
  );
}

import { createSignal } from 'solid-js';
import { Router, Route } from "@solidjs/router";

import banner from './assets/banner.png';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import { useCartContext } from './context/CartContext';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
    document.body.classList.toggle('dark', darkTheme());

  }
const {items} = useCartContext()
const quantity = ()=>{
return items.reduce((acc , current)=>{
  return acc + current.quantity
},0)
}
  return (
    <div class="container mx-auto">
      <header
        class="bg-blue-500 text-white py-4 px-6 flex items-center justify-between"
        classList={{ "bg-neutral-900": darkTheme() }}
      >
        <div class="flex items-center gap-4">
          <span
            class="material-symbols-outlined cursor-pointer"
            onClick={toggleTheme}
          >
            {darkTheme() ? 'dark_mode' : 'light_mode'}
          </span>
          <h1 class="text-xl">Ninja Merch</h1>
        </div>
        <nav class='flex flex-row justify-start '>
          <a class="text-white hover:text-gray-300 mx-2" href="/">Home</a>
          <a class="text-white hover:text-gray-300 mx-2" href="/cart">Cart({quantity})</a>
        </nav>
      </header>
      
      <img class="rounded-md" src={banner} alt="site banner" />

      <Router>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path= "/products/:id" component={Products}/>
      </Router>
    </div>
  );
}

export default App;

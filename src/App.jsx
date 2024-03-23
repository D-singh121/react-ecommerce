import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, About, Contact, Products, Order, Cart, ProductDetails, NoPage } from "./pages/index.js";
import { Navbar, Footer } from "./components/index.js"

const App = () => {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />

          <Route path="*" element={<NoPage />} />

        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App;
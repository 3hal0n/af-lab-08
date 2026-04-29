import React from 'react'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div>
      <NavBar />
      <Greeting />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            image="../assets/images/product1.jpg"
            title="Product 1"
            description="Description for Product 1."
          />
          <ProductCard 
            image="../assets/images/product2.jpg"
            title="Product 2"
            description="Description for Product 2."
          />
          <ProductCard 
            image="../assets/images/product3.jpg"
            title="Product 3"
            description="Description for Product 3."
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

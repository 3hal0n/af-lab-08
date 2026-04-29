import React from 'react'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import Button from './components/Button'
import Banner from './components/Banner'
import Testimonial from './components/Testimonial'

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
        <Button label="View All Products" variant="primary" size="lg" className="mx-auto mb-12 px-6 py-6 mt-6" />
      </div>
      <Banner message="Unlock Your Potential with Our Exclusive Offer!" />
      <Testimonial 
        quote="This product has completely transformed how I approach design challenges."
        name="Alex Johnson"
        photo="../assets/images/testimonial1.jpg"
      />
      <Testimonial 
        quote="I've tried many similar products, but this one stands out for its exceptional quality and user-friendly interface."
        name="Sarah Williams"
        photo="../assets/images/testimonial2.jpg"
      />
      <Footer />
    </div>
  )
}

export default App

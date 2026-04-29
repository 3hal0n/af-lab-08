import React from 'react'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import Button from './components/Button'
import Banner from './components/Banner'
import Testimonial from './components/Testimonial'
import product1 from './assets/images/product1.jpg'
import product2 from './assets/images/product2.jpg'
import product3 from './assets/images/product3.jpg'
import testimonial1 from './assets/images/testimonial1.jpg'
import testimonial2 from './assets/images/testimonial2.jpg'

function App() {
  return (
    <div>
      <NavBar />
      <Greeting />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            image={product1}
            title="Product 1"
            description="Description for Product 1."
          />
          <ProductCard 
            image={product2}
            title="Product 2"
            description="Description for Product 2."
          />
          <ProductCard 
            image={product3}
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
        photo={testimonial1}
      />
      <Testimonial 
        quote="I've tried many similar products, but this one stands out for its exceptional quality and user-friendly interface."
        name="Sarah Williams"
        photo={testimonial2}
      />
      <Footer />
    </div>
  )
}

export default App

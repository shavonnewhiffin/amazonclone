import React from 'react'
import { useSelector } from 'react-redux';

const Checkout = () => {

    const products = useSelector((state) => state.cart.products)
  return (
    <div className="h-screen bg-[var(--color-background)]">
        <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
            <div className="grid grid-cols-8 bg-white gap-10">
                {/* Products */}
                <div className="col-span-6">
                    <div className="text-2xl xl:text-3xl m-4">
                        Shopping Cart
                    </div>
                    {
                        products.map(product => {
                            return ( 
                            <div key={product.id}> {product.title} </div>
                        )
                        })
                    }
                    {/* Checkout */}
                    <div className="col span-2 bg-white rounded h-[250px]">

                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Checkout;
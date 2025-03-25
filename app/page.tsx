"use client"

import Header from "@/components/Header";
import { useSelector } from 'react-redux';
import RootLayout from './layout';
import { RootState } from '../lib/store/store';

export default function Home() {

  const products = useSelector((state: RootState) => state.product.ProductItems);

  return (
    <>
      <Header />
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} style={{ marginTop: "20rem", color: "white" }}>
              <img src={product.src} alt={product.name} />
              <h2>{product.name}</h2>

              <h1>Item added</h1>
            </div>
          ))
        ) :
          (<p style={{ marginTop: "20rem", color: "white" }}>No products to show</p >)
        }
      </div>


    </>
  );
}
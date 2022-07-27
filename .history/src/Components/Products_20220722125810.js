
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  //console.log(cat,filters,sort);
  const [products,setProdcuts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])

  useEffect (() => { 

    const getProdcuts=async () =>{
      try { 
        const res =await axios.get(cat ? `http://localhost:5000/api/Products?category=${cat}`
                                         :'http://localhost:5000/api/products/')
        console.log(res)
        setProdcuts(res.data)
        alert(res.data)
      }
      catch(e){ return null; }
    }
    getProdcuts();

  },[cat]  );

  useEffect( ()=>{
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );

  }, [products,cat,filters] )

  useEffect(()=>{
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }

  },[sort])


  return (

    <Container>
     {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.slice(0, 8)
                        .map((item) => <Product item={item} key={item.id} />)}      
         </Container>
  );
};

export default Products;
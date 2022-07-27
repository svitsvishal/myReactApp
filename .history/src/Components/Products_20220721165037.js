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
  const [prodcuts,setProdcuts] = useState([])
  const [filterProdcuts,setFilterProdcuts] = useState([])

  useEffect (() => { 

    const getProdcuts=async () =>{
      try { 
        const res =await axios.get("http://localhost:5000/api/products/")
        console.log(res)
        alert(res.data)
      }
      catch(e){ return null; }
    }
    getProdcuts();

  },[cat]
  )
  return (

    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
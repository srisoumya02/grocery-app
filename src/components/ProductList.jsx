import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../apis/Endpoints"
import Product from "./Product";
import { useParams } from "react-router-dom";
const ProductList = () => {
    const {catId} =useParams()
    const [products, setProducts] = useState([]);

    const getData = () => {
        axios.get(Endpoints.PRODUCT_BY_CAT_ID_URL + catId)
        .then((response) => {
            console.log(response.data.data);
            setProducts(response.data.data);
        })
            .catch(error => console.log(error))
    };
    useEffect(() => {
        getData()
    }, [catId])

    return (
        <div>
            <h2>Product List</h2>
            <div className="row">
              {
                products.map((product, index)=> <Product key={index} data={product}/>)
              }
            </div>
        </div>
    )

}

export default ProductList
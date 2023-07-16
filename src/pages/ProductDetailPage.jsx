import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Endpoints from "../apis/Endpoints";
import Constants from "../apis/Constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../redux/actions/cart-actions'


const ProductDetailPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    const dispatch=useDispatch()

    const getData = () => {
        axios.get(Endpoints.PRODUCT_BY_ID_URL + id)
            .then((response) => {
                console.log(response.data.data);
                setProduct(response.data.data);
            })
            .catch(error => console.log(error))
    };
    useEffect(() => {
        getData()
    }, [id])

    const addToCartHandler=()=>{
        dispatch(addToCart(product))
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div style={{ backgroundColor: "#fff", padding: "40px", marginTop: "80px", borderRadius: "10px", }}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Constants.IMAGE_URL + product.image} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h5>{product.productName}</h5>
                            <p>{product.unit}</p>
                            <p>{product.description}</p>
                            <h2>
                                <span>&#8377;</span>{product.price}
                                <span style={{ fontsize: '22px', marginleft: '10px', color: '#888' }}>
                                    <del><span>&#8377;</span>{product.mrp}</del>
                                </span>
                            </h2>
                            <br />
                            <button onClick={addToCartHandler} className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailPage
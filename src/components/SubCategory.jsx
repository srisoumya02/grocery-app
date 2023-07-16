import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../apis/Endpoints";
import { useParams } from "react-router-dom";

const SubCategory = () => {
    const {catId} = useParams()
    const [subCategories, setSubCategories] = useState([])

    const getData = () => {
        axios
            .get(Endpoints.SUB_CATEGORY_URL + catId)
            .then(Response => setSubCategories(Response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h2 className="text-center">Sub-Category</h2>
            <ul className="list-group">
               {
                subCategories.map((subCategory,index)=>  <li key={ index } className="list-group-item">{SubCategory.subName}</li>)
               }
            </ul>
        </div>
    )
}

export default SubCategory
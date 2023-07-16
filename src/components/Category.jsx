import { Link } from "react-router-dom";
import Constants from "../apis/Constants";

const Category = (props) => {
    const { catId, catName, catImage } = props.data;

    return (
        <div className="col-sm-3">
            <div className="card">
            <img src={Constants.IMAGE_URL+catImage} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{catName}</h5>
                    <Link to={'products/'+catId} className="btn btn-primary btn-block">Select</Link>
                </div>
            </div>
        </div>
    );
};

export default Category
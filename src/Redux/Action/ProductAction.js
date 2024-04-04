import axios from "axios";
import BassURl from "../../Api/Api";

export const getAllProducts = () => (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });

    axios
        .get(`${BassURl}api/top-product`)
        .then((response) => {
            // setProductList(response.data.data);
            dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data.data });
        })
        .catch((err) => {
            dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
        });
};

export const getAllApplianceById = (id) => (dispatch) => {
    dispatch({ type: "GET_APPLIANCEBYID_REQUEST" })
    axios.get(`${BassURl}api/product-by-category/${id}`).then((res) => {
        dispatch({ type: "GET_APPLIANCEBYID_SUCCESS", payload: res.data?.data?.data })
    }).catch((err) => {
        dispatch({ type: "GET_APPLIANCEBYID_FAILED", payload: err })
    })
}
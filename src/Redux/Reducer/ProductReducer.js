export const getAllProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_REQUEST":
            return {
                loading: true,
            };
        case "GET_PRODUCTS_SUCCESS":
            return {
                products: action.payload,
                loading: false,
            };
        case "GET_PRODUCTS_FAILED":
            return {
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
export const getAllApplianceByIdRreducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case "GET_APPLIANCEBYID_REQUEST":
            return {
                loading: true,
            };
        case "GET_APPLIANCEBYID_SUCCESS":
            return {
                products: action.payload,
                loading: false,
            };
        case "GET_APPLIANCEBYID_FAILED":
            return {
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
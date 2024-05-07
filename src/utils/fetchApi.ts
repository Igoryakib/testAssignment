import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/products';

const getListProducts = async () => {
    const result = (await axios.get('/')).data;
    return result;
};

const getProductById = async (productId: number | undefined) => {
    const result = (await axios.get(`/${productId}`)).data;
    return result;
};


export {getListProducts, getProductById};
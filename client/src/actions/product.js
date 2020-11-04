import axios from 'axios'

const API = 'http://localhost:6500';


export const addProduct = async(data)=>{
    const res = await axios.post(`${API}/api/v1/products/createproduct`, data)
    return res;
}

export const updateProduct = async (id,data) => {
    const res = await axios.put(`${API}/api/v1/products/${id}`,data)
    return res;
}

export const deleteproduct = async(id) => {
    const res = await axios.delete(`${API}/api/v1/products/${id}`)
    return res;
}

export const getProducts = async (data) => {
    const res = await axios.get(`${API}/api/v1/products`, data);
    return res;
}

export const getProduct = async (id) => {
    const res = await axios.get(`${API}/api/v1/products/${id}`)
    console.log(res)
    return res;
}
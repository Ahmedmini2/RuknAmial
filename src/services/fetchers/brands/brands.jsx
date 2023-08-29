import axios from "axios";
import { useQuery } from '@tanstack/react-query';

// Fetching All Brands 
export const fetchAllBrands = async () => {
    console.log('Fetching all Brands');
    const response = await axios.get('https://oskarme.com/api/brands/brands-logo');
    const blogs = response.data;

    console.log('Brands : ' , blogs);
    return blogs;
}

// one Brand Details 
const fetchBrand = (id) => {
    console.log(`Fetching Brand # ${id}`);
   return axios.get(`https://oskarme.com/api/brands/brands-logo?id=${id}`); 
}

export const useBrandData = (id) => {
    return useQuery(['brandData', id] , () => fetchBrand(id) , {staleTime: 30000})
}

// Feching Brand Products by id
const fetchBrandProducts = (id) => {
    console.log(`Fetching Brand # ${id}`);
   return axios.get(`https://oskarme.com/api/brands/brands-products?id=${id}`); 
}

export const useBrandProductsData = (id) => {
    return useQuery(['brandProductsbyID', id] , () => fetchBrandProducts(id) , {staleTime: 30000})
}



// Feching Brand Products by Type
const fetchBrandProductsByType = (type) => {
    console.log(`Fetching Brand # ${type}`);
   return axios.get(`https://oskarme.com/api/brands/brands-logo?type=${type}`); 
}

export const useBrandProductsDataByType = (type) => {
    return useQuery(['brandByType', type] , () => fetchBrandProductsByType(type) , {staleTime: 30000})
}




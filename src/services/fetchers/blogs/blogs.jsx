import axios from "axios";
import { useQuery } from '@tanstack/react-query';

export const fetchAllBlogs = async () => {
    console.log('Fetching all Blogs');
    const response = await axios.get('https://oskarme.com/api/blogs/blog');
    const blogs = response.data;

    console.log('Blogs : ' , blogs);
    return blogs;
}

const fetchBlog = (id) => {
    console.log(`Fetching blog # ${id}`);
   return axios.get(`https://oskarme.com/api/blogs/blog?id=${id}`); 
}

export const useBlogData = (id) => {
    return useQuery(['blog', id] , () => fetchBlog(id))
}


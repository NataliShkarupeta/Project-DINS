import axios from 'axios';
import { BASIC_URL } from './basicUrl';

const URL = `${BASIC_URL}/blog`; 

export const getAllPosts = async () => {
  try {
    const { data } = await axios.get(URL);

    const sortDate = data.data.result.map(obj => ({
      ...obj,
      createdAt: Date.parse(obj.createdAt),
    }));
    const sortPosts = [...sortDate].sort((a, b) => b.createdAt - a.createdAt);

    return sortPosts;
  } catch (error) {
    return error.massage;
  }
};

export const getPostById = async id => {
  try {
    const { data } = await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    return error.massage;
  }
};

export const changePost = async (id, descriptions) => {
  try {
    const { data } = await axios.patch(`${URL}/${id._id}`, { descriptions });
    return data.data.result;
  } catch (error) {
    return error.massage;
  }
};

export const deletePost= async (id) =>{
  try {
    await axios.delete(`${URL}/${id._id}`);
  } catch (error) {
    return error.massage
  }
}

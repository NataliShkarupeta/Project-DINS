import axios from 'axios';
import { BASIC_URL } from './basicUrl';
 
export const URLPIC = `${BASIC_URL}/pictures`;


export const sendOrder = async order => {
  try {
    const { data } = await axios.post(`${URLPIC}/order`, order);
    return data;
  } catch (error) {
    return error.massage;
  }
};

export const changeInfoPicture = async (id, obj) => {
  try {
    const { data } = await axios.patch(`${URLPIC}/${id._id}`, obj);
    return data.data.result;
  } catch (error) {
    return error.massage;
  }
};

export const getAllPictures = async (limit, skip) => {
  try {
    const { data } = await axios.get(`${URLPIC}?limit=${limit}&skip=${skip}`);

    const sortDate = data.data.result.map(obj => ({
      ...obj,
      createdAt: Date.parse(obj.createdAt),
    }));
    const sortPictures = [...sortDate].sort(
      (a, b) => b.createdAt - a.createdAt
    );

    return sortPictures;

  } catch (error) {
    return error.massage;
  }
};

export const getPictureById = async id => {
  try {
    const { data } = await axios.get(`${URLPIC}/${id}`);
    return data;
  } catch (error) {
    return error.massage;
  }
};

export const getInStockPictures = async () => {
  try {
    const { data } = await axios.get(`${URLPIC}/inStock`);

    const sortDate = data.data.result.map(obj => ({
      ...obj,
      createdAt: Date.parse(obj.createdAt),
    }));
    const sortPictures = [...sortDate].sort(
      (a, b) => b.createdAt - a.createdAt
    );

    return sortPictures;
  } catch (error) {
    return error.massage;
  }
};
export const getPlacePictures = async spot => {
  const req = {
    spot,
  };

  try {
    const { data } = await axios.post(`${URLPIC}/place`, req);

    const sortDate = data.data.result.map(obj => ({
      ...obj,
      createdAt: Date.parse(obj.createdAt),
    }));
    const sortPictures = [...sortDate].sort(
      (a, b) => b.createdAt - a.createdAt
    );
    console.log(sortPictures);
    return sortPictures;
  } catch (error) {
    return error.massage;
  }
};
export const deletePicture = async id => {
  try {
    await axios.delete(`${URLPIC}/${id._id}`);
  } catch (error) {
    return error.massage;
  }
};

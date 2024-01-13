import axios from 'axios';
export const URLPIC = 'http://localhost:3001/pictures';

export const getAllPictures = async () => {
  try {
    const { data } = await axios.get(URLPIC);

    const sortDate = data.data.result.map(obj => ({
      ...obj,
      createdAt: Date.parse(obj.createdAt),
    }));
    // console.log(sortDate);
    const sortPictures = [...sortDate].sort(
      (a, b) => b.createdAt - a.createdAt
    );

    return sortPictures;
    // return data.data.result;
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
    console.log(sortPictures)
    return sortPictures;
  } catch (error) {
    return error.massage;
  }
};

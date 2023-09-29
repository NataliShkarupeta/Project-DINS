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
    const sortPictures = [...sortDate].sort((a, b) => b.createdAt - a.createdAt);

    return sortPictures;
  } catch (error) {
    return error.massage;
  }
};

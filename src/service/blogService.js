import axios from 'axios';

const URL = 'http://localhost:3001/blog';

export const getAllPosts = async () => {
  try {
    const {data} = await axios.get(URL);
    console.log(data.data.result);
    return data.data.result;
  } catch (error) {
    return error.massage;
  }
};

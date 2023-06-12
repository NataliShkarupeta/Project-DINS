import axios from 'axios';

const URL = 'http://localhost:3001/blog';

export const getAllPosts = async () => {
  try {
    const { data } = await axios.get(URL);

    const sortDate = data.data.result.map(obj => ({
      ...obj,
      createdAt: Date.parse(obj.createdAt),
    }));
     console.log(sortDate);
    const sortPosts = [...sortDate].sort((a, b) => b.createdAt - a.createdAt);
    
    return sortPosts;
  } catch (error) {
    return error.massage;
  }
};

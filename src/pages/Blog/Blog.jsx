import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from 'service/blogService';
import { CommonButton } from 'components/commonButton/button';
import { Li, Title } from './Blog.styled';

const BlogPage = () => {
  //  don't forgot create a button for delete && update && show one for repost post through additional the ask-password window //
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(res => setPosts(res))
  }, []);
  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      <ul>
        {posts.map(({ title, descriptions, _id, createdAt }) => (
          <Li key={_id}>
            <Title>{title} </Title>
            <div>{createdAt}</div>
            <br />
            <span>{descriptions}</span>
            <CommonButton text="Читати"></CommonButton>
          </Li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;

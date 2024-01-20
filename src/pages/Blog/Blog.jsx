import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { memo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllPosts } from 'service/blogService';
import { CommonButton } from 'components/common/commonButton/button';
import {
  Li,
  Title,
  Date,
  Text,
  WrapTitleAndDate,
  BlockButton,
  WrapForTooltip,
  Section,
} from './Blog.styled';
import { RxFileText } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';
import { normalizedDate } from './normalizeDate';
import { Tooltip } from 'react-tooltip';
import { useFeatureStore } from 'components/Features/Features/store';
import { DefaultComponent } from 'components/common/default/defaultComponent';
import { NavLinkButton } from 'pages/ListPictures/ListPictures.styled';
import { ThreeDots } from 'react-loader-spinner';
import { Wrap } from 'components/common/default/defaultComponent.styled';
import { useMedia } from 'react-use';
import { Blog } from 'components/Layout/Layout.styled';

// const styleDefoult = {
//   height: '400px',
// };

const BlogPage = memo(() => {
  //  don't forgot create a button for delete && update && show one for repost post through additional the ask-password window //
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);
  const [t] = useTranslation();
  const location = useLocation();
  const leng = useFeatureStore(state => state.leng);

  const setSelectedMenu = useFeatureStore(store => store.setSelectedMenu);
const isMobile = useMedia('(max-width: 541px)');

  useEffect(() => {
    setSelectedMenu(false);
  }, [setSelectedMenu]);

  useEffect(() => {
    setLoading(true);
    getAllPosts()
      .then(res => setPosts(res))
      .finally(() => setLoading(false));
  }, []);

  const styles = {
    backgroundColor: 'transparent',
    padding: '4px 4px',
    border: 'none',
    display: 'flex',
    jastifyContext: 'center',
  };

  if (!posts) {
    return (
      <>
        <NavLinkButton to={location.state?.from ?? '/'}>
      
          <CommonButton text={t('button.back')} />
        </NavLinkButton>
        <DefaultComponent>
          <ThreeDots />
          <p>{t('defoultText')}</p>
        </DefaultComponent>
      </>
    );
  }

  return (
    <>
      {!isMobile && (
        <Link to={'/'}>
          <ButtonHome />
        </Link>
      )}

      {loading && (
        <Wrap>
          <ThreeDots />
        </Wrap>
      )}
      {isMobile && <Blog>{t('blog')}</Blog>}
      <Section>
        <ul>
          {posts &&
            Object.values(posts).map(
              ({
                title,
                descriptions,
                _id,
                createdAt,
                titleEn,
                descriptionsEn,
              }) => (
                <div key={_id}>
                  <Li>
                    <WrapTitleAndDate>
                      <Title>{leng === 'ua' ? title : titleEn} </Title>
                      <Date>{normalizedDate(createdAt)}</Date>
                    </WrapTitleAndDate>
                    <Text>{leng === 'ua' ? descriptions : descriptionsEn}</Text>
                    <BlockButton>
                      <WrapForTooltip>
                        <p
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={t(
                            'button.commonButton.showMore'
                          )}
                        >
                          <Link to={`/blog/${_id}`} state={{ from: location }}>
                            <CommonButton
                              styled={styles}
                              text={
                                isMobile ? (
                                  <RxFileText size={'16px'} color="white" />
                                ) : (
                                  <RxFileText size={'16px'} color="black" />
                                )
                              }
                            ></CommonButton>
                          </Link>
                        </p>
                        <Tooltip id="my-tooltip" />
                      </WrapForTooltip>
                    </BlockButton>
                  </Li>
                </div>
              )
            )}
        </ul>
      </Section>
    </>
  );
});

export default BlogPage;

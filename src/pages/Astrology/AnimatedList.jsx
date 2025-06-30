import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ListWrapper } from './Astrology.styled';
import { useFeatureStore } from 'components/Features/Features/store';
import media from 'styles/media';

const Sentence = styled(motion.li)`
  list-style: none;
  margin-bottom: 5px;
  font-size: 1rem;
  line-height: 1;
  @media ${media.m} {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  @media ${media.l} {
    font-size: 1.1rem;
  }
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 5px;
  background: linear-gradient(to right, #c036d6, #570587);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
  font-size: 0.9rem;
  @media ${media.m} {
    font-size: 1rem;
    margin-right: 8px;
  }
  @media ${media.l} {
    font-size: 1.1rem;
    margin-right: 8px;
  }
  @media ${media.xl} {
    font-size: 1.2rem;
  }
`;

const sentences = [
  ' - є відчуття що Ви "застрягли",',
  ' - дуже хочеться покращити якусь сферу життя і ніяк не виходе/або не знаєте як,',
  ' - наче все добре, але якось не цікаво, нудно,',
  ' - нема розуміння хто Ви і навіщо,',
  ' - хочеться у відносини, але ніяк не складається.',
];

const sentencesEn = [
  ' - there is a feeling that you are "stuck"',
  ` - you really want to improve some area of ​​your life and can't seem to get it done/or you don't know how`,
  ` - 'everything seems fine, but somehow it's not interesting, it's boring'`,
  ' - there is no understanding of who you are and why',
  ` - 'I want a relationship, but it just doesn't work out',`,
];

const AnimatedList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const leng = useFeatureStore(state => state.leng);

  return (
    <ListWrapper ref={ref}>
      {(leng === 'ua' ? sentences : sentencesEn).map((sentence, index) => (
        <Sentence
          key={index}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: index * 0.5 },
            },
            hidden: {},
          }}
        >
          {sentence.split(' ').map((word, i) => (
            <Word
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {word}
            </Word>
          ))}
        </Sentence>
      ))}
    </ListWrapper>
  );
};

export default AnimatedList;

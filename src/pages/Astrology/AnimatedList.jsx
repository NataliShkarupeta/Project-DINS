import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ListWrapper = styled.div`
  margin: 20px auto;
  max-width: 700px;
`;

const Sentence = styled(motion.li)`
  list-style: none;
  font-size: 1.6rem;
  margin-bottom: 15px;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 8px;
  background: linear-gradient(to right, #e14ef8, #570587);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

const sentences = [
  'є відчуття що Ви "застрягли"',
  'дуже хочеться покращити якусь сферу життя і ніяк не виходе/або не знаєте як',
  'наче все добре, але якось не цікаво, нудно',
  'нема розуміння хто Ви і навіщо',
  'хочеться у відносини, але ніяк не складається',
];

const AnimatedList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <ListWrapper ref={ref}>
      {sentences.map((sentence, index) => (
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

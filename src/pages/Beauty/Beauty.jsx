import React, { useState } from 'react';
import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link } from 'react-router-dom';
import {
  ContainerForSlider,
  Row,
  Img,
  WrapBottonTurn,
  ButtonTurn,
} from './Beauty.styled';
import { motion } from 'framer-motion';
import l2 from '../../images/beauty/lash2 (1).jpg';
import l3 from '../../images/beauty/lash3 (1).jpg';
import l4 from '../../images/beauty/lash4 (1).jpg';
import l6 from '../../images/beauty/lash6 (1).jpg';
import l7 from '../../images/beauty/lash7 (1).jpg';
import l8 from '../../images/beauty/lash8 (1).jpg';
import l9 from '../../images/beauty/lash9 (1).jpg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const styles = {
  position: 'absolute',
  // width: '60vw',
  // height: '90vh',
  width: '50vw',
  height: '75vh',
  overflow: 'hidden',
  // background: '#FFF',
  borderRadius: '30px',
  top: '-37.5vh',
};

const BeautyPage = () => {
  const [position, positionSet] = useState(0);
  // const location = useLocation();
  const photoArr = [l4, l2, l3,l6,l7,l8,l9];

  const onRight = () => {
    if (position < photoArr.length - 1) {
      positionSet(position + 1);
    }
  };
  const onLeft = () => {
    if (position > 0) {
      positionSet(position - 1);
    }
  };

  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      <ContainerForSlider>
        <WrapBottonTurn>
          <ButtonTurn onClick={onRight}>
            <BsChevronLeft />
          </ButtonTurn>
          <ButtonTurn onClick={onLeft}>
            <BsChevronRight />
          </ButtonTurn>
        </WrapBottonTurn>
        <Row>
          {photoArr.map((photo, index) => (
            <motion.div
              style={styles}
              key={index}
              initial={{ scale: 0, rotation: -180 }}
              animate={{
                rotate: 0,
                left: `${(index - position) * 60 - 26}vw`,
                scale: index === position ? 1 : 0.8,
              }}
              transition={{
                duration: 1,
                type: 'tween',
                // stiffness: 150,
                // damping: 35,
              }}
            >
              <Img src={photo} alt="" />
            </motion.div>
          ))}
        </Row>
      </ContainerForSlider>
    </>
  );
};

export default BeautyPage;

import { useTranslation } from 'react-i18next';
import {
  SectionMain,
  SectionSecond,
  WrapSections,
  H2,
  Img2,
  WrapPhoto,
} from './SocialProject.styled';

const SocialProject = () => {
  const [t] = useTranslation();
  return (
    <WrapSections>
      <SectionMain>
        <H2>{t('paintin_page.paintinTitle1')} </H2>
        <WrapPhoto>
          {/* <img
              src={require('../../images/bgSocialProject/bg1 (1).jpg')}
              alt=""
               width="240"
            /> */}
          {/* <Img2
            src={require('../../images/bgSocialProject/bg2 (1).jpg')}
            alt=""
            width="240"
          /> */}
          {/* <img
            src={require('../../images/bgSocialProject/bg3 (1).jpg')}
            alt=""
            width="240"
          /> */}
          {/* <img
            src={require('../../images/bgSocialProject/bg4 (1).jpg')}
            alt=""
            width="240"
          /> */}
          <Img2
            src={require('../../images/bgSocialProject/bg5 (1).jpg')}
            alt=""
            width="240"
            height="240"
          />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            consequuntur quisquam quia beatae dignissimos! Ipsam, dignissimos
            tenetur ea corrupti, consequuntur labore esse, quo consequatur sit
            commodi deleniti velit nostrum omnis.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            distinctio numquam accusamus excepturi dolorum, temporibus nesciunt
            facere eveniet quos ullam sint repudiandae cum quod harum vel. Autem
            tempore quibusdam quos?
          </div>
          <img
            src={require('../../images/bgSocialProject/bg6 (1).jpg')}
            alt=""
            width="240"
          />
          {/* <img
            src={require('../../images/bgSocialProject/bg8 (1).jpg')}
            alt=""
            width="240"
          /> */}
        </WrapPhoto>
      </SectionMain>
      <SectionSecond>
        <p>{t('paintin_page.paintinTitle2')}</p>
      </SectionSecond>
    </WrapSections>
  );
};

export default SocialProject;

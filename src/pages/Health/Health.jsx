// import { ButtonHome } from 'components/ButtonHome/ButtonHome';
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
// import {
//   Title,
//   Text,
//   Propose,
//   WrapText,
//   Ul,
//   Li,
//   CardWrap,
//   InfoData,
//   H3,
//   Overlay,
//   OverlayText,
//   LinkForSite,
//   TwoColumns,
//   LeftColumn,
//   RightColumn,
//   InRightBlock,
//   Span,
//   P,
//   BlockCards,
// } from './Health.styled';
// import { FcRightDown2 } from 'react-icons/fc';

// import { data } from '../../herbsArray.js';
// import { diseases } from './disease';
// import { FeaturesTitle } from 'components/Features/Features/title';
// import { CommonСoldVisual } from 'components/Features/visual/visual';
// import { useFeatureStore } from 'components/Features/Features/store';


// const HealthPage = () => {
//   const [t] = useTranslation();
//   const inViewTitle = useFeatureStore(state => state.inViewTitle);
//   const setInViewTitle = useFeatureStore(state => state.setInViewTitle);
//   const setFullScreenFeature = useFeatureStore(
//     state => state.setFullScreenFeature
//   );
//   const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);

//   const viewFullScreenFeatureAndHiddenTitle = id => {
//     setInViewTitle(null);
//     setFullScreenFeature(null);
//   };

//   return (
//     <>
//       <Link to={'/'}>
//         <ButtonHome />
//       </Link>

//       <Title>{t(`herbalPage.word`)}</Title>
    
 
//       <CommonСoldVisual />

//       <section style={{ display: 'flex', gap: '30px' }}>
//         <div>
//           <WrapText>
//             <Text>{t(`herbalPage.title`)}</Text>
//             <br />
//             <Text>{t(`herbalPage.text.bread`)}</Text>
//             <br />
//             <Text>{t(`herbalPage.text.nature`)}</Text>
//             <br />
//             <Text>{t(`herbalPage.text.herbalTea`)}</Text>
//           </WrapText>
//         </div>
//         <div>
//           <Propose>
//             {t(`herbalPage.propose`)} <FcRightDown2 size={30} />
//           </Propose>
//           <BlockCards>
//             <Ul>
//               {data.map(({ title, image, about, description, siteFrom }) => (
//                 <Li key={title}>
//                   <CardWrap>
//                     <img src={image} alt="" width="370" />
//                     <Overlay>
//                       <OverlayText>
//                         {t(`${description}`)}
//                         <br />
//                         <a
//                           href={siteFrom}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <LinkForSite>
//                             {t(`herbalPage.siteFromInfo`)}
//                           </LinkForSite>
//                         </a>
//                       </OverlayText>
//                     </Overlay>
//                   </CardWrap>
//                   <InfoData>
//                     <H3>{t(`${title}`)}</H3>
//                     <P> {t(`${about}`)}</P>
//                   </InfoData>
//                 </Li>
//               ))}
//             </Ul>
//           </BlockCards>
//         </div>
//       </section>

//       <section
//       // style={{ position: `${fullScreenFeature ? 'sticky' : 'relative'}` }}
//       >
//         <Span>{t(`herbalPage.diseases.description`)}</Span>
//         <div>
//           {diseases.map(disease => (
//             <disease.visual id={disease.id} key={disease.id} />
//           ))}
//           {inViewTitle && (
//             <button
//               onClick={() => viewFullScreenFeatureAndHiddenTitle()}
//               style={{
//                 position: 'fixed',
//                 bottom: 26,
//                 left: '45%',
//                 translateX: '-50%',
//                 zIndex: 10,
//               }}
//             >
//               {t(`herbalPage.buttonclose`)}
//             </button>
//           )}
//           <TwoColumns>
//             <LeftColumn>
//               <ul>
//                 {diseases.map(({ title, id }) => (
//                   <li key={id}>
//                     <FeaturesTitle id={id}>{t(`${title}`)}</FeaturesTitle>
//                   </li>
//                 ))}
//               </ul>
//             </LeftColumn>
//             <RightColumn>
//               <InRightBlock
//                 style={{
//                   opacity: `${fullScreenFeature ? '0' : '100 '}`,
//                   transition: 'all 0.5s ease',
//                 }}
//               >
//                 {diseases.map(disease => (
//                   <disease.card id={disease.id} key={disease.id} />
//                 ))}
//               </InRightBlock>
//             </RightColumn>
//           </TwoColumns>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HealthPage;

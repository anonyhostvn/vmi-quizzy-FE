import styled, {keyframes} from 'styled-components';
import {fadeInLeft } from 'react-animations';

const headerAnimation = keyframes`${fadeInLeft}`;

export const HomePageWrapper = styled.div`
  #tsparticles {
    position: absolute;
    z-index: 1000;
    margin-top: 200px;
    width: 100%;
    height: calc(100% - 200px);
  }
  
  #header-home-page {
    animation: 3s ${headerAnimation}
  }
`;

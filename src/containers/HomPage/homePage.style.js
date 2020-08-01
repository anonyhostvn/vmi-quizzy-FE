import styled, {keyframes} from 'styled-components';
import {fadeInLeft, fadeInRight } from 'react-animations';

const headerAnimation = keyframes`${fadeInLeft}`;
const buttonAnimation = keyframes`${fadeInRight}`;

export const HomePageWrapper = styled.div`
  #tsparticles {
    position: absolute;
    z-index: 100;
    margin-top: 200px;
    width: 100%;
    height: calc(100% - 300px);
  }
  
  .header-home-page {
    animation: 5s ${headerAnimation}
  }
  
  .nav-button {
    animation: 2s ${buttonAnimation};
  }
  
  .main-content {
    position: absolute;
    z-index: 1000;
    line-height: 0;
    text-align: center;
    top: 600px;
    width: 100%;
    height: 200px;
  }
`;

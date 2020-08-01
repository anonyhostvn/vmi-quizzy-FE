import styled from 'styled-components';
import {Layout} from "antd";

export const AppWrapper = styled(Layout)`
  .logo {
    height: 31px;
    //background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    color: #ffffff;
    line-height: 25px;
    padding-left: 20px;
    font-size: 30px;
     display: block;
  }
  
  .logo:hover {
    cursor: pointer;
  }
 
`;

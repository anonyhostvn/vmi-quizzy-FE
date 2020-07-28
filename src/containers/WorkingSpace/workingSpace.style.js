import styled from 'styled-components';
import {Layout} from "antd";

export const WorkingSpaceWrapper = styled(Layout)`

  //background-color: #b6feff;

  .overview-place {
    position: fixed;
    //height: 90vh;
     ${props => `height: calc(100vh - 64px);`};
    left: 0; 
    overflow: auto;
  }
  
  &.ant-layout-sider-children {
    width: 100%;  
  }
  
  .ant-menu-inline-collapsed > .ant-menu-item {
    padding-left: 5px;
  }
  
  .ant-menu-inline-collapsed {
   width: 100%; 
  } 
  
  .question-space {
  display: flex;
  }
  
  .list-question {
    width : 70%;
  }
  
  .result-space {
    width: 30%;
  }
`;
import styled from 'styled-components';

export const ResultBoxWrapper = styled.div`
   position: fixed;
   width: inherit;
   top: 80px;
   right: 20px;
   
  .list-ques:hover {
    cursor: pointer;
    opacity: 1.5;
    transition: all 0.3s ease-out;
  }
  .list-ques {
    opacity: 0.5;
  }
  
  .ant-card-body-custom-selected {
    background-color: #1890ff;
    opacity: 0.8;
    transition: all 0.5s ease-out;
  }
  
  .ant-card-body-custom-right-ans {
    background-color: #8bc34a;
  }
  
  .ant-card-body-custom-wrong-ans {
    background-color: #f44336;
  }
  
  
`;

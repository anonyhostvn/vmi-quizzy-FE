import styled from 'styled-components';

export const SpecialButtonWrapper = styled.div`



    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    height: 100%;
    -webkit-font-smoothing: antialiased;
    font-size: 18px;
  
*, *:before, *:after {
  box-sizing: border-box;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
}

.icon-paperplane {
  font-size: 1em;
  color: #ffffff;
  margin-left: 1px;
  margin-top: 5px;
}

.contact-button {
  position: relative;
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
  -webkit-transform:translate3d(0,0,0);
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 1.2em;
  border: 2px solid #ffffff;
  border-radius: 4px;
  padding: 20px 60px 20px 55px;
  transition: 0.3s ease-in-out;

  span {
    text-transform: none;
    position: absolute;
    color: #EE283E;
    top: 30px;
    left: 30px;
    opacity: 0;
    transition: all 0s ease 0s;
  }

  &:hover {
    transition: 0.3s ease-in-out;
    border: 2px solid #ffffff;
    border-radius: 50px;
    background-color: #ffffff;

    &>span {
      opacity: 1;
      transition: all 0.25s ease-in-out 0.1s;
    }

    &:before {
      transition: 0.3s ease-in-out;
      background-color: #EE283E;
    }
  }


  &:before, &:after {
    content: "";
    position: absolute;
    top: -14px;
    left: -12px;
    width: 132px;
    height: 25px;
  }
  &:before {
    border: 2px solid #EE283E;
    background-color: #1F3944;
    transform: skew(-25deg);
    transition: 0.3s ease-in-out;
  }

  &:after {
    content: "Đã hoàn thiện";
    font-size: 0.45em;
    top: -2px;
    right: 0;
    color: #ffffff;
  }
  
}
`

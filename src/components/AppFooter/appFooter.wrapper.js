import styled from "styled-components";

export const AppFooterWrapper = styled.div`
.footer{
  background: #152F4F;
  color:white;
  margin: 0 !important;

  .header-text {
    color: #ffffff;
  }

  .links{
    ul {list-style-type: none;}
    li a{
      color: white;
      transition: color .2s;
      &:hover{
        text-decoration:none;
        color:#4180CB;
      }
    }
  }
  .about-company{
    i{font-size: 25px;}
    a{
      color:white;
      transition: color .2s;
      &:hover{color:#4180CB}
    }
  }
  .location{
    i{font-size: 18px;}
  }
  .copyright p{border-top:1px solid rgba(255,255,255,.1);}
}
`;
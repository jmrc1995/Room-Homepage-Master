import styled from "styled-components";



export const SlideImage = styled.img`
  display:block;
  width:100%;
  ${'' /* height:100%; */}
  object-fit: fill;
`;



export const ArticleStyle = styled.p`
  font-size: 48px;
  white-space: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  padding-bottom: 15px;
  @media(max-width: 1440px){
    font-size: 40px;
  }

  
`;

export const ArticleDesc = styled.p`

  line-height: 1.3;
  color: hsl(0, 0%, 63%);
  font-size: 16px;
  padding-bottom: 1rem;
  line-height: 22px;
`;

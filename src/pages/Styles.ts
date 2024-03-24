import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
`;

export const StyledMovieOuter = styled.div`
  :hover {
    cursor: pointer;
    font-size: 18px;
    img {
      height: 310px;
      width: 310px;
    }
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
  height: 350px;
  border-radius: 20px;
`;

export const StyledMovieInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
`;

export const StyledMovieInfo = styled.div`
  width: 100%;
`;

export const StyledMovieImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
`;

export const StyledMoviePage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  img {
    width: 350px;
    height: 350px;
    border-radius: 20px;
  }
`;

export const StyledReview = styled.p`
  background-color: #404b4b;
  padding: 12px;
  border-radius: 8px;
`;

export const StyledMovieExtraInfo = styled.div`
  padding: 20px 580px;
`;

import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  left: 0;
  right: 0;
  width: 98%;
  margin: 40px auto;

  padding: 25px 0;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: red; */

  /* margin: 10px 20px; */

  .btn {
    flex: 1;
    width: 17px;
    height: 17px;
    /* background-color: red; */
  }

  .btn-right {
    background-position: -296px -75px;
  }

  .btn-left {
    background-position: -260px -75px;
  }

  .btn-left:hover {
    cursor: pointer;
    background-position: -281px -75px;
  }

  .btn-right:hover {
    cursor: pointer;
    background-position: -317px -75px;
  }
`;

export const CarouseWrapper = styled.div`
  width: 680px;

  /* background-color: red; */
`;

export const CarousePage = styled.div`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
`;

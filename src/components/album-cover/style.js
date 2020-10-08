import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  width: ${(props) => props.width + "px"};
  background-position: 0px 0px;

  .image {
    position: relative;
  }

  .image_cover {
    width: ${(props) => props.width + "px"};
    background-position: 0px -570px;
  }

  .title {
    font-size: 12px;
    color: black;
  }
  .artist {
    font-size: 12px;
    color: #666666;
  }
`;

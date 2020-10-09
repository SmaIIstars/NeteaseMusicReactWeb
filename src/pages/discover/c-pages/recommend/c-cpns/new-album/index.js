import React, { memo, useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";

import { NewAlbumWrapper, CarouseWrapper, CarousePage } from "./style";
import { NEW_ALBUM_LIMIT } from "@/pages/discover/c-pages/recommend/store/constants.js";
import { getNewAlbumAction } from "../../store/actionCreators";

import SSThemeHeaderRCM from "@/components/theme-header-rcm";
import SSAlbumCover from "@/components/album-cover";
export default memo(function SSNewAlbum() {
  // state

  // redux hooks
  const { newAlbums } = useSelector((state) => {
    return { newAlbums: state.getIn(["recommend", "newAlbums"]) };
  });
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch]);

  // 业务逻辑
  const albumRef = createRef();
  const getPageList = () => {
    let newPageList = [];
    for (let i = 0; i < NEW_ALBUM_LIMIT / 5; i++) {
      newPageList.push(i);
    }
    return newPageList;
  };
  const pageList = getPageList();

  return (
    <div>
      <SSThemeHeaderRCM title={"新碟上架"} />

      <NewAlbumWrapper>
        <i
          className="btn btn-left sprite_02"
          onClick={(e) => albumRef.current.prev()}
        ></i>
        <CarouseWrapper>
          <Carousel dots={false} ref={albumRef}>
            {pageList.map((item) => {
              return (
                <CarousePage key={item}>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return <SSAlbumCover key={iten.id} info={iten} />;
                  })}
                </CarousePage>
              );
            })}
          </Carousel>
        </CarouseWrapper>
        <i
          className="btn btn-right sprite_02"
          onClick={(e) => albumRef.current.next()}
        ></i>
      </NewAlbumWrapper>
      {/* {newAlbums.map((item, index) => {
          return <div key={item.id}>{item.name}</div>;
        })} */}
    </div>
  );
});

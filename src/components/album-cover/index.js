import React, { memo } from "react";

import { AlbumCoverWrapper } from "./style";

import { getSizeImage } from "@/utils/format";

export default memo(function SSAlbumCover(props) {
  const { info, size = 100, width = 118 } = props;

  return (
    <AlbumCoverWrapper width={width} size={size}>
      {/* 图片 */}
      <div className="image">
        <img src={getSizeImage(info.picUrl, size, size)} alt="暂无图片" />
        <i className="image_cover"></i>
      </div>

      {/* 标题 */}
      <div className="title text-nowrap">{info.name}</div>

      {/* 作者 */}
      <div className="artist text-nowrap">{info.artist.name}</div>
    </AlbumCoverWrapper>
  );
});

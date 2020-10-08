import React, { memo } from "react";

import { SongCoverWrapper, ImgBottom } from "./style";

import { getSizeImage, getPlayCount } from "@/utils/format";

export default memo(function SSSongCover(props) {
  const { info } = props;

  return (
    <SongCoverWrapper>
      {/* 图片 */}
      <div className="pic">
        <img src={getSizeImage(info.picUrl, 140, 140)} alt="加载失败" />
        <ImgBottom>
          <i className="icon1"></i>
          <span className="number">{getPlayCount(info.playCount)}</span>
          <i className="icon2"></i>
        </ImgBottom>
      </div>

      {/* 标题 */}
      <div className="text-nowrap song-title">{info.name}</div>

      {/* 来源 */}
      <div className="text-nowrap song-sour">by {info.copywriter}</div>
    </SongCoverWrapper>
  );
});

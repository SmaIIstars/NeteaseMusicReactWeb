import React, { memo } from "react";

import { getSizeImage } from "../../utils/format";

import { Title, TitleLeft, TitleRight, RankingList } from "./style";

export default memo(function SSTopRanking(props) {
  // state
  const { info = {}, songs = [] } = props;

  // console.log(songs);
  // console.log(info.list);
  // 其他业务逻辑

  return (
    <>
      {/* 头部 */}
      <Title>
        {/* 左侧 */}
        <TitleLeft>
          <img
            src={getSizeImage(info.coverImgUrl, 85, 85)}
            alt=""
            className="img"
          />
        </TitleLeft>

        {/* 右侧 */}
        <TitleRight>
          <div className="title">{info.name}</div>
          <i className="icon1 sprite_02"></i>
          <i className="icon2 sprite_02"></i>
        </TitleRight>
      </Title>

      {/* 列表 */}
      <RankingList>
        <ul>
          {songs.map((item, index) => {
            return (
              <div key={item.id} className="song-item">
                <i className="index">{index + 1}</i>
                <li className="song-name text-nowrap">{item.name}</li>
                <div className="operation">
                  <button className="sprite_02 play"></button>
                  <button className="sprite_icon2 add"></button>
                  <button className="sprite_02 collation"></button>
                </div>
              </div>
            );
          })}
          <div>
            <a href="#/" className="go-all">
              查看全部&gt;
            </a>
          </div>
        </ul>
      </RankingList>
    </>
  );
});

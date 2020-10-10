import React, { memo } from "react";

import {
  AppPlayBarWrapper,
  ContentWrapper,
  ContentLeft,
  ContentMid,
  ContentRight,
} from "./style";

import { Slider } from "antd";

export default memo(function SSAppPlayBar() {
  return (
    <AppPlayBarWrapper className="sprite_playbar">
      <ContentWrapper className="wrap-v2">
        <ContentLeft>
          <button className="sprite_playbar pre"></button>
          <button className="sprite_playbar play"></button>
          <button className="sprite_playbar next"></button>
        </ContentLeft>
        <ContentMid>
          <div className="mid-left">
            <a href="#/">
              <img
                src="https://p2.music.126.net/INyU1yeXmAdILY8_rDVOJQ==/109951165342785777.jpg?param=34y34"
                alt=""
              />
            </a>
          </div>
          <div className="mid-right">
            <div className="mid-mid-up">
              <span className="song-name">SongName</span>
              <a href="#/" className="mv sprite_playbar">
                {" "}
              </a>
              <span className="singer">快捷键</span>
              <a href="#/" className="share sprite_playbar">
                {" "}
              </a>
            </div>
            <div className="mid-mid-down">
              <div className="slider">
                <Slider defaultValue={30} />
              </div>
              <div className="time">
                <span className="now-time">00:38</span>
                <span className="div">/</span>
                <span className="total-time">04:21</span>
              </div>
            </div>
          </div>
        </ContentMid>
        <ContentRight>
          <button className="btn icon1 sprite_playbar"></button>
          <button className="btn icon2 sprite_playbar"></button>
          <span className="btn icon3 sprite_playbar"></span>
          <button className="btn icon4 sprite_playbar"></button>
          <button className="btn icon5 sprite_playbar"></button>
          <button className="btn icon6 sprite_playbar"></button>
        </ContentRight>
      </ContentWrapper>
    </AppPlayBarWrapper>
  );
});

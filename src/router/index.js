import { Redirect } from "react-router-dom";
import React from "react";

import SSDiscover from "../pages/discover";
import SSAlbum from "../pages/discover/c-pages/album";
import SSArtist from "../pages/discover/c-pages/artist";
import SSDjRadio from "../pages/discover/c-pages/djradio";
import SSRanking from "../pages/discover/c-pages/ranking";
import SSRecommend from "../pages/discover/c-pages/recommend";
import SSSongs from "../pages/discover/c-pages/songs";

import SSFriend from "../pages/friend";
import SSMine from "../pages/mine";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: SSDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: SSRecommend,
      },
      {
        path: "/discover/ranking",
        component: SSRanking,
      },
      {
        path: "/discover/songs",
        component: SSSongs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: SSDjRadio,
      },
      {
        path: "/discover/artist",
        component: SSArtist,
      },
      {
        path: "/discover/album",
        component: SSAlbum,
      },
    ],
  },
  {
    path: "/mine",
    component: SSMine,
  },
  {
    path: "/friend",
    component: SSFriend,
  },
];

export default routes;

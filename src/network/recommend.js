import request from "./request";

export function getTopBanners() {
  return request({
    url: "banner",
  });
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  });
}

export function getTopLists() {
  return request({
    url: "/toplist",
  });
}

export function getTopListDetails(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

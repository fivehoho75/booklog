import axios from 'axios';

export const getBookInfo = (target: string, query: string) =>
  axios.get('https://dapi.kakao.com/v3/search/book', {
    headers: {
      Authorization: `KakaoAK ${process.env.API_KEY}`,
    },
    params: {
      target,
      query,
    },
  });

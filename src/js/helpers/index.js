import errImg from '../../images/error.jpg';
import { requestAdsByCategory, requestRefreshUserCredentials } from './API';
export {
  requestUserRegistration,
  requestUserLogin,
  requestUserLogout,
  requestCategories,
  requestRefreshUserCredentials,
  requestUserInfo,
  requestAdsPagination,
  requestFindAds,
  requestAddToFavorites,
  requestRemoveFromFavorites,
  requestAdsByCategory,
  requestPostProduct,
  requestEditProduct,
  requestRemoveProduct,
  requestUserFavorites,
  requestUserOwn,
  requestUserById,
} from './API';
export let categories = [];
export let ads = {};
export const recordToAds = obj => {
  ads = obj;
};
export const recordToCategories = arr => {
  categories = arr;
};
const normalizeCategoryForApi = category => {
  return category
    .split(' ')
    .map((word, index) =>
      index === 0 ? word : word.slice(0, 1).toUpperCase() + word.slice(1),
    )
    .join('');
};
export const categoryRequestHandler = async category => {
  const normalizedCategory = normalizeCategoryForApi(category);
  const response = await requestAdsByCategory({ category: normalizedCategory });
  const obj = {};
  obj[normalizedCategory] = response;
  recordToAds(obj);
};
export const isInCategories = query => {
  if (categories.find(item => item === query) !== undefined) return true;
  return false;
};
export function getUserToken() {
  const getToken = sessionStorage.getItem('accessToken');
  return getToken;
}
export const refreshTokenRequest = async () => {
  if (sessionStorage.getItem('sid') && sessionStorage.getItem('refreshToken')) {
    const obj = await requestRefreshUserCredentials({
      refreshToken: sessionStorage.getItem('refreshToken'),
      sid: sessionStorage.getItem('sid'),
    });
    console.log(obj);
    sessionStorage.setItem('accessToken', obj.newAccessToken);
    sessionStorage.setItem('refreshToken', obj.newRefreshToken);
    sessionStorage.setItem('sid', obj.newSid);
  }
};
export const replaceImgOnError = () => {
  document.querySelectorAll('img').forEach(repalaceHandler);
};
const repalaceHandler = item => {
  item.onerror = () => {
    item.src = errImg;
  };
};

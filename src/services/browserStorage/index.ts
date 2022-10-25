const ACCESS_TOKEN = 'AccessToken';
const getKey = (key: string) => `${process.env.NODE_ENV === 'production' ? 'production' : 'development'}${key}`;

type FixMeLater = any

const BrowserStorageService: FixMeLater = {
  // ACCESS TOKEN
  getAccessToken() {
    return localStorage.getItem(getKey(ACCESS_TOKEN));
  },
  setAccessToken(accessToken: string) {
    localStorage.setItem(getKey(ACCESS_TOKEN), accessToken);
  },
  clearAccessToken() {
    localStorage.removeItem(getKey(ACCESS_TOKEN));
  },
};

export default BrowserStorageService;

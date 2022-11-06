import {Login, User} from '../../models';

// AUTH
type LoginRequest = {
  username: string;
  password: string;
};
type LoginResponse = {
  data: Login;
}
// USER
type GetUserResponse = {
  data: User;
}

const API = {
  loginCall: (payload: LoginRequest) => new Promise((res, rej) => {
    const gotError = Math.random() < 0.1;
    if (gotError) {
      return setTimeout(() => rej(new Error('couldn\'t login. try again later')), 2000);
    }

    const data: Login = {
      accessToken: 'jwt',
      user: {
        name: 'Ridvan',
        email: 'ridvansumset@gmail.com'
      },
    };

    return setTimeout(() => res({data} as LoginResponse), 2000);
  }),
  getUserCall: (token: string) => new Promise((res, rej) => {
    const gotError = Math.random() < 0.1;
    if (gotError) {
      return setTimeout(() => rej(new Error('Session expired')), 2000);
    }

    const data: User = {
      name: 'Ridvan',
      email: 'ridvansumset@gmail.com',
    };

    return setTimeout(() => res({data} as GetUserResponse), 2000);
  }),
};

export type {
  LoginRequest,
  LoginResponse,
  GetUserResponse,
};

export default API;

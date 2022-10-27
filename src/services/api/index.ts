import {Login, User} from '../../models';

type LoginResponse = {
  data: Login;
}
type GetUserResponse = {
  data: User;
}

const API = {
  loginCall: (payload: void) => new Promise((res, rej) => {
    console.log('loginCall payload', payload);

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
  getUserCall: (token: void) => new Promise((res, rej) => {
    console.log('getUserCall payload', token);

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
  LoginResponse,
  GetUserResponse,
};

export default API;

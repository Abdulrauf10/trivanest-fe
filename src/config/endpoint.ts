const BASE_URL = process.env.BASE_URL;
const VERSION = 'v1';

export const AUTH = {
  REGISTER: `${BASE_URL}/${VERSION}/users/register`,
  LOGIN: `${BASE_URL}/${VERSION}/auth/login`,
  USERS: `${BASE_URL}/${VERSION}/users`,
  ME: `${BASE_URL}/${VERSION}/auth/me`,
};

import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0Config = {
  AUTH0_SECRET: process.env.AUTH0_SECRET,
  AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
  AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_SECRET: process.env.AUTH0_SECRET,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET
};


async function getAuth0() {
  const res = auth0Config;
  const local = '';

  //https://eloquent-visvesvaraya-ca7005.netlify.app/

  return initAuth0({
    secret: res.AUTH0_SECRET,
    issuerBaseURL: res.AUTH0_ISSUER_BASE_URL,
    baseURL: res.AUTH0_BASE_URL,
    clientID: res.AUTH0_CLIENT_ID,
    clientSecret: res.AUTH0_CLIENT_SECRET,
  });
}

export default getAuth0;

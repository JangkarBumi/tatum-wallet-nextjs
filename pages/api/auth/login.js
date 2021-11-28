import getAuth0 from '../../../utils/auth0';

export default async function login(req, res) {
  const auth0 = await getAuth0();

  try {
    await auth0.handleLogin(req, res, {
      authorizationParams: {
        screen_hint: 'login',
      },
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}

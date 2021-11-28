import getAuth0 from '../../../utils/auth0';

export default async function callback(req, res) {
  const auth0 = await getAuth0();
  try {
    await auth0.handleCallback(req, res, {
      redirectTo: '/',
    });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}

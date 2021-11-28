import getAuth0 from '../../../utils/auth0';

export default async function me(req, res) {
  const auth0 = await getAuth0();

  try {
    await auth0.handleProfile(req, res);
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}

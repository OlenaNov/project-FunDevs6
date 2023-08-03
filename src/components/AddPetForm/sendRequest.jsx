import instance from 'api/auth-api';

const sendRequest = async (endpoint, objToSend) => {
  try {
    await instance.postForm(endpoint, objToSend);
  } catch (err) {
    console.log(err);
  }
  return;
};
export default sendRequest;

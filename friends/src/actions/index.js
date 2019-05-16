export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export function login() {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: "This is the token payload"
    }
  };
}

export function selectUser() {
  return (state) => {
    return state.user;
  };
}

export function selectToken() {
  return (state) => {
    return state.user.token;
  };
}

export const authenticate = (token, user) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(token, JSON.stringify(user));
  }
};

export const signout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    console.log('getting token');
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

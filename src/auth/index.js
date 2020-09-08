export const login = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => {
    return response.json();
  });
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const authenticate = (jwt, next) => {
  if (typeof window != undefined) {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    next();
  }
};

export const fetchProfile = (userId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/getUser/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + isAuthenticated().token,
    },
  }).then((res) => {
    return res.json();
  });
};

export const signout = (next) => {
  const token = isAuthenticated().token;
  if (typeof window !== "undefined") localStorage.removeItem("jwt");
  next();
  return fetch(`${process.env.REACT_APP_API_URL}/user/signout`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then()
    .catch((err) => {
      console.log("Error", err);
    });
};

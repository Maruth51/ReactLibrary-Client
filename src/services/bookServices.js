export const getBooks = () => {
  return new Promise((resolve, reject) => {
    fetch("https://w1h47.sse.codesandbox.io/book")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else reject("request failed");
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        console.log(err);
        reject("Network error");
      });
  });
};

export const getCart = userId => {
  return new Promise((resolve, reject) => {
    fetch(`https://w1h47.sse.codesandbox.io/user/cart/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt")
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else reject("request failed");
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        console.log(err);
        reject("Network error");
      });
  });
};
export const addBookToCart = (bookId, userId) => {
  //Authorization: localStorage.getItem("jwt")
  const data = {
    bookId,
    userId
  };
  return new Promise((resolve, reject) => {
    fetch(`https://w1h47.sse.codesandbox.io/user/addcart`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt")
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          reject(401);
        } else {
          reject(400);
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(500);
      });
  });
};

export const removeBookFromCart = async (userId, bookId) => {
  try {
    const data = {
      userId,
      bookId
    };
    let url = "https://w1h47.sse.codesandbox.io/user/cart";
    let config = {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt")
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(url, config);
    return await response.json();
  } catch (err) {
    return "Request Failed";
  }
};

export const addBookToUser = async userId => {
  try {
    const data = {
      userId
    };
    let url = "https://w1h47.sse.codesandbox.io/user/book";
    let config = {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt")
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(url, config);
    return await response.json();
  } catch (err) {
    return "Request Failed";
  }
};

export const getUserBooks = async () => {
  try {
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt")
      }
    };
    let url = "https://w1h47.sse.codesandbox.io/user/books";
    const response = await fetch(url, config);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const returnBook = async bookId => {
  try {
    const data = {
      bookId
    };
    let url = "https://w1h47.sse.codesandbox.io/user/returnbook";
    let config = {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt")
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(url, config);
    return await response.json();
  } catch (err) {}
};

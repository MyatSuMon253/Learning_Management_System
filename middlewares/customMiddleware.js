app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

let user = {
  name: "John Doe",
  isAdmin: false,
  isLogin: true,
};

const isLogin = (req, res, next) => {
  if (user.isLogin) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

const isAdmin = (req, res, next) => {
  if (user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized, You are not admin",
    });
  }
};

app.use(isLogin, isAdmin);

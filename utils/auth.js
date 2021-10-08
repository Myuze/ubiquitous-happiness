const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/register');
  } else {
    next();
  }
};

module.exports = withAuth;

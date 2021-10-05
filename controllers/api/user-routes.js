const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user-
router.post('/register', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      twitch_link: req.body.twitch,
      youtube_link: req.body.youtube,
      bio: req.body.bio

    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) { 
    console.log(err);
    res.status(500).json(err);
  }
});

// gets one user by id
router.get('/:id', async (req, res) => {
  const { user } = req.session;

  // if (user){
    const findUser = await User.findOne({
      where: {
          id: req.params.id,
          include: {
            model: 'User',
            attributes: [ 'id', 'username' ]
          }
      }
  }).catch((err) => { 
    res.json(err);
  });

  res.render('profile', { findUser } );
  // }

  // else if (!user){
  // const findUser = await User.findOne({
  //     where: {
  //         id: req.params.id
  //     }
  // }).catch((err) => { 
  //   res.json(err);
  // });

  // const serialized = findUser.get({ plain: true });
  // res.render('profile', serialized);
// }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPass(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

    });
    res
      .status(200)
      .json({ user: dbUserData, message: 'You are now logged in!' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;

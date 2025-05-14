import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home', {
    siteTitle: 'Home Page',
    bodyClass: 'home',
  });
});

export default router;
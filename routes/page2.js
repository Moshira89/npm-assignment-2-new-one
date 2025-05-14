import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/page', {
    siteTitle: 'Page 2',
    title: 'Page 2',
    content: 'Welcome to Page 2!',
    subpages: [
      { title: 'Subpage 1', link: '/page2/subpage1' },
      { title: 'Subpage 2', link: '/page2/subpage2' }
    ]
  });
});

router.get('/subpage1', (req, res) => {
  res.render('pages/page', {
    siteTitle: 'Page 2 - Subpage 1',
    title: 'Subpage 1',
    content: 'This is Subpage 1 of Page 2',
    subpages: []
  });
});

router.get('/subpage2', (req, res) => {
  res.render('pages/page', {
    siteTitle: 'Page 2 - Subpage 2',
    title: 'Subpage 2',
    content: 'This is Subpage 2 of Page 2',
    subpages: []
  });
});

export default router;
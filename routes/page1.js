import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/page', {
    siteTitle: 'Page 1',
    title: 'Page 1',
    content: 'Welcome to Page 1',
    bodyClass: 'page1',
    subpages: [
      { title: 'Subpage 1', link: '/page1/subpage1' },
      { title: 'Subpage 2', link: '/page1/subpage2' }
    ]
  });
});

router.get('/subpage1', (req, res) => {
  res.render('pages/page', {
    siteTitle: 'Page 1 - Subpage 1',
    title: 'Subpage 1',
    content: 'This is Subpage 1 of Page 1',
    subpages: []
  });
});

router.get('/subpage2', (req, res) => {
  res.render('pages/page', {
    siteTitle: 'Page 1 - Subpage 2',
    title: 'Subpage 2',
    content: 'This is Subpage 2 of Page 1',
    subpages: []
  });
});

export default router;
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/page', {
    siteTitle: 'Page 1',
    title: 'Page 1',
    bodyClass: 'page1',
    content: 'Welcome to Page 1',
    subpages: [
      { title: 'Subpage 1', link: '/page1/subpage1' },
      { title: 'Subpage 2', link: '/page1/subpage2' }
    ]
  });
});

router.get('/subpage1', (req, res) => {
  res.render('pages/subpage1', {
    siteTitle: 'Page 1 - Subpage 1',
    title: 'Subpage 1',
    bodyClass: 'subpage1',
    content: 'This is subpage 1 under Page 1.'
  });
});

router.get('/subpage2', (req, res) => {
  res.render('pages/subpage2', {
    siteTitle: 'Page 1 - Subpage 2',
    title: 'Subpage 2',
    bodyClass: 'subpage2',
    content: 'This is subpage 2 under Page 1.'
  });
});

export default router;

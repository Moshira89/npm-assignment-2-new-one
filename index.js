import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import page1 from './routes/page1.js';
import page2 from './routes/page2.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('pages/home', {
    siteTitle: 'Home Page',
    bodyClass: 'home',
    title: 'Welcome to the Homepage!',
    content: 'This is the homepage of our website.',
  });
});

app.use('/page1', page1);
app.use('/page2', page2);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

import express from 'express';
const router = express.Router();

router.use('/', (req, res) => {
  res.render('index.html');
});

export default router;
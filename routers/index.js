import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        status: 'success',
        message: 'Hello Galaxy'
    });
});

router.post('/', (req, res) => {
    res.json({
      status: 'success',
      message: 'Hello World From Method POST'
    });
});

router.patch('/', (req, res) => {
    res.json({
      status: 'success',
      message: 'Hello World From Method PATCH'
    });
});

router.put('/', (req, res) => {
    res.json({
      status: 'success',
      message: 'Hello World From Method PUT'
    });
});

router.delete('/', (req, res) => {
    res.json({
      status: 'success',
      message: 'Hello World'
    });
});

export default router;
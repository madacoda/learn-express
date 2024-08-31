import express from 'express';
import bodyParser from 'body-parser';
import indexRouter from './routers/index.js';
import userRouter from './routers/user.js';

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});


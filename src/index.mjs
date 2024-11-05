import express from 'express';

const app = express();

const PORT = process.env.PORT || 8888;

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`);
});
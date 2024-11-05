import express from 'express';

const app = express();

const PORT = process.env.PORT || 8888;

const mockUsers = [
    {id:1, username:"anson", displayName: "Anson"},
    {id:2, username:"nav", displayName: "Nav"},
    {id:3, username:"amrit", displayName: "Amrit"}
];

app.get('/',(req,res)=>{
    res.status(201).send({msg: "Hello"});
});

app.get('/api/users', (req,res)=>{
    res.send(mockUsers);
});

app.get("/api/users/:id",(req,res)=>{
    const parsedId = parseInt(req.params.id);
    if(isNaN(parsedId)) 
        return res.status(400).send({msg: 'Bad Request! Invalid ID'});

    const findUser = mockUsers.find((user)=> user.id === parsedId);
    if(!findUser) return res.sendStatus(404);
    return res.send(findUser);

});

app.get('/api/products',(req,res)=>{
    res.send([{id: 23, name:'chicken',price:20.99}]);
});

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`);
});
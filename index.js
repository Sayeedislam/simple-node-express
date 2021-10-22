// step one
const express = require('express');
const cors = require('cors');
//step two
const app = express();
app.use(cors());
app.use(express.json())
//third step
const port = process.env.PORT || 5000;
//fourt step
app.get('/', (req, res) => {
    res.send('this one is working man')
});
const users = [
    { id: '0', name: 'harun', Fathersname: 'moffazel', Job: 'gramin sim seller', Email: 'skharunnb@gmail.com', phone: '0182255' },
    { id: '1', name: 'Foisal', Fathersname: 'Musha', Job: 'Ousud seller', Email: 'Faysal@gmail.com', phone: '6565' },
    { id: '2', name: 'Sayeed', Fathersname: 'Alfaz', Job: 'Programar ', Email: 'sksayeed@gmail.com', phone: '01768' },
    { id: '3', name: 'Apurbo', Fathersname: 'Ashok ', Job: ' dud seller', Email: 'apurbo@gmail.com', phone: '017555' },
    { id: '4', name: 'Apurbo', Fathersname: 'Ashok ', Job: ' dud seller', Email: 'apurbo@gmail.com', phone: '017555' }
]
// app.get('/user', (req, res) => {
//     res.send(users)
// })

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
});
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hidden the psot', req.body);
    res.send(newUser);

})
//five step
app.listen(port, () => {
    console.log('listening to port number 2 ', port)
})



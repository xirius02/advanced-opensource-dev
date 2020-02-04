var mongodb = require('mongodb');
var MC = mongodb.MongoClient;

var connectionUrl = 'mongodb://127.0.0.1:27017'
var databaseName = 'SE373'

MC.connect(connectionUrl, {useNewUrlParser:true}, function(error, client)
{
    if(error)
    {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);
    

    db.collection('users').insertMany([
        { name:'Jay', age:40 },
        { name:'Erick', age:29 },
        { name:'Jenny', age:28 }
    ])

    db.collection('files').insertMany([
        { name: 'local', path: 'D:'},
        { name: 'cloud', path: 'Z:'},
        { name: 'Web', path: 'www'}
    ])
    db.collection('games').insertMany([
        { name: 'Bloodborne', release: '2/16/2015'},
        { name: 'COD', release: 'NA'},
        { name: 'The Witcher 3', release: '2/2/2015'}
    ])
})
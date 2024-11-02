import {MongoClient} from 'mongodb';

async function connect() {
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    return client.db('test');
    }

export default connect;

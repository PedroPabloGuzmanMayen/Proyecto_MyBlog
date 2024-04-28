import pg from 'pg';
const { Client } = pg;
const connectionData = {
  user: 'pp',
  host: 'localhost',
  database: 'blog_starwars',
  password: 'hola',
  port: 5432,
}
const client = new Client(connectionData)
client.connect();
export default client;
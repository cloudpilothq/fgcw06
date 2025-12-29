const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_LDXfs3uH4rjK@ep-late-butterfly-abhsxnzz-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require',
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    console.log('Connecting to database...');
    await client.connect();
    console.log('✅ Connected successfully!');
    const res = await client.query('SELECT NOW()');
    console.log('Time from DB:', res.rows[0]);
    await client.end();
  } catch (err) {
    console.error('❌ Connection error:', err);
  }
}

testConnection();

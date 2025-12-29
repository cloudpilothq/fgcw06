const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const dotenv = require('dotenv');
const path = require('path');

// Load .env.local
const envPath = path.join(__dirname, '..', '.env.local');
dotenv.config({ path: envPath });

const connectionString = process.env.DATABASE_URL;
console.log('Testing Adapter Connection...');

const pool = new Pool({ 
  connectionString,
  ssl: { rejectUnauthorized: false } 
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    console.log('Attempting to count users...');
    const count = await prisma.user.count();
    console.log('✅ Success! User count:', count);
  } catch (e) {
    console.error('❌ Prisma Error:', e);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();

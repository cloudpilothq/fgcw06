import db from '../client/src/lib/db';

async function makeUserAdmin() {
  // Change this to your email address
  const email = 'admin@fgcw06.com'; // ⚠️ UPDATE THIS!

  try {
    const user = await db.user.update({
      where: { email },
      data: { role: 'ADMIN' }
    });

    console.log('✅ User updated to admin successfully!');
    console.log('Email:', user.email);
    console.log('Name:', user.name);
    console.log('Role:', user.role);
  } catch (error) {
    console.error('Error updating user:', error);
    console.log('\n💡 Make sure:');
    console.log('1. The email exists in the database');
    console.log('2. PostgreSQL is running');
    console.log('3. DATABASE_URL in .env is correct');
  } finally {
    await db.$disconnect();
  }
}

makeUserAdmin();

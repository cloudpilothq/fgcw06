import db from '../client/src/lib/db';
import bcrypt from 'bcryptjs';

async function createAdmin() {
  const email = 'admin@fgcw06.com';
  const password = 'Admin@123';
  const name = 'Admin User';

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user exists
    const existingUser = await db.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      console.log('User already exists. Updating to ADMIN...');
      await db.user.update({
        where: { email },
        data: { role: 'ADMIN' }
      });
    } else {
      console.log('Creating new ADMIN user...');
      await db.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'ADMIN'
        }
      });
    }

    console.log('✅ Admin user ready!');
    console.log('📧 Email:', email);
    console.log('🔑 Password:', password);
    console.log('👤 Role: ADMIN');
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await db.$disconnect();
  }
}

createAdmin();

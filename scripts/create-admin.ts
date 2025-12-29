import db from '../client/src/lib/db';
import bcrypt from 'bcryptjs';

async function createAdmin() {
  const email = 'admin@fgwc06.com';
  const password = 'admin123'; // Change this to a secure password
  const name = 'Admin User';

  try {
    // Check if admin already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      console.log('Admin user already exists!');
      console.log('Email:', email);
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin user
    const admin = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: 'ADMIN', // This is the key - setting role to ADMIN
      }
    });

    console.log('✅ Admin user created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', admin.role);
    console.log('\n⚠️  Please change the password after first login!');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await db.$disconnect();
  }
}

createAdmin();

const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'dev.db');
const db = new sqlite3.Database(dbPath);

const email = 'admin@fgwc06.com';
const password = 'Admin@123'; // Your admin password
const name = 'Admin User';

async function createAdmin() {
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = require('crypto').randomUUID();

  db.serialize(() => {
    // First, check if user exists
    db.get('SELECT * FROM User WHERE email = ?', [email], (err, row) => {
      if (err) {
        console.error('Error checking user:', err);
        db.close();
        return;
      }

      if (row) {
        // User exists, update to admin
        db.run(
          'UPDATE User SET role = ? WHERE email = ?',
          ['ADMIN', email],
          function(err) {
            if (err) {
              console.error('Error updating user:', err);
            } else {
              console.log('✅ User updated to ADMIN successfully!');
              console.log('\n📧 Email:', email);
              console.log('🔑 Password:', password);
              console.log('👤 Role: ADMIN');
              console.log('\n🌐 Login URL: http://localhost:3000/login');
            }
            db.close();
          }
        );
      } else {
        // User doesn't exist, create new admin
        db.run(
          `INSERT INTO User (id, email, password, name, role, createdAt, updatedAt) 
           VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))`,
          [id, email, hashedPassword, name, 'ADMIN'],
          function(err) {
            if (err) {
              console.error('Error creating admin:', err);
            } else {
              console.log('✅ Admin user created successfully!');
              console.log('\n📧 Email:', email);
              console.log('🔑 Password:', password);
              console.log('👤 Role: ADMIN');
              console.log('\n🌐 Login URL: http://localhost:3000/login');
              console.log('\n⚠️  Save these credentials securely!');
            }
            db.close();
          }
        );
      }
    });
  });
}

createAdmin().catch(console.error);

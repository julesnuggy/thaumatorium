import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (passwordString: string) => (
  bcrypt.hash(passwordString, SALT_ROUNDS, (err, hash) => {
    if (err) {
      throw err;
    }

    return hash;
  })
)
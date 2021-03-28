import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (passwordString: string): Promise<string> => (
  bcrypt.hash(passwordString, SALT_ROUNDS)
    .catch(err => {
      throw new Error(err);
    })
);

export const comparePasswords = async (loginPassword: string, databaseHash: string): Promise<boolean> => (
  bcrypt.compare(loginPassword, databaseHash)
    .catch(err => {
      throw new Error(err);
    })
);

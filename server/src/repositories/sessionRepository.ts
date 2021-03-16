import { Session } from '../models/Session';
import { promisePool } from '../db'

export class SessionRepository {
  public createSession = async (session: Session): Promise<void> => {
    await promisePool.query(
      'INSERT INTO session (id, userId) VALUES (?, ?)',
      [session.id, session.userId]
    );
  };
}

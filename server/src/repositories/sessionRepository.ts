import { Session } from '../models/Session';
import { promisePool } from '../db'

export class SessionRepository {
  public createSession = async (session: Session): Promise<void> => {
    const existingSession = await this.getSession(session.userId)
    if (!existingSession) {
      await promisePool.query(
        'INSERT INTO session (id, userId) VALUES (?, ?)',
        [session.id, session.userId]
      );
    }
  };

  public getSession = async (userId: string): Promise<Session | null> => {
    const [rows]: any = await promisePool.query(
      'SELECT * FROM session WHERE userId = (?) LIMIT 1',
      [userId]
    );
    if (rows.length < 1) {
      console.error('No session for that user');
      return null;
    }
    return rows[0] as Session;
  }

  public verifySession = async (sessionId: string): Promise<Session | null> => {
    const [rows]: any = await promisePool.query(
      'SELECT * FROM session WHERE id = (?) LIMIT 1',
      [sessionId]
    );
    if (rows.length < 1) {
      console.error('No session found');
      return null;
    }
    return rows[0] as Session;
  }
}

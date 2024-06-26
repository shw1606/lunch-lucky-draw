import { sql } from '@vercel/postgres';
import { User } from 'next-auth';

export async function getUserByOauth(
  oauthId: string
): Promise<User | undefined> {
  try {
    const user = await sql.query<User>(
      `SELECT * FROM users WHERE "oauthId"=$1`,
      [oauthId]
    );
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function createUser(
  oauthId: string,
  name?: string,
  email?: string
): Promise<User> {
  try {
    const query = `
    INSERT INTO users ("oauthId", name, email)
    VALUES ($1, $2, $3)
    RETURNING *`;
    const user = await sql.query<User>(query, [oauthId, name, email]);
    if (!user.rows[0]) {
      throw new Error('Failed to create user. user.rows[0] is undefined.');
    }
    return user.rows[0];
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error('Failed to create user.');
  }
}

'use server';
import { AuthError } from 'next-auth';

import { signIn } from '@/auth';

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function startupAccountAuthenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // console.log('startupAccountAuthenticate formData', formData);
    await signIn('startupCredentials', formData);
  } catch (error) {
    // console.error(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const removeEmptyString = <T extends Record<string, any>>(obj: T): T => {
  const returnObj = {} as T;
  for (const [key, value] of Object.entries(obj)) {
    if (value !== '') {
      returnObj[key as keyof T] = value;
    }
  }
  return returnObj;
};

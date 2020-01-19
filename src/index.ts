import { compare } from 'bcryptjs';
import { PasswordVerifier } from 'thomasio-auth-js-common/lib/server';

export const passwordVerifier: PasswordVerifier<string> = async (stored, input) => await compare(input, stored);

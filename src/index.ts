import { compare } from 'bcryptjs';
import { Verifier } from 'thomasio-auth-js-common/lib/server';

export const verifier: Verifier<string> = (stored, input) => compare(input, stored);

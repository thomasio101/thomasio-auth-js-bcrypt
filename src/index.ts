import { compare } from 'bcryptjs';
import { Verifier } from 'thomasio-auth-js-common/lib/server';

export const verifier: Verifier<string> = async (stored, input) => await compare(input, stored);

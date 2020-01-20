import { compare, hash } from 'bcryptjs';
import { Processor, Verifier } from 'thomasio-auth-js-common/lib/server';

export const verifier: Verifier<string> = (stored, input) => compare(input, stored);

export function getProcessor(cost: number): Processor<string> {
    return (input) => hash(input, cost)
}

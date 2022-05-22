import { pipe } from './utils';

const inc = (num) => num + 1
const dbl = (num) => num * 2

test('Doit faire un transfert de inc à dbl', () => {
    const pipeline = pipe(inc, dbl)
    const result = pipeline(5)
    expect(result).toBe(12)
})

test('Doit faire un transfert de inc à dbl puis repasser à inc', () => {
    const pipeline = pipe(inc, dbl, inc)
    const result = pipeline(4)
    expect(result).toBe(11)
})
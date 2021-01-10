import { sum } from '..';

describe('sum3 should calculate a sum properly', () => {
	test('three positive numbers', () => {
		expect(sum(3, 4)).toBe(7);
	});
	test('three negative numbers', () => {
		expect(sum(3, -4)).toBe(-1);
	});
});

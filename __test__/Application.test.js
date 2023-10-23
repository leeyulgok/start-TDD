import add from "../src/App";

describe('App', () => {
  test('add 함수는 두 숫자의 합을 반환한다.', () => {
    expect(add(1, 3)).toBe(4);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });
});
// 암호 검사기
// 문자열을 검사해서 규칙을 준수하는지에 따라 암호를 '약함', '보통', '강함'으로 구분

/**
 * 검사 규칙 3가지 (3가지 모두 만족은 강함 순으로 그 밑으로 보통, 약함)
 * 1. 길이가 8글자 이상
 * 2. 0~9 사이의 숫자를 포함
 * 3. 대문자 포함
 */

import App from "../../src/Day2/App";

const app = new App();

describe("App", () => {
  test("강함", () => {
    const STRONG = "ab12!@AB";
    expect(app.checkPassword(STRONG)).toBe(3);
  });

  test('보통: 길이가 8글자가 안됨', () => {
    const NORMAL = "ab1AB!2";
    expect(app.checkPassword(NORMAL)).toBe(2);
  });
  
  test('보통: 숫자를 포함하지 않음', () => {
    const NORMAL = "abAB!@abc";
    expect(app.checkPassword(NORMAL)).toBe(2);
  });

});

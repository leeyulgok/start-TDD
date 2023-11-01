// 테스트 작성 순서 연습 - 구독 서비스
// 다음과 같은 규칙
/**
 * 1. 서비스를 사용하려면 매달 만 원을 선불로 납부, 납부일 기준으로 한 달 뒤가 서비스 만료일
 * 2. 2개월 이상 요금을 납부 가능
 * 3. 10만 원을 납부하면 서비스를 1년 제공
 */

import App from "../../src/Day3/App";

describe('구독 서비스 테스트', () => {
    const app = new App();
  test('구독 이용료 납부 시, 한 달 후 만료', () => {
    let payment = 10000;
    let date = '2023-12-31';
    expect(app.expirationDate(payment, date)).toBe('2024-01-31');
  });
});
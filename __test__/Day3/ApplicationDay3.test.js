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

  test('구독 이용료 예외처리', () => {
    let payment = 10000;

    let dateOne = '2019-01-31';
    expect(app.expirationDate(payment, dateOne)).toBe('2019-02-28');

    let dateTwo = '2023-05-31';
    expect(app.expirationDate(payment, dateTwo)).toBe('2023-06-30');

    let dateThree = '2020-01-31';
    expect(app.expirationDate(payment, dateThree)).toBe('2020-02-29');
  });

  test('2개월 이상 이용료 납부 시', () => {
    let paymentOne = 20000;
    let dateOne = '2022-11-01';
    expect(app.expirationDate(paymentOne, dateOne)).toBe('2023-01-01');

    let paymentTwo = 40000;
    let dateTwo = '2022-08-15';
    expect(app.expirationDate(paymentTwo, dateTwo)).toBe('2022-12-15');
  });

  test('10만 원 납부 시, 만료일', () => {
    let payment = 100000;
    let date = '2023-12-31';
    expect(app.expirationDate(payment, date)).toBe('2024-12-31');
  });
});
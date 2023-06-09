/**
 * 숫자를 형식에 맞는 문자열로 바꿈. (1000 -> 1,000, 10000 -> 1 만)
 */
export function toFormatNumber(number: number): string {
  if (number < 10000) return number.toLocaleString();
  return `${Math.trunc((number * 100) / 10000) / 100}만`;
}

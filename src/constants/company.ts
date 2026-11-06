/** 회사 기본 정보 — 소개서·블로그 기준. 사업자번호는 확인 후 채울 것 */
export const COMPANY = {
  name: '멀티SM산업',
  nameEn: 'MULTI SM INDUSTRY',
  slogan: 'A부터 Z까지, 모든 과정을 직접.',
  ceo: '채희수',
  businessNumber: '', // TODO: 사업자등록번호 확인 필요
  address: '인천 서구 검단로326번길 47-4 (왕길동 64-51)',
  email: 'mult8089@naver.com',
  blog: 'https://blog.naver.com/mult8089',
  phones: {
    ceo: { label: '대표 채희수', number: '010-4225-9916' },
    manager: { label: '실장 이소연', number: '010-4266-8073' },
    office: { label: '사무실', number: '032-566-8089' },
  },
} as const

export const NAV_ITEMS = [
  { label: '회사소개', href: '#why' },
  { label: '사업영역', href: '#business' },
  { label: '장비렌탈', href: '#rental' },
  { label: '행사실적', href: '#portfolio' },
  { label: '프로그램', href: '#programs' },
  { label: '고객문의', href: '#contact' },
] as const

/** tel: 링크용 — 하이픈 제거 */
export const toTel = (number: string) => `tel:${number.replace(/-/g, '')}`

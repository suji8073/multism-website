import { Container } from '@/components/atoms/container'
import { COMPANY, toTel } from '@/constants/company'

/** 헤더 위 네이비 연락처 바 */
function UtilityBar() {
  return (
    <div className="bg-primary text-caption text-[#D6DEEA]">
      <Container className="flex min-h-9 flex-wrap items-center justify-between gap-x-4">
        <span>인천 · 김포 종합 행사 전문기업</span>
        <div className="hidden flex-wrap gap-5 sm:flex">
          <a href={toTel(COMPANY.phones.ceo.number)} className="hover:text-white">
            대표 {COMPANY.phones.ceo.number}
          </a>
          <a href={toTel(COMPANY.phones.office.number)} className="hover:text-white">
            사무실 {COMPANY.phones.office.number}
          </a>
          <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
            {COMPANY.email}
          </a>
        </div>
      </Container>
    </div>
  )
}

export { UtilityBar }

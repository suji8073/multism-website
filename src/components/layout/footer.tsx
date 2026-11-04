import { Container } from '@/components/atoms/container'
import { LogoSymbol } from '@/components/atoms/logo'
import { COMPANY } from '@/constants/company'

function Footer() {
  return (
    <footer className="bg-[#0A1D3B] text-[13px] leading-loose text-[#A9B5C7]">
      <Container className="flex flex-wrap justify-between gap-6 pt-9 pb-24 md:pb-12">
        <div>
          <span className="mb-2 flex items-center gap-2">
            <LogoSymbol tone="dark" className="h-6" />
            <b className="pt-0.5 text-base text-white">{COMPANY.name}</b>
          </span>
          대표 {COMPANY.ceo} · 사업자등록번호 {COMPANY.businessNumber || '[확인 필요]'}
          <br />
          {COMPANY.address}
        </div>
        <div>
          T. {COMPANY.phones.office.number} · M. {COMPANY.phones.ceo.number} · {COMPANY.email}
          <br />
          <a href={COMPANY.blog} target="_blank" rel="noreferrer" className="text-white hover:underline">
            네이버 블로그
          </a>
          <br />© {new Date().getFullYear()} {COMPANY.nameEn}
        </div>
      </Container>
    </footer>
  )
}

export { Footer }

import { ChatCircleTextIcon, PhoneIcon } from '@phosphor-icons/react'
import { Button } from '@/components/atoms/button'
import { COMPANY, toTel } from '@/constants/company'

/** 모바일 하단 고정 바: 전화 · 견적 */
function MobileBottomBar() {
  return (
    <div className="bg-background/95 fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <Button asChild variant="outline-primary" size="lg">
        <a href={toTel(COMPANY.phones.ceo.number)}>
          <PhoneIcon weight="bold" />
          전화하기
        </a>
      </Button>
      <Button asChild size="lg">
        <a href="#quote">
          <ChatCircleTextIcon weight="bold" />
          견적문의
        </a>
      </Button>
    </div>
  )
}

export { MobileBottomBar }

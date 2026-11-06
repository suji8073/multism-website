import { ChatCircleTextIcon, PhoneIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/atoms/button'
import { cn } from '@/lib/utils'
import { COMPANY, toTel } from '@/constants/company'

/** 모바일 하단 고정 바: 전화 · 견적 */
function MobileBottomBar() {
  // 견적 폼이 화면에 보이는 동안은 겹치지 않게 숨김
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const el = document.getElementById('quote')
    if (!el) return
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      aria-hidden={hidden}
      className={cn(
        'transition-transform duration-300',
        hidden && 'pointer-events-none translate-y-full',
        'bg-background/95 fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden',
      )}
    >
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

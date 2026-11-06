import { ListIcon } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/atoms/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/atoms/sheet'
import { Container } from '@/components/atoms/container'
import { Logo } from '@/components/atoms/logo'
import { NavLink } from '@/components/atoms/nav-link'
import { COMPANY, NAV_ITEMS, toTel } from '@/constants/company'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1))

/** 한 줄 헤더: 로고 · 텍스트 메뉴(활성 밑줄) · 빠른 견적 버튼 */
function Header() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /** 클릭 즉시 활성 표시 (스크롤이 끝나면 scroll spy가 다시 맞춤) */
  const select = (href: string) => {
    setActive(href.slice(1))
    setOpen(false)
  }

  return (
    <header
      className={cn(
        'bg-background sticky top-0 z-40 border-b transition-shadow duration-300',
        scrolled && 'shadow-[0_2px_16px_rgba(15,42,85,0.08)]',
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a href="#top" aria-label="멀티SM산업 홈" onClick={() => setActive(null)} className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="주요 메뉴" className="hidden h-full items-stretch gap-9 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={active === item.href.slice(1)}
              onClick={() => select(item.href)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild className="hidden sm:inline-flex">
            <a href="#quote">빠른 견적</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button ref={menuButtonRef} variant="ghost" size="icon" className="lg:hidden" aria-label="메뉴 열기">
                <ListIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              closeLabel="메뉴 닫기"
              // 닫을 때 기본 동작은 햄버거 버튼에 포커스를 돌려주는데, sticky 헤더라 브라우저가 페이지 맨 위로 스크롤함 → 스크롤 없이 포커스만 돌려줌
              onCloseAutoFocus={(e) => {
                e.preventDefault()
                menuButtonRef.current?.focus({ preventScroll: true })
              }}
            >
              <div className="flex h-[72px] shrink-0 items-center border-b px-5">
                <SheetTitle asChild>
                  <span>
                    <Logo />
                    <span className="sr-only">메뉴</span>
                  </span>
                </SheetTitle>
              </div>
              <nav aria-label="모바일 메뉴" className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-2.5 pt-3">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = active === item.href.slice(1)
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={() => select(item.href)}
                      style={{ animationDelay: `${100 + i * 40}ms` }}
                      className={cn(
                        'animate-in fade-in-0 slide-in-from-right-4 fill-mode-both focus-visible:ring-ring relative rounded-md px-3 py-2.5 text-body font-medium duration-300 outline-none focus-visible:ring-2',
                        isActive
                          ? 'bg-primary-soft text-primary font-bold'
                          : 'text-subtle-foreground hover:bg-muted hover:text-foreground',
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span aria-hidden className="bg-accent ml-2 inline-block size-1.5 rounded-full align-middle" />
                      )}
                    </a>
                  )
                })}
              </nav>
              <div className="flex flex-col gap-4 border-t px-5 pt-5 pb-6">
                <dl className="text-caption grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                  <dt className="text-muted-foreground">대표</dt>
                  <dd>
                    <a href={toTel(COMPANY.phones.ceo.number)} className="text-subtle-foreground hover:text-primary">
                      {COMPANY.phones.ceo.number}
                    </a>
                  </dd>
                  <dt className="text-muted-foreground">실장</dt>
                  <dd>
                    <a
                      href={toTel(COMPANY.phones.manager.number)}
                      className="text-subtle-foreground hover:text-primary"
                    >
                      {COMPANY.phones.manager.number}
                    </a>
                  </dd>
                  <dt className="text-muted-foreground">메일</dt>
                  <dd>
                    <a href={`mailto:${COMPANY.email}`} className="text-subtle-foreground hover:text-primary">
                      {COMPANY.email}
                    </a>
                  </dd>
                  <dt className="text-muted-foreground">블로그</dt>
                  <dd>
                    <a
                      href={COMPANY.blog}
                      target="_blank"
                      rel="noreferrer"
                      className="text-subtle-foreground hover:text-primary"
                    >
                      blog.naver.com/mult8089
                    </a>
                  </dd>
                </dl>
                <Button asChild block>
                  <a href="#quote" onClick={() => setOpen(false)}>
                    빠른 견적 상담
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

export { Header }

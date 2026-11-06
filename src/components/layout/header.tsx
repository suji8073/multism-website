import { ListIcon, XIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Logo } from '@/components/atoms/logo'
import { NavLink } from '@/components/atoms/nav-link'
import { NAV_ITEMS } from '@/constants/company'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1))

/** 한 줄 헤더: 로고 · 텍스트 메뉴(활성 밑줄) · 빠른 견적 버튼 */
function Header() {
  const [open, setOpen] = useState(false)
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
        (scrolled || open) && 'shadow-[0_2px_16px_rgba(15,42,85,0.08)]',
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
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon className="size-6" /> : <ListIcon className="size-6" />}
          </Button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="모바일 메뉴" className="border-t lg:hidden">
          <Container className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                variant="list"
                href={item.href}
                active={active === item.href.slice(1)}
                onClick={() => select(item.href)}
              >
                {item.label}
              </NavLink>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}

export { Header }

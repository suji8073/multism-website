import { ListIcon, XIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Logo } from '@/components/atoms/logo'
import { NAV_ITEMS } from '@/constants/company'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
      <Container className="flex min-h-[76px] items-center justify-between gap-4">
        <a href="#top" aria-label="멀티SM산업 홈">
          <Logo />
        </a>

        <nav aria-label="주요 메뉴" className="hidden gap-9 text-[15px] font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-subtle-foreground hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild className="hidden sm:inline-flex">
            <a href="#quote">빠른 견적</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
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
        <nav id="mobile-nav" aria-label="모바일 메뉴" className="border-t md:hidden">
          <Container className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:text-primary flex min-h-12 items-center text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}

export { Header }

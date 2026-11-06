import { cn } from '@/lib/utils'

type ContactCardProps = {
  label: string
  value: string
  href: string
  /** 새 탭으로 열기 (블로그 등 외부 링크) */
  external?: boolean
  className?: string
}

/** 네이비 문의 섹션의 흰색 연락처 카드 */
function ContactCard({ label, value, href, external, className }: ContactCardProps) {
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      className={cn(
        'text-primary flex flex-col gap-1 rounded-xl bg-white px-5 py-4 transition-colors hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none',
        className,
      )}
    >
      <span className="text-muted-foreground text-caption">{label}</span>
      <b className="text-lg">{value}</b>
    </a>
  )
}

export { ContactCard }

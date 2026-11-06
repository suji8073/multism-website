import type { ComponentProps } from 'react'
import { COMPANY } from '@/constants/company'
import { cn } from '@/lib/utils'

type LogoSymbolProps = ComponentProps<'svg'> & {
  /** light: 흰 배경용(네이비 M) / dark: 네이비 배경용(흰 M) */
  tone?: 'light' | 'dark'
  /** compact: 작은 크기용 — 불꽃 3갈래, 점 생략 */
  compact?: boolean
}

/** 폭죽 M 심볼 */
function LogoSymbol({ tone = 'light', compact = false, className, ...props }: LogoSymbolProps) {
  const m = tone === 'light' ? 'var(--primary)' : '#ffffff'
  return (
    <svg
      viewBox="0 0 96 80"
      fill="none"
      strokeLinecap="round"
      aria-hidden
      className={cn('h-8 w-auto', className)}
      {...props}
    >
      <path
        d="M8 76 V28 H24 L48 54 L72 28 H88 V76 H72 V50 L48 76 L24 50 V76 Z"
        fill={m}
        stroke={m}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {compact ? (
        <path d="M48 14 V4 M52.2 15.8 L58.6 9.4 M43.8 15.8 L37.4 9.4" stroke="var(--logo-orange)" strokeWidth="5" />
      ) : (
        <>
          <path
            d="M48 14 V4 M52.2 15.8 L58.6 9.4 M43.8 15.8 L37.4 9.4 M54 20 H63 M42 20 H33"
            stroke="var(--logo-orange)"
            strokeWidth="3.6"
          />
          <circle cx="54.5" cy="4.3" r="2" fill="var(--logo-yellow)" />
          <circle cx="41.5" cy="4.3" r="2" fill="var(--spark-sky)" />
          <circle cx="63.7" cy="12.5" r="1.8" fill="var(--spark-sky)" />
          <circle cx="32.3" cy="12.5" r="1.8" fill="var(--logo-yellow)" />
        </>
      )}
    </svg>
  )
}

type LogoProps = ComponentProps<'span'> & {
  tone?: 'light' | 'dark'
  /** 영문 서브타이틀 표시 여부 */
  showEnglish?: boolean
}

/** 가로형 시그니처: 심볼 + 멀티SM산업 (+ MULTI SM INDUSTRY) */
function Logo({ tone = 'light', showEnglish = true, className, ...props }: LogoProps) {
  const color = tone === 'light' ? 'text-primary' : 'text-white'
  return (
    <span className={cn('inline-flex items-center gap-2.5', color, className)} {...props}>
      <LogoSymbol tone={tone} className="h-8" />
      <span className="flex flex-col gap-0.5 pt-1">
        <span className="text-xl leading-none font-bold tracking-tight">{COMPANY.name}</span>
        {showEnglish && (
          <span className="font-display text-[8px] leading-none font-semibold tracking-[0.3em]">
            {COMPANY.nameEn}
          </span>
        )}
      </span>
    </span>
  )
}

export { Logo, LogoSymbol }

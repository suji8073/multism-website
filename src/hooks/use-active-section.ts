import { useEffect, useState } from 'react'

/**
 * 스크롤 위치에 따라 현재 보고 있는 섹션 id를 돌려준다 (scroll spy).
 * 화면 위쪽 1/3 지점을 지나는 섹션을 활성으로 본다.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight / 3
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // 페이지 맨 아래에 닿으면 마지막 섹션
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1] ?? current
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids])

  return [active, setActive] as const
}

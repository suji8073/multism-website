import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * 커스텀 글자 크기(text-caption/body/lead)를 '크기'로 등록.
 * 등록하지 않으면 tailwind-merge가 글자 색으로 오인해 text-white 같은 색 클래스를 지워버림.
 */
const twMerge = extendTailwindMerge({
  extend: { theme: { text: ['caption', 'body', 'lead'] } },
})

/** 조건부 className 결합 + Tailwind 클래스 충돌 병합 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

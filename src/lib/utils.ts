import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** 조건부 className 결합 + Tailwind 클래스 충돌 병합 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

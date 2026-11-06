import type { QuickQuoteValues } from '@/components/molecules/quick-quote-form'

/**
 * 견적 요청을 Web3Forms로 보내 회사 메일로 받는다.
 * 접근 키는 Web3Forms(https://web3forms.com)에서 받는 메일 주소로 발급받아
 * 환경변수 VITE_WEB3FORMS_KEY에 넣는다. (공개돼도 되는 키 — 지정한 메일로만 전송됨)
 */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

export async function sendQuote(values: QuickQuoteValues) {
  if (!ACCESS_KEY) throw new Error('VITE_WEB3FORMS_KEY가 설정되지 않았습니다')

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `[홈페이지 견적 요청] ${values.eventType} · ${values.organization || '단체명 미입력'}`,
      from_name: '멀티SM산업 홈페이지',
      행사유형: values.eventType,
      단체명: values.organization || '(미입력)',
      연락처: values.phone,
      botcheck: '',
    }),
  })
  const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string }
  if (!res.ok || !data.success) throw new Error(data.message || `전송 실패 (${res.status})`)
}

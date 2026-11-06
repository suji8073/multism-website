import { PhoneIcon } from '@phosphor-icons/react'
import { useId, useState, type FormEvent } from 'react'
import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { toast } from '@/components/atoms/sonner'
import { ToggleGroup, ToggleGroupItem } from '@/components/atoms/toggle-group'
import { COMPANY, toTel } from '@/constants/company'
import { cn } from '@/lib/utils'

export const EVENT_TYPES = [
  '체육대회 · 운동회',
  '지역 축제 · 노래자랑',
  '주민의 날 · 기념식',
  '착공식 · 개소식',
  '장비 렌탈만 필요해요',
] as const

export type QuickQuoteValues = {
  eventType: string
  organization: string
  phone: string
}

type QuickQuoteFormProps = {
  /** 실제 전송 처리 (예: sendQuote). 실패하면 전화 안내 토스트를 띄운다 */
  onSubmit?: (values: QuickQuoteValues) => Promise<void> | void
  /** 히어로처럼 좁은 곳: 유형을 알약 버튼으로, 전화 버튼은 글자 링크로 */
  compact?: boolean
  className?: string
}

function QuickQuoteForm({ onSubmit, compact, className }: QuickQuoteFormProps) {
  const id = useId()
  const [eventType, setEventType] = useState<string>(EVENT_TYPES[0])
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const values: QuickQuoteValues = {
      eventType,
      organization: String(data.get('organization') ?? ''),
      phone: String(data.get('phone') ?? ''),
    }
    setSubmitting(true)
    try {
      await onSubmit?.(values)
      toast.success('견적 요청이 접수되었습니다', {
        description: '담당자가 곧 연락드리겠습니다.',
      })
      form.reset()
    } catch {
      toast.error('전송에 실패했습니다', {
        description: `전화로 문의해 주세요: ${COMPANY.phones.ceo.number}`,
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      aria-labelledby={`${id}-title`}
      onSubmit={handleSubmit}
      className={cn(
        'bg-card flex flex-col gap-4 rounded-2xl border p-6 shadow-[0_8px_24px_rgba(15,42,85,0.06)]',
        !compact && 'sm:p-8',
        className,
      )}
    >
      <div className="flex flex-col gap-1.5">
        <h2 id={`${id}-title`} className="text-xl font-bold">
          빠른 견적 상담
        </h2>
        <p className="text-muted-foreground text-caption">
          행사 유형과 연락처만 남겨주시면 담당자가 바로 연락드립니다.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <span id={`${id}-type`} className="text-sm font-bold">
          행사 유형
        </span>
        <ToggleGroup
          type="single"
          layout={compact ? 'chips' : 'list'}
          aria-labelledby={`${id}-type`}
          value={eventType}
          onValueChange={(v) => v && setEventType(v)}
        >
          {EVENT_TYPES.map((t) => (
            <ToggleGroupItem key={t} value={t}>
              {t}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${id}-org`} className="text-caption">
            단체명
          </Label>
          <Input id={`${id}-org`} name="organization" placeholder="예: OO동 주민자치회" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${id}-phone`} className="text-caption">
            연락처
          </Label>
          <Input id={`${id}-phone`} name="phone" type="tel" required placeholder="010-0000-0000" />
        </div>
      </div>

      <Button type="submit" size="lg" block disabled={submitting}>
        {submitting ? '전송 중…' : '견적 요청하기'}
      </Button>
      <Button
        asChild
        variant={compact ? 'link' : 'outline-primary'}
        block={!compact}
        className={cn(compact && 'self-center')}
      >
        <a href={toTel(COMPANY.phones.ceo.number)}>
          <PhoneIcon weight="fill" />
          바로 전화 상담 {COMPANY.phones.ceo.number}
        </a>
      </Button>
    </form>
  )
}

export { QuickQuoteForm }

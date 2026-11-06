import { Grid } from '@/components/atoms/layout'
import { FaqList } from '@/components/molecules/faq-list'
import { GreetingCard } from '@/components/molecules/greeting-card'
import { SectionHeader } from '@/components/molecules/section-header'
import { Section } from '@/components/layout/section'
import { TestimonialCard } from '@/components/molecules/testimonial-card'
import { FAQ, GREETING, TESTIMONIALS, TESTIMONIALS_ARE_SAMPLE } from '@/data/content'

function GreetingSection() {
  return (
    <Section aria-label="대표 인사말" tone="muted">
      <GreetingCard image={GREETING.image} name={GREETING.name} role={GREETING.role} quote={GREETING.quote}>
        {GREETING.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </GreetingCard>
    </Section>
  )
}

function FaqSection() {
  return (
    <Section id="faq">
      <Grid cols="split" gap={12} align="start">
        <SectionHeader
          eyebrow="FAQ"
          title="자주 묻는 질문"
          description="더 궁금한 점은 빠른 견적 상담이나 전화로 편하게 물어봐 주세요."
        />
        <FaqList items={FAQ} />
      </Grid>
    </Section>
  )
}

/** 고객 후기 — 예시 문구인 동안은 개발 화면에서만 보임 */
function TestimonialsSection() {
  if (TESTIMONIALS_ARE_SAMPLE && !import.meta.env.DEV) return null
  return (
    <Section id="reviews">
      <SectionHeader
        eyebrow="REVIEWS"
        title="다시 맡겨주시는 이유"
        description={
          TESTIMONIALS_ARE_SAMPLE
            ? '※ 예시 문구입니다. 실제 후기로 교체 전까지 공개 사이트에는 보이지 않습니다.'
            : undefined
        }
      />
      <Grid cols="1-2-3" gap={6} reveal>
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.organization} {...t} />
        ))}
      </Grid>
    </Section>
  )
}

export { FaqSection, GreetingSection, TestimonialsSection }

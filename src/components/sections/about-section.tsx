import { Grid } from '@/components/atoms/layout'
import { FaqList } from '@/components/molecules/faq-list'
import { GreetingCard } from '@/components/molecules/greeting-card'
import { SectionHeader } from '@/components/molecules/section-header'
import { Section } from '@/components/layout/section'
import { FAQ, GREETING } from '@/data/content'

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

export { FaqSection, GreetingSection }

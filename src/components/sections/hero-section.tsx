import { ArrowDownIcon } from '@phosphor-icons/react'
import { BlurFade } from '@/components/atoms/blur-fade'
import { Button } from '@/components/atoms/button'
import { Grid, Stack } from '@/components/atoms/layout'
import { Eyebrow, Heading, Highlight, Text } from '@/components/atoms/typography'
import { QuickQuoteForm } from '@/components/molecules/quick-quote-form'
import { StatItem } from '@/components/molecules/stat-item'
import { FullBleedHero } from '@/components/layout/full-bleed-hero'
import { Section } from '@/components/layout/section'
import { HERO_SLIDES, STATS } from '@/data/content'

function HeroSection() {
  return (
    <>
      <FullBleedHero
        id="top"
        slides={HERO_SLIDES}
        aside={
          <BlurFade delay={0.15}>
            <div id="quote" className="scroll-mt-24">
              <QuickQuoteForm compact />
            </div>
          </BlurFade>
        }
      >
        <BlurFade>
          <Stack gap={6}>
            <Eyebrow tone="inverse">ONE-STOP EVENT SERVICE</Eyebrow>
            <Heading as="h1" size="display" tone="inverse">
              행사의 처음부터 끝까지,
              <br />
              <Highlight className="text-spark-yellow">한 회사가</Highlight> 책임집니다.
            </Heading>
            <Text size="lg" tone="inverse" className="max-w-xl">
              무대·음향·천막부터 디자인 제작, 설치와 철거까지. 행사에 필요한 모든 장비와 물품을 직접 보유한
              멀티에스엠산업이 중간 과정 없이 진행합니다.
            </Text>
            <Stack direction="row" gap={3}>
              <Button asChild size="lg" variant="accent">
                <a href="#portfolio">
                  행사 실적 보기
                  <ArrowDownIcon weight="bold" />
                </a>
              </Button>
            </Stack>
          </Stack>
        </BlurFade>
      </FullBleedHero>

      <Section aria-label="주요 수치" tone="overlap" spacing="none">
        <Grid
          cols="2-2-4"
          gap={6}
          reveal
          className="bg-card rounded-2xl border p-6 shadow-[0_16px_40px_rgba(15,42,85,0.10)] sm:p-8"
        >
          {STATS.map((s, i) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} divider={i > 0} />
          ))}
        </Grid>
      </Section>
    </>
  )
}

export { HeroSection }

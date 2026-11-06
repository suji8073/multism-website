import { Eyebrow, Heading, Text } from '@/components/atoms/typography'
import { ProcessTimeline } from '@/components/molecules/process-timeline'
import { SectionHeader } from '@/components/molecules/section-header'
import { PhotoBand } from '@/components/layout/photo-band'
import { Section } from '@/components/layout/section'
import { PROCESS } from '@/data/content'

function ProcessSection() {
  return (
    <>
      <PhotoBand image="/images/portfolio/gimpo-marathon.webp">
        <Eyebrow tone="inverse">ON SITE</Eyebrow>
        <Heading size="xl" tone="inverse">
          45건이 넘는 현장, 모두 우리 손으로 세우고 걷었습니다.
        </Heading>
        <Text tone="inverse" className="max-w-xl">
          마라톤 출발선부터 주민의 날 무대까지. 장비를 직접 보유하고 직접 운영하기에 가능한 일입니다.
        </Text>
      </PhotoBand>

      <Section id="process">
        <SectionHeader
          eyebrow="ONE-STOP PROCESS"
          title="상담부터 철거까지 8단계"
          description="처음 연락 주신 담당자가 마지막 철거까지 함께합니다."
        />
        <ProcessTimeline steps={PROCESS} />
      </Section>
    </>
  )
}

export { ProcessSection }

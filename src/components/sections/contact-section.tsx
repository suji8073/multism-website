import { Button } from '@/components/atoms/button'
import { ArrowUpIcon, MapPinIcon } from '@phosphor-icons/react'
import { BadgeList } from '@/components/atoms/badge'
import { Grid, Stack } from '@/components/atoms/layout'
import { Eyebrow, Heading, Text } from '@/components/atoms/typography'
import { ContactCard } from '@/components/molecules/contact-card'
import { InfoRow } from '@/components/molecules/info-row'
import { NameMarquee } from '@/components/molecules/name-marquee'
import { Section } from '@/components/layout/section'
import { COMPANY, toTel } from '@/constants/company'
import { CLIENTS } from '@/data/content'

const SERVICES = [
  '행사·공연 기획',
  '행사대행',
  '무대·음향·조명',
  '장비 렌탈 · 발전차',
  '특수효과',
  '공연 섭외',
  '에어아치 · 애드벌룬',
  '단체복 · 게임도구',
  '현수막 · 인쇄물 · 판촉물',
]

function ClientsSection() {
  return (
    <Section aria-label="함께한 기관" spacing="md">
      <Text size="sm" tone="muted" weight="bold" className="text-center">
        함께한 기관 · 단체 {CLIENTS.length}곳 이상
      </Text>
      <Stack gap={3}>
        <NameMarquee items={CLIENTS.slice(0, 6)} />
        <NameMarquee items={CLIENTS.slice(6)} reverse />
      </Stack>
    </Section>
  )
}

function ContactSection() {
  const { ceo, manager, office } = COMPANY.phones
  const address = COMPANY.address.split(' (')[0]
  return (
    <Section id="contact" tone="primary">
      <Grid cols="split" gap={12} align="center">
        <Stack gap={6}>
          <Eyebrow tone="inverse">YOUR EVENT, OUR RESPONSIBILITY.</Eyebrow>
          <Heading size="xl" tone="inverse">
            행사의 시작부터 마지막까지
            <br />
            멀티에스엠산업이 함께합니다.
          </Heading>
          <BadgeList items={SERVICES} variant="inverse" size="md" label="제공 서비스" />
          <InfoRow inverse icon={MapPinIcon} href={`https://map.naver.com/p/search/${encodeURIComponent(address)}`}>
            {COMPANY.address} · 왕길역 맞은편 도보 7분
          </InfoRow>
          <Button
            variant="accent"
            size="lg"
            className="self-start"
            onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowUpIcon weight="bold" />
            빠른 견적 상담하기
          </Button>
        </Stack>
        <Grid cols="1-2" gap={3} reveal>
          <ContactCard label={ceo.label} value={ceo.number} href={toTel(ceo.number)} />
          <ContactCard label={manager.label} value={manager.number} href={toTel(manager.number)} />
          <ContactCard label={office.label} value={office.number} href={toTel(office.number)} />
          <ContactCard label="이메일" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
        </Grid>
      </Grid>
    </Section>
  )
}

export { ClientsSection, ContactSection }

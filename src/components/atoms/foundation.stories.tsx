import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlurFade } from './blur-fade'
import { ImageFrame } from './image-frame'
import { Grid, Stack } from './layout'
import { Eyebrow, Heading, Highlight, Text } from './typography'

const meta = { title: 'Atoms/Foundation', tags: ['autodocs'] } satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {
  render: () => (
    <Stack gap={4} className="max-w-2xl">
      <Eyebrow tone="accent">ONE-STOP EVENT SERVICE</Eyebrow>
      <Heading as="h1" size="display">
        행사의 처음부터 끝까지, <Highlight>한 회사가</Highlight> 책임집니다.
      </Heading>
      <Heading size="xl">상담부터 철거까지 8단계</Heading>
      <Heading size="md">직접 보유</Heading>
      <Text size="lg">본문 큰 글씨 — 행사에 필요한 모든 장비와 물품을 직접 보유합니다.</Text>
      <Text>본문 기본 — 중간 과정 없이 담당자와 바로 소통합니다.</Text>
      <Text size="sm" tone="muted">보조 설명 — 대여 가격은 견적으로 안내드립니다.</Text>
    </Stack>
  ),
}

export const Images: Story = {
  render: () => (
    <Grid cols="1-2-3" gap={4} className="max-w-4xl">
      <ImageFrame src="/images/portfolio/koban.webp" ratio="4/3" />
      <ImageFrame src="/images/rental/stage.webp" ratio="16/9" />
      <ImageFrame ratio="4/3" />
    </Grid>
  ),
}

export const LayoutGrid: Story = {
  name: 'Grid & Stack',
  render: () => (
    <Grid cols="2-2-4" gap={4}>
      {[1, 2, 3, 4].map((n) => (
        <BlurFade key={n} inView delay={n * 0.1}>
          <div className="bg-primary-soft text-primary flex h-24 items-center justify-center rounded-md font-bold">
            {n}
          </div>
        </BlurFade>
      ))}
    </Grid>
  ),
}

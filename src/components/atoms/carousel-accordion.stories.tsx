import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

const meta = { title: 'Atoms/Accordion', component: Accordion, tags: ['autodocs'] } satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const FAQ: Story = {
  args: { type: 'single', collapsible: true },
  render: (args) => (
    <Accordion {...args} className="max-w-xl">
      <AccordionItem value="a">
        <AccordionTrigger>장비만 렌탈할 수 있나요?</AccordionTrigger>
        <AccordionContent>네, 무대·음향·천막 등 장비만 따로 대여 가능합니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>견적은 어떻게 받나요?</AccordionTrigger>
        <AccordionContent>빠른 견적 상담 폼이나 전화로 문의 주시면 바로 안내드립니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

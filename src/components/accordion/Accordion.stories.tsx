import { useState } from 'react'
import { Accordion, AccordionPropsType } from './Accordion'
import { Story } from '@storybook/react'

export default {
  title: 'MyComponents/Accordion stories',
  component: Accordion
}

const Template: Story<AccordionPropsType> = args => <Accordion {...args} />

const AccordionTemplateProps = {
  //вынесем отдельно повторияющиеся Props
  title: 'Accordion title',
  onClick: (x: boolean) => x
}

export const CollapsedMode2 = Template.bind({})

CollapsedMode2.args = {
  ...AccordionTemplateProps, // используем спред плюс добавляем неповторяющиеся props
  accordionCollapsed: true
}

export const UnCollapsedMode2 = Template.bind({})

UnCollapsedMode2.args = {
  ...AccordionTemplateProps,
  accordionCollapsed: false
}

export const CollapsedMode = () => {
  return (
    <Accordion
      title={'Accordion collapsed title'}
      onClick={x => x}
      accordionCollapsed={true}
    />
  )
}

export const UnCollapsedMode = () => {
  return (
    <Accordion
      title={'Accordion UNcollapsed title'}
      onClick={x => x}
      accordionCollapsed={false}
    />
  )
}

export const CollapseChanging = () => {
  const [collaps, setCollaps] = useState<boolean>(false)
  return (
    <Accordion
      title={'OnClick collapsing accordion'}
      onClick={setCollaps}
      accordionCollapsed={collaps}
    />
  )
}

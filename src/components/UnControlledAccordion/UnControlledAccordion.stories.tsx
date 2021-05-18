import { useState } from 'react'
import { UnControlledAccordion } from './UnControlledAccordion'

export default {
  title: 'UncontrolledAccordion stories',
  component: UnControlledAccordion
}

export const CollapseChanging = () => {
  return <UnControlledAccordion title={'Click here to change collaps'} />
}

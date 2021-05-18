import { useState } from 'react'
import {action} from '@storybook/addon-actions'
import { UnControlledAccordion } from './UnControlledAccordion'

export default {
  title: 'UncontrolledAccordion stories',
  component: UnControlledAccordion
}

const callback = action("collapsed or not")

export const OnMode = () => {
  return <UnControlledAccordion title="Uncontrolled accordion titile" defaultOn={true} />
}
export const OffMode = () => {
  return <UnControlledAccordion title="Uncontrolled accordion titile" defaultOn={false} />
}

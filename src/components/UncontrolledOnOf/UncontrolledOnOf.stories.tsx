import { useState } from 'react'
import {action} from '@storybook/addon-actions'
import { UncontrolledOnOff } from './UncontrolledOnOff'


export default {
  title: 'UncOntrolledOnOf stories',
  component: UncontrolledOnOff
}


export const OnMode = () => {
  return <UncontrolledOnOff defaultOn={true}/>
}
export const OffMode = () => {
  return <UncontrolledOnOff defaultOn={false}/>
}

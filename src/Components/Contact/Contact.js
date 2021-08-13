import React from 'react';
import OC from './OC'
import Groups from './Groups'
import { Typography } from '@material-ui/core';
import Contributors from './Contributors'

export default function SimpleContainer() {

return (
  <div>
    <Groups />
      <OC />
      <Contributors />
  </div>
  )
}
import React from 'react';

export type ValueContext = {
  name: string
}

export const defaultValue: ValueContext = {
  name: 'William Vux'
}
export const MainContext = React.createContext<ValueContext>(defaultValue);
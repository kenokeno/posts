import React, { Component } from 'react'

import Account from './app/views/accounts'
import AppStack from './app/navigations/Stack'

export default class App extends Component{
  render(){
    return <AppStack/>
  }
}
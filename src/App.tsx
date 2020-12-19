import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider  } from 'styled-components'
import Heroes from './pages/Heroes'
import HeroDetail from './pages/HeroDetail'
import './App.css'
import theme from './theme'

function App() {
  return (
    <Router>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path={"/"} component={Heroes} exact  />
            <Route path={'/herodetail'} component={HeroDetail} />
          </Switch>
        </ThemeProvider>
      </RecoilRoot>
    </Router>
  )
}

export default App

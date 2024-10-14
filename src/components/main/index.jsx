import { Button, Page, Text } from '@geist-ui/core'
import Nav from '../nav/index'
import BottomNav from '../bottomNav'
import SwapperC from '../swap'

const Main = () => (
  <div style={{height:"100vh"}}>
    <Nav/>
        <SwapperC/>
    <BottomNav/>
  </div>
)

export default Main
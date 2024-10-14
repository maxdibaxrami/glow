import react from 'react'
import { Badge, Text, Grid, Avatar } from '@geist-ui/react'
import { Bell } from '@geist-ui/react-icons'

const Nav = ()=> {
    return <Grid.Container alignItems='center' justify="space-between" height="100px" width={'100%'} style={{padding:'0px 30px 10px 30px'}}>
        <Grid >
            <Badge.Anchor placement="bottomRight">
                <Badge scale={0.5} type="success" dot padding="5px" ></Badge>
                <Avatar scale={1.5} isSquare src="https://geist-ui.dev/images/avatar.png" />
             </Badge.Anchor>
        </Grid>
        <Grid >
            <Text paddingTop={'8px'} h3>GLOW!</Text>
        </Grid>
        <Grid>
            <Badge.Anchor>
                <Badge type="error" dot padding="5px" />
                <Bell color="black" size={30} />
             </Badge.Anchor>
        </Grid>
  </Grid.Container>
}

export default Nav




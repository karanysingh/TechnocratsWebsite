import React from 'react';
import { Input,Menu, Image, Card, Grid, Icon,Segment} from 'semantic-ui-react';

class header extends React.Component{
    render(){
    return(
               <Segment className='MainHeader' fluid>
                <Menu inverted secondary>
                    
                    <Menu.Item
                    name='home'
                    ><Image className='Logo' src={'http://www.technocratsrobotics.in/images/technocrats.png'}></Image></Menu.Item>
                    <Menu.Menu position='right'>
                    
                    <Menu.Item
                        name='HOME'
                    />
                    <Menu.Item
                        name='ABOUT'
                    />
                    <Menu.Item
                        name='GET STARTED'
                    />
                    <Menu.Item icon='list ui'
                    >
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
               </Segment>
    )}
}

export default header;
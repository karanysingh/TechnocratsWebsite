import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'ROBOCON' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='TcrDivisions' >
        <Menu inverted color={'black'} attached='top' tabular>
          <Menu.Item
            name='ROBOCON'
            active={activeItem === 'ROBOCON'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='ROVERS'
            active={activeItem === 'ROVERS'}
            onClick={this.handleItemClick}
          />
          
        </Menu>

        <Segment attached='bottom'>
        <p className='divisionsPara'>The Asia-Pacific Robot Contest (ABU Robocon) is an International Collegiate level Robotics competition, founded in 2002 by the Asia-Pacific Broadcasting Union. In the competition teams compete with their robots to complete a task within a certain period of time. Each year the competition has different themes, but generally two or more robots must be used to complete the tasks. One of the robots would be manually controlled while the others are automatic. The competition comprises of two stages - the National Contest and the International Contest. The domestic contest will take place in the first week of March 2018, whereas the international contest will take place from 24th Aug 2018 till 28th Aug 2018</p>
        </Segment>
      </div>
    )
  }
}
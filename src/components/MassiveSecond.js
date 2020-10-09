import React from 'react';
import {Image,Button, Grid, GridColumn, Segment, Sidebar} from 'semantic-ui-react';
class MassiveSec extends React.Component {
    render(){
    return(
        <Grid stackable columns={10} padded> 

            <Grid.Row className="sect21">
            <Grid.Column width={5} style={{marginTop:"50px"}}>
                  <span className='DivTwoHead'>
                    <h1>Lorem Ipsum dolor sit</h1>
                    <p>You can do the same using shorthands Menu item text can be defined with the content prop The name prop will be used for content if neither children nor content props are defined</p>
                    <Grid.Column width={1}>
                    <Button className='DivOneBtn' color='olive'>Olive</Button>
                   </Grid.Column>
                    </span>
                </Grid.Column>
                <Grid.Column width={4}></Grid.Column>
                <Grid.Column width={7} style={{marginTop:"50px"}}>
                  <span className='DivTwoHead'>
                    
                <Grid.Row columns={16}>
                    <Grid.Column width={16}>
                    <Image className='DivTwoImage' src={'object1.svg'}></Image>
                    </Grid.Column>
                    </Grid.Row>
                    </span>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="sect22">
                    <Grid.Column width={5}>
                    <p>You can do the same using shorthands Menu item text can be defined with the content prop The name prop will be used for content if neither children nor content props are defined</p>
                    
                    <Button className='DivOneBtn' color='olive'>Olive</Button>
                   </Grid.Column>
            </Grid.Row>
        </Grid>
    )}
}


export default MassiveSec;
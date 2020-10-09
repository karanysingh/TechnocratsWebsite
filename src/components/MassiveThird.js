import React from 'react';
import Header from './Header';
import {Image,Button, Grid, GridColumn, Segment, Sidebar} from 'semantic-ui-react';
class MassiveThd extends React.Component {
    // onPushAnimation = () => {
    //     console.log('SSHoudl Hide');
    //     // document.getElementById('pushBtn').style.opacity = '0.0';
    // }
    render(){
    return(
        <Grid centered stackable columns={16} padded> 
            <Header></Header>
            <div className="sect31">
                
            <Grid.Column width={16} style={{marginTop:"50px"}}>
                  
                  <Grid.Column width={1}>
                    <div className='DivThreeImage'>
                        <img className='divIm31' id='pushBtn' src="https://avatars2.githubusercontent.com/u/29004411?s=400&u=b3fd4732e311ac94d39d78e2b2ea22371cf13fe3&v=4"></img>
                    </div>
                    </Grid.Column>
                    <span className='DivThreeHead'>Push the switch!</span>
                   
                 </Grid.Column>
                
            </div>
        </Grid>
    )}
}


export default MassiveThd;
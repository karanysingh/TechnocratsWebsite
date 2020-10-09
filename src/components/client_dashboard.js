import React from 'react';
import MainGrid from './MainGrid';
import MassiveCard from './MassiveCard';
import MassiveSec from './MassiveSecond';
import MassiveThd from './MassiveThird';
import SmallCard from './SmallCard';
import { Segment,Grid,Card } from 'semantic-ui-react';
import Clock from './clock';
import Sidebar from './Sidebar';
import './dashboard.css';

class Dashboard extends React.Component{
    
    render(){
        const details = [
            //ItemTitle cardActivity Time progress
            ['Item 1',true,'26 Jan 2020',25],
            ['Item 2',false,'26 Jan 2020',6],
            ['Item 3',false,'26 Jan 2020',78],
            ['Item 4',false,'26 Jan 2020',50],
            ['Item 5',false,'26 Jan 2020',13], 
            ];
        return( 
                    <div> 
                    <MassiveThd></MassiveThd>
                    <MassiveCard></MassiveCard>
                    <div className='layer2'></div>
                    </div>
                );
           
    }
    
}

export default Dashboard;
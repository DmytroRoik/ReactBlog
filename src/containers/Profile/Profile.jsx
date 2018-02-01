import React,{Component} from 'react';
import classes from './Profile.css';

import Avatar from '../../components/Profile/Avatar/Avatar';
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo';

class Profile extends Component{
    render(){
        return (
            <div className={classes.Profile}>
                <Avatar gender="female"/>
                <ProfileInfo/>
            </div>
        );
    }
}
export default Profile;
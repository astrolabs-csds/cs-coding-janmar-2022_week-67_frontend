import { useContext } from 'react';
import { Context as UserContext } from './UserContext';

function ProfileSettingsScreen() {

    // Subscribe to the Provider
    const { firstName, lastName, email }  = useContext(UserContext);

    return (
        <div className="container py-5" style={{"maxWidth": "600px"}}>
            <h1>Profile Settings</h1>
            
            <label>First Name</label>
            <input type="text" className="form-control" defaultValue={firstName}/>

            <label>Last Name</label>
            <input type="text" className="form-control" defaultValue={lastName}/>

            <label>Email</label>
            <input type="text" className="form-control" defaultValue={email}/>

        </div>
    )

}

export default ProfileSettingsScreen;
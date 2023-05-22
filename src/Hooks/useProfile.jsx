import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    const email = user?.email;

    useEffect(() => { 
        fetch(`https://ieltsbd-server-production.up.railway.app/api/v1/users/${email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [email]);

    return [profile];
};

export default useProfile;
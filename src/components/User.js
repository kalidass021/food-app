import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);

    useEffect(() => {
        // api call
        const timer = setInterval(() => {
            console.log('setInterval  called');
        });

        return () => {
            clearInterval(timer);
        } 
    }, []);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: RMD, TN, India</h3>
            <h4>Contact: @kalidass021</h4>
        </div>
    );
}


export default User;
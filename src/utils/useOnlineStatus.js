import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    // state variable
    const [onlineStatus, setOnlineStatus] = useState(true);
    // check if online
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    }, []);


    // return online status (boolean value)
    return onlineStatus;

}

export default useOnlineStatus;
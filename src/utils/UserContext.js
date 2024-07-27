import { createContext } from "react";

// 1. create a context using createContext
const UserContext = createContext({
    loggedInuser: "Default User",
});

// exporting a user context
export default UserContext;
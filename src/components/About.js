import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About page</h1>
            {/* <User name={"Kalidass (functional)"} /> */}
            <UserClass name={"Kalidass (class)"} location={"RMD, TN, India (class)"}/>
        </div>
    );
}

export default About;
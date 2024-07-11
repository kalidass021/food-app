import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent compoent did mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
            <h1>About Class Compoenent</h1>
            {/* <User name={"Kalidass (functional)"} /> */}
            <UserClass name={"First"} location={"RMD, TN, India (class)"}/>
            <UserClass name={"Second"} location={"US"} />
        </div> 
        );
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About page</h1>
//             {/* <User name={"Kalidass (functional)"} /> */}
//             <UserClass name={"Kalidass (class)"} location={"RMD, TN, India (class)"}/>
//         </div>
//     );
// }

export default About;
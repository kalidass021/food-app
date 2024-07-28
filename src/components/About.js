import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";
// import the context
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent compoent did mount");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div>
            <h1>About Class Compoenent</h1>
            <div>
                loggedInuser:
                {/* consuming  the context */}
                <UserContext.Consumer>
                    {({loggedInuser}) => <h1 className="text-xl font-bold">{loggedInuser}</h1>}
                </UserContext.Consumer>
            </div>
            {/* <User name={"Kalidass (functional)"} /> */}
            <UserClass name={"First"} location={"RMD, TN, India (class)"}/>
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
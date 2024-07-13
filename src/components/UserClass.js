import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      }
    };
    // console.log(this.props.name, "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name, "Child component did mount");
    // API call
    try {
      const data = await fetch('https://api.github.com/users/kalidass021');
      const json = await data.json();
      this.setState({
        userInfo: json,
      });
    } catch (err) {
      console.error(`Error while fetching the data ${err}`);
      throw err;
    }

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate called');
    if (this.state.count !== prevState.count) {
      // code
    }

    if (this.state.count2 !== prevState.count2) {
      // code
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is  called');
  }

  render() {
    // console.log(this.props.name, "Child render");
    console.log('userInfo', this.state.userInfo);
    const {avatar_url, name, location} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @kalidass021</h4>
      </div>
    );
  }
}

export default UserClass;

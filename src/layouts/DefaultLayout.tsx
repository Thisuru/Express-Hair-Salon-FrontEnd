import React from "react";
import Navbar from "../components/Navbar";

const DefaultLayout = (Children: any) => {
  return class extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {};
    }

    render() {
      //   var tokenObject = localStorage.getItem('loginToken')
      const { ...props } = this.props;
      //   if (!!tokenObject) {
      //     history.push('/dashboard')
      //   }
      return (
        <div className="container-fluid h-100">
          <div>
            <Navbar />
            <div className="col-12 h-100">
              <Children {...props} />
            </div>
          </div>
        </div>
      );
    }
  };
};

export default DefaultLayout;
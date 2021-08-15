import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Layout Related Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    };
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if(this.props.isPreloader === true)
        {
          document.getElementById('preloader').style.display = "block";
          document.getElementById('status').style.display = "block";

          setTimeout(function(){ 

          document.getElementById('preloader').style.display = "none";
          document.getElementById('status').style.display = "none";

          }, 2500);
        }
        else
        {
          document.getElementById('preloader').style.display = "none";
          document.getElementById('status').style.display = "none";
        }
    }
}

  componentDidMount() {

    
    // Scroll Top to 0
    window.scrollTo(0, 0);
    let currentage = this.capitalizeFirstLetter(this.props.location.pathname);

    document.title =
      currentage + " | Nazox - Responsive Bootstrap 4 Admin Dashboard";
  }

  render() {
    return (
      <React.Fragment>
        <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <i className="ri-loader-line spin-icon"></i>
                </div>
            </div>
        </div>


        <div id="layout-wrapper">
        <Header toggleMenuCallback={this.toggleMenuCallback} toggleRightSidebar={this.toggleRightSidebar} />
          <Sidebar
            theme={this.props.leftSideBarTheme}
            type={this.props.leftSideBarType}
            isMobile={this.state.isMobile}
          />
              <div className="main-content">
                {this.props.children}
                <Footer/>
              </div>
        </div>
      </React.Fragment>
    );
  }
}


const mapStatetoProps = state => {
  return {
    ...state.Layout
  };
};
export default Layout;


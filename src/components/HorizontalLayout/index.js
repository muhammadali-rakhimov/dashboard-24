import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Other Layout related Component
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpened: false
    };
  }

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

    // Scrollto 0,0
    window.scrollTo(0, 0);

    const title = this.props.location.pathname;
    let currentage = title.charAt(1).toUpperCase() + title.slice(2);

    document.title =
      currentage + " | Nazox - Responsive Bootstrap 4 Admin Dashboard";
  }

  /**
   * Opens the menu - mobile
   */
  openMenu = e => {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  };
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
          <Header theme={this.props.topbarTheme}
            isMenuOpened={this.state.isMenuOpened}
            openLeftMenuCallBack={this.openMenu}
          />
          <Navbar menuOpen={this.state.isMenuOpened} />
          <div className="main-content">
            {this.props.children}
            <Footer />
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
export default Layout

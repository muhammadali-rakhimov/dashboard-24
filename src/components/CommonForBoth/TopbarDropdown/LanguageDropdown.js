import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

//i18n
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';

// flags
import uzFlag from "../../../assets/images/flags/uz.jpg";
import usFlag from "../../../assets/images/flags/us.jpg";
import russia from "../../../assets/images/flags/russia.jpg";

class LanguageDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      lng : "Uzbek",
      flag : uzFlag
    };
    this.toggle = this.toggle.bind(this);
    this.changeLanguageAction.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu
    }));
  }

  changeLanguageAction = (lng) => {
    
  //set the selected language to i18n
  i18n.changeLanguage(lng);

  if(lng === "rs")
       this.setState({lng : "Russian", flag : russia });
  else if(lng === "uz")
       this.setState({lng : "Uzbek", flag : uzFlag });
  else if(lng === "eng")
       this.setState({lng : "English", flag : usFlag });
 }

  render() {

    return (
      <React.Fragment>
                        <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-none d-sm-inline-block">
                            <DropdownToggle tag="button" className="btn header-item waves-effect">
                                <img className="" src={this.state.flag} alt="Header Language" height="16"/>{'  '}
                                <span className="align-middle">{this.state.lng}</span>
                            </DropdownToggle>

                            <DropdownMenu right>

                                <DropdownItem active={this.state.lng === "Uzbek" ? true : false } href="" onClick={() => this.changeLanguageAction('uz')} className="notify-item">
                                    <img src={uzFlag} alt="user" className="mr-1" height="12"/> <span className="align-middle">Uzbek</span>
                                </DropdownItem>

                                <DropdownItem href="" active={this.state.lng === "Russian" ? true : false } onClick={() => this.changeLanguageAction('rs')} className=" notify-item">
                                    <img src={russia} alt="user" className="mr-1" height="12"/> <span className="align-middle">Russian</span>
                                </DropdownItem>
                                
                                <DropdownItem active={this.state.lng === "English" ? true : false } href="" onClick={() => this.changeLanguageAction('eng')} className="notify-item">
                                    <img src={usFlag} alt="user" className="mr-1" height="12"/> <span className="align-middle">English</span>
                                </DropdownItem>
                                
                            </DropdownMenu>
                        </Dropdown>
      </React.Fragment>
    );
  }
}

export default withNamespaces()(LanguageDropdown);

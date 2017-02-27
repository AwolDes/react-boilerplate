import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import clickOutside from "react-click-outside";
import { IndexLink, Link } from "react-router";

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      MobileNav: false
    };
  }
  componentDidMount() {

  }
  // fix me - I automatically extend when sidebar is clicked
  toggleNav() {
    this.setState({MobileNav: (this.state.MobileNav === false)});
  }

  handleClickOutside() {
    this.setState({MobileNav: false});
  }

  render() {
    return (
      <div id="sideBar" className={classnames({collapsed: this.props.collapse, MobileNav: this.state.MobileNav})}>
        <div className="navWrap">
          <ul className="navList">
            <IndexLink activeClassName="active" to="/" onClick={() => this.toggleNav()}>
              <span className="clearfix">
                <p>Link 1</p>
              </span>
            </IndexLink>
            <Link activeClassName="active" to="/route" onClick={() => this.toggleNav()}>
              <span className="clearfix">
                <p>Link 2</p>
              </span>
            </Link>
          </ul>
        </div>
        <a onClick={this.toggleNav} id="menu-toggle-wrapper" className={classnames({ open: this.state.MobileNav, TransitionAll: false})}>
          <div id="menu-toggle" />
        </a>
      </div>
    );
  }
}
Sidebar.propTypes = {
  collapseSidebar: PropTypes.func.isRequired,
  collapse: PropTypes.bool.isRequired,
  logout: PropTypes.func,
  company: PropTypes.object
};
export default clickOutside(Sidebar);
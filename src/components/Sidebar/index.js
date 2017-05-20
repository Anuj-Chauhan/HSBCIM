import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">

            <li className={classNames({ active: !this.state.uiElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ uiElementsCollapsed: !this.state.uiElementsCollapsed,
                }); return false;
                }}
              >
                <i className="fa fa-edit fa-fw" /> My Documents<span className="fa arrow" />
              </a>

              <ul
                className={classNames({
                  'nav nav-second-level': true,
                  collapse: this.state.uiElementsCollapsed,
                })}
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/panelwells'); }} >
                    Upload new documents
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/button'); }} >
                    Update my documents
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/notification'); }}
                  >
                    See my documents
                  </a>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.samplePagesCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    samplePagesCollapsed: !this.state.samplePagesCollapsed,
                  });
                  return false;
                }}
              >
                <i className="fa fa-files-o fa-fw" />
                &nbsp;Approve Service Provider
      
              </a>
              
            </li>

          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;

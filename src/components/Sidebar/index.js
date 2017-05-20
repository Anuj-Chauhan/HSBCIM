import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    var set_user_type;
    var set_doc_type;
    if (window.userType == 'ServiceProvider')
    {
      set_user_type = <p><i className="fa fa-files-o fa-fw" />&nbsp;Response</p>
      set_doc_type = <p><i className="fa fa-files-o fa-fw" />&nbsp;Request Documents</p>
    }
    else
    {
     set_user_type = <p><i className="fa fa-files-o fa-fw" />&nbsp;Requests</p>
     set_doc_type = <p><i className="fa fa-files-o fa-fw" />&nbsp;My Documents</p>
    }

    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
      setUserType: set_user_type,
      setDocType: set_doc_type,
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
                {this.state.setDocType}
              </a>
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
                {this.state.setUserType}
      
              </a>
              
            </li>

          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;

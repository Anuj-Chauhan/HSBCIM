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
              <a href = "" onClick={(e) => { e.preventDefault(); history.push('/mydocuments');  
                this.setState({
                    samplePagesCollapsed: !this.state.samplePagesCollapsed,
                  });}}>
                <i className="fa fa-edit fa-fw" /> My Documents
              </a>
            </li>

            <li className={classNames({ active: !this.state.samplePagesCollapsed })}>
              <a href = "" onClick={(e) => { e.preventDefault(); history.push('/requests');  
                this.setState({
                    samplePagesCollapsed: !this.state.samplePagesCollapsed,
                  });}}>
                <i className="fa fa-files-o fa-fw" />
                &nbsp;Requests
              </a>
            </li>

            <li className={classNames({ active: !this.state.samplePagesCollapsed })}>
              <a href = "" onClick={(e) => { e.preventDefault(); history.push('/requesthistory');  
                this.setState({
                    samplePagesCollapsed: !this.state.samplePagesCollapsed,
                  });}}>
                <i className="fa fa-sitemap fa-fw" />
                &nbsp;Request History
              </a>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;

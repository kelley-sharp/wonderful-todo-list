import React, { Component } from 'react';

class GroupsList extends Component {
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <ul>
          {this.props.groupNames.map((group, idx) => {
            return (
              <li
                key={group}
                onClick={() => this.props.showGroupDetail(idx, group)}
              >
                {group}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GroupsList;

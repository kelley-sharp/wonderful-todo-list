import React, { Component } from 'react';

class GroupsList extends Component {
  render() {
    return (
      <div className="outer__container">
        <h2>Things to do</h2>
        <div className="list__container">
          {this.props.groupNames.map((group, idx) => {
            return (
              <div key={group} className="item__container">
                <div className="box align">{this.props.renderGroup(group)}</div>
                <div
                  className={
                    this.props.tasks.some(
                      task =>
                        task.group === group &&
                        !this.props.completedTaskIds.includes(task.id)
                    )
                      ? 'task incomplete-task'
                      : 'task completed-task'
                  }
                  onClick={() => this.props.showGroupDetail(idx, group)}
                >
                  {group}
                </div>
                <div className="align">
                  <span className="spacer">
                    {
                      this.props.tasks.filter(
                        task =>
                          task.group === group &&
                          this.props.completedTaskIds.includes(task.id)
                      ).length
                    }
                  </span>
                  out of
                  <span className="spacer">
                    {
                      this.props.tasks.filter(task => task.group === group)
                        .length
                    }
                  </span>
                  tasks complete.
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GroupsList;

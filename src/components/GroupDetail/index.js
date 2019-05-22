import React, { Component } from 'react';
import '../App/styles.css';

class GroupDetail extends Component {
  render() {
    return (
      <div className="group-detail__container">
        <h2>{this.props.groupName}</h2>
        <div className="task-list__container">
          {this.props.groupTasks.map(task => {
            return (
              <div className="task__container">
                {this.props.checkTaskStatus(task)}
                <div
                  className={
                    task.completedAt !== null
                      ? 'task completed-task'
                      : 'task incomplete-task'
                  }
                >
                  {task.task}
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={() => this.props.returnToGroupsList()}>
          Back to Todo groups
        </button>
      </div>
    );
  }
}

export default GroupDetail;

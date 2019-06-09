import React, { Component } from 'react';
import '../App/styles.css';

class GroupDetail extends Component {
  render() {
    return (
      <div className="outer__container">
        <h2>{this.props.groupName}</h2>
        <div className="list__container">
          {this.props.groupTasks.map(task => {
            return (
              <div
                onClick={() => this.props.toggleComplete(task)}
                key={task.id}
                className="item__container"
              >
                {this.props.renderTask(task)}

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

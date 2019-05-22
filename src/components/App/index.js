import React, { Component } from 'react';
import './styles.css';
import GroupsList from '../GroupsList';
import GroupDetail from '../GroupDetail';

export default class App extends Component {
  state = {
    groupNames: [],
    tasks: [],
    selectedGroupName: '',
    completedTaskIds: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/data.json');
    const tasks = await response.json();
    const groupNames = new Set();
    const completed = [];
    //add group names from tasks to group set.
    tasks.forEach(task => {
      groupNames.add(task.group);
      if (task.completedAt !== null) {
        completed.push(task.id);
      }
    });

    this.setState({
      groupNames: Array.from(groupNames),
      completedTaskIds: completed,
      tasks
    });
  }

  showGroupDetail = (idx, group) => {
    this.setState({
      selectedGroupName: group
    });
  };

  handleReturnToGroupsList = e => {
    this.setState({
      selectedGroupName: null
    });
  };

  checkTaskStatus = task => {
    /*If the task has no dependencies, return either check mark (complete), or x (incomplete)
    /*Else if the task has an incomplete dependency, return locked image*/
    /*Else the task's dependencies are all complete, return either check mark or x.*/
    if (!task.dependencyIds[0]) {
      return this.checkMarkOrIncomplete(task);
    } else {
      for (let dependencyId of task.dependencyIds) {
        //if task has incomplete dependencies
        if (!this.state.completedTaskIds.includes(dependencyId)) {
          return (
            <div className="lock">
              <svg width="12" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 7V4a4 4 0 1 1 8 0v3h1.5c.276 0 .5.222.5.51v7.98c0 .282-.229.51-.5.51H.5a.501.501 0 0 1-.5-.51V7.51C0 7.228.229 7 .5 7H2zm4.7 4.827a1.5 1.5 0 1 0-1.4 0v1.683c0 .275.226.49.505.49h.39c.286 0 .505-.22.505-.49v-1.683zM3.125 7h5.75V4c0-1.519-1.287-2.75-2.875-2.75S3.125 2.481 3.125 4v3z"
                  fill="#9B9B9B"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          );
        } else {
          return this.checkMarkOrIncomplete(task);
        }
      }
    }
  };

  checkMarkOrIncomplete = task => {
    if (task.completedAt !== null) {
      return (
        <div className="check-mark">
          <i className="fas fa-check" />
        </div>
      );
    } else {
      return (
        <div className="check-mark hidden">
          <i className="fas fa-check" />
        </div>
      );
    }
  };

  render() {
    if (this.state.selectedGroupName) {
      return (
        <GroupDetail
          key={this.state.selectedGroupName.name}
          groupName={this.state.selectedGroupName}
          groupTasks={this.state.tasks.filter(
            task => task.group === this.state.selectedGroupName
          )}
          returnToGroupsList={this.handleReturnToGroupsList}
          checkTaskStatus={this.checkTaskStatus}
        />
      );
    }
    return (
      <GroupsList
        groupNames={this.state.groupNames}
        showGroupDetail={this.showGroupDetail}
      />
    );
  }
}

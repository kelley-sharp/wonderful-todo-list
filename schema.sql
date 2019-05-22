CREATE TABLE groups
(
  id serial PRIMARY KEY,
  group_name varchar(50) NOT NULL UNIQUE
);

CREATE TABLE tasks
(
  id serial PRIMARY KEY,
  task_name varchar(50) NOT NULL,
  completed_at datetime,
  group_id integer FOREIGN KEY REFERENCES groups(id)
);

CREATE TABLE tasks_dependencies
(
  id serial PRIMARY KEY,
  task_id integer FOREIGN KEY REFERENCES tasks(id) NOT NULL,
  depends_on_task_id integer FOREIGN KEY REFERENCES tasks(id) NOT NULL,
  UNIQUE (task_id, depends_on_task_id)
);





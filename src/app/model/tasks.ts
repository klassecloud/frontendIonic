enum State {
  finished= 'finished',
  inProcess = 'inProcess',
  started = 'started'
}

export interface Tasks {
  id: number;
  courseId: number;
  parentId: number;
  title: string;
  content: string;
  state: State;
  dueDate: Date;
}

import {Subject} from './subject';

enum State {
  finished= 'finished',
  inProcess = 'inProcess',
  started = 'started'
}
export interface Task {
  id: number;
  title: string;
  content: string;
  dueDate: Date;
  subject: Subject;
}

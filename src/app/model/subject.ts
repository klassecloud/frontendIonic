import {Task} from './task';
import {Course} from './course';

export interface Subject {
    id: number;
    name: string;
    description: string;
    classroom: Course;
    tasks: Task[];
}

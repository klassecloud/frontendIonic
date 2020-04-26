export interface Course {
  name: string;
  description: string;
  _links: CourseLinks;
}

export interface CourseLinks {
  self: Link;
  tasks: Link;
}

export interface Link {
  href: string;
}

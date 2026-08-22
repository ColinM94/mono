import type { Person } from 'types/person';
import type { Task } from 'types/task';

export const defaultPerson = (): Person => ({
  id: '',
  name: '',
});

export const defaultTask = (): Task => ({ id: '', dueDate: 0, name: '', checked: false });

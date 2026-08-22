import { TasksPage } from 'pages/tasksPage/tasksPage.tsx';
import type { Section } from 'types/section';

export const sections: Record<string, Section> = {
  tasks: {
    id: 'tasks',
    icon: 'CheckBox',
    name: 'Tasks',
    component: TasksPage,
  },
} as const;

import type { Film, Book } from 'types/entertainment';
import type { Person } from 'types/person';
import type { ShoppingItemData } from 'types/shopping';
import type { Task } from 'types/task';

export const defaultPerson = (): Person => ({
  id: '',
  name: '',
});

export const defaultfilm = (): Film => ({
  id: '',
  name: '',
  director: '',
  coverImageUrl: '',
  backgroundImageUrl: '',
  rating: 0,
});

export const defaultBook = (): Book => ({
  id: '',
  isbn: '',
  title: '',
  author: '',
  coverImageUrl: '',
  rating: 0,
});

export const defaultTask = (): Task => ({ id: '', dueDate: 0, name: '', checked: false });

export const defaultShoppingItem = (): ShoppingItemData => ({
  id: '',
  name: '',
  checked: false,
});

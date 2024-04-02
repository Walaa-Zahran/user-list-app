import { User } from './data.interface';

export interface UserList {
  first_name: any;
  last_name: any;
  page: 1;
  per_page: 6;
  total: 12;
  total_pages: 2;
  data: User[];
}

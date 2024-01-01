import { IDepartment } from 'app/shared/model/department.model';

export interface IPosition {
  key?: number | null;
  id?: number;
  leadership?: string | null;
  department?: IDepartment | null;
}

export const defaultValue: Readonly<IPosition> = {};

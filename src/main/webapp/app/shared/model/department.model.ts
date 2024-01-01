export interface IDepartment {
  key?: number | null;
  id?: number;
  team?: string | null;
}

export const defaultValue: Readonly<IDepartment> = {};

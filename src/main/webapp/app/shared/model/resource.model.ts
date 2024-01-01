import { ITeam } from 'app/shared/model/team.model';

export interface IResource {
  key?: number | null;
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  teamRole?: string | null;
  exchangeAllowed?: boolean | null;
  team?: ITeam | null;
}

export const defaultValue: Readonly<IResource> = {
  exchangeAllowed: false,
};

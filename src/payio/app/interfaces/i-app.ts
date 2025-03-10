import { EPayuioAppSlug } from '../enums';

export interface IPayioApp {
  // #region Properties (10)

  active: boolean;
  description: string;
  downloadUrl: string;
  id: string;
  name: string;
  slug: EPayuioAppSlug;
  price: number;
  secret: string;
  version: string;
  tags: string[];

  // #endregion Properties (10)
}

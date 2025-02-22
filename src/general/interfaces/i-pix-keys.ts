// src/models/base.entity.ts

import { EPixKey } from '../enums';

export interface IPixKeys {
  // #region Properties (7)

  active: boolean;
  key: string;
  type: EPixKey;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  description: string;
  isDefault: boolean;
  // #endregion Properties (7)
}

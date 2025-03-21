import { IPayioJwtPayloadUser } from '../interfaces/i-payload-user';

export class PayioJwtPayloadUserEntity implements IPayioJwtPayloadUser {
  // #region Properties (6)

  public email: string | null = null;
  public id: string = '';
  public internationalCode: string = '';
  public name: string = '';
  public phoneNumber: string = '';

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<PayioJwtPayloadUserEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}

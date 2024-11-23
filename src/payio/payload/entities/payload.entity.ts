import { PayioPermissionRoleEntity } from '../../permissions';
import { IPayioJwtPayload } from '../interfaces/i-payload';
import { IPayioJwtPayloadApp } from '../interfaces/i-payload-app';
import { IPayioJwtPayloadInfo } from '../interfaces/i-payload-info';
import { PayioJwtPayloadDeviceEntity } from './payload-device.entity';
import { PayioJwtPayloadSubscriptionEntity } from './payload-subscription.entity';
import { PayioJwtPayloadUserEntity } from './payload-user.entity';

export class PayioJwtPayloadEntity implements IPayioJwtPayload {
  // #region Properties (13)

  public app: IPayioJwtPayloadApp | null = null;
  public aud: string = '';
  public currentSessionId: string | null = null;
  public device: PayioJwtPayloadDeviceEntity | null = null;
  public exp: number = 0;
  public iat: number = 0;
  public info: IPayioJwtPayloadInfo | null = null;
  public iss: string = '';
  public permissions: PayioPermissionRoleEntity[] = [];
  public sub: string = '';
  public subscription: PayioJwtPayloadSubscriptionEntity | null = null;
  public type: string | null = null;
  public user: PayioJwtPayloadUserEntity | null = null;

  // #endregion Properties (13)

  // #region Constructors (1)

  constructor(data?: Partial<PayioJwtPayloadEntity>) {
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

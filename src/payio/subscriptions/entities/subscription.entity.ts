import { CustomVariableEntity, EIntervalType, ESubsStatus, PaymentMethodEntity } from '../../../general';
import { IPayioSubscription } from '../interfaces/i-subscription';
import { PayioSubscriptionItemEntity } from './subscription-item.entity';
import { PayioSubscriptionLogEntity } from './subscription-log.entity';

export class PayioSubscriptionEntity implements IPayioSubscription {
  // #region Properties (21)

  public amount: number = 0;
  public cancellationReason: string = '';
  public createdAt: Date = new Date();
  public customVariables: CustomVariableEntity[] = [];
  public expiresAt: Date = new Date();
  public id: string = '';
  public interval: number = 0;
  public intervalType: EIntervalType = EIntervalType.MONTHS;
  public items: PayioSubscriptionItemEntity[] = [];
  public logs: PayioSubscriptionLogEntity[] = [];
  public notes: string = '';
  public payment: PaymentMethodEntity = new PaymentMethodEntity();
  public planId: string = '';
  public planName: string = '';
  public renewPaymentDate: Date = new Date();
  public renovatedAt: Date = new Date();
  public startsAt: Date = new Date();
  public status: ESubsStatus = ESubsStatus.PENDING;
  public suspendedTimes: number = 0;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (21)

  // #region Constructors (1)

  constructor(data?: Partial<PayioSubscriptionEntity>) {
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

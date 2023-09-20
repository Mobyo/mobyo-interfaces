import { BaseEntity } from '../../general';
import { MemberRulesEnum, MemberTypeEnum } from '../enums';
import { IMember } from '../interfaces';

export class MemberEntity extends BaseEntity implements IMember {
    // #region Properties (13)

    public active: boolean = true;
    public companyName: string = '';
    public containerName: string = '';
    public email: string = '';
    public name: string = '';
    public partnerId: string = '';
    public phoneNumber: string = '';
    public photoURL: string = '';
    public rule: MemberRulesEnum = MemberRulesEnum.USER;
    public tags: string[] = [];
    public type: MemberTypeEnum = MemberTypeEnum.CLIENT;
    public uid: string = '';

    // #endregion Properties (13)

    // #region Constructors (1)

    constructor(data?: Partial<MemberEntity>) {
        super(data);
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

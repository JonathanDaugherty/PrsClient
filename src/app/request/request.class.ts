import {User} from '../user/user.class'
import {Requestlines} from 'src/app/requestlines/requestlines.class'
export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionreason: string = "";
    deliveryMode: string = "PICKUP";
    status: string = "NEW";
    total: number = 0;
    userId: number = 0;
    user: User = null;
    requestLines: Requestlines[] = null;
}

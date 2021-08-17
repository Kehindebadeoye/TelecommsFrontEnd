import { User } from "./user";

export class Dataplan {
    id: number;
    name: string;
    price: number;
    devices: number;
    user: User[];

    constructor(id, name= '', price = 0, devices = 0, user){
        this.id = id
        this.name = name
        this.price = price
        this.user = user
    }

}

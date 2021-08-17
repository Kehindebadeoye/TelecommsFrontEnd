import { User } from "./user";

export class Device {
    id: number;
    name: string;
    description: string;
    price: number;
    url: string;
    user: User;
    number: number;

    constructor(id, name='', description = "", price = 0, url = "", number=0, user ){
        this.id = id;
        this.name = name;
        this.description = description;
        this. price = price;
        this.url = url;
        this.user=user;
        this.number = number;
    }
}

export default Device;

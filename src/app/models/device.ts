export class Device {
    id: number;
    name: string;
    description: string;
    price: number;
    url: string;

    constructor(id, name, description = "", price = 0, url = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png"){
        this.id = id
        this.name = name
        this.description = description
        this. price = price
        this.url = url
    }
}

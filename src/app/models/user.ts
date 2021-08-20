import { Dataplan } from "./dataplan";

export class User {
 cid: number;
 username: string;
 password: string;
 plan: Dataplan[];
 email: string;
 mailingAddress: string;

 constructor(cid, username="", password = "", plan =[],email="", mailingAddress=""){
     this.cid= cid;
     this.username = username;
     this.password = password;
     this.plan = plan;
     this.email = email;
     this.mailingAddress = mailingAddress;
 }

}

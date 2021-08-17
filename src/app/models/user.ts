import { Dataplan } from "./dataplan";

export class User {
 cid: number;
 username: string;
 password: string;
 plan: Dataplan[];

 constructor(cid, username="", password = "", plan =[]){
     this.cid= cid;
     this.username = username;
     this.password = password;
     this.plan = plan;
 }

}

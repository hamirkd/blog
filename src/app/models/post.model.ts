export class Post{
    $key:string;
    title:string;
    content:string;
    loveIts:number;
    created_at:Date;
    constructor(){
        this.loveIts=0;
        this.created_at=new Date();
    }
}
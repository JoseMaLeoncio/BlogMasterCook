export class users{
    id?:number=null;
    usr:string="";
    pass:string="";
    recets:recets[]=[new recets({})];
    constructor(data: users | {} = {}) {
        Object.assign(this, data);
    }
}
/*
export class modules{
    idmodule?: number=null;
    name:string=null;
    route:string="";
    constructor(data: modules | {} = {}) {
        Object.assign(this, data);
    }
    ng g s --skiptest --flat
}*/

export class recets{
    idrecet?:number=null;
    name:string="";
    author:string="";
    imagen:string ="";
    preparation:string="";
    description:string="";
    constructor(data:recets | {}={}){
        Object.assign(this,data);
    }
}
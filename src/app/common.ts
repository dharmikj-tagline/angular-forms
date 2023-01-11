export interface UserData{
    id?: number, 
    fname : string ,
    lname : string ,
    gender : string,
    address : Address,
    date : string,
    hobbies : string[],
    mobile : string ,
    checkbox?: boolean,
}

export interface Address{
    country : string,
    state : string,
    city : string,
}

export interface CountryList{
    id:number,
    name : string,
}

export interface StateList{
    id:number,
    name : string,
    country : number
}

export interface CityList{
    id:number,
    name : string,
    state : number
}


export interface StateFinds{
    name : string,
    city : string[],
}
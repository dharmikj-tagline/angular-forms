export interface UserData{
    
    fname : string ,
    lname : string ,
    gender : string,
    address : Address,
    date : string,
    email : string  ,
    mobile : string ,
    checkbox?: boolean,
    id?: number 
}

export interface Address{
    country : string,
    state : string,
    city : string,
}

export interface CountryList{
    name : string,
    state : string[],
}

export interface StateFinds{
    name : string,
    city : string[],
}
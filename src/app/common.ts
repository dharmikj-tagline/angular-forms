export interface UserData {
    id: number;
    fname: string;
    lname: string;
    gender: string;
    email: string;
    mobile: string;
    address: Address;
  }
  
 export interface Address {
    country: string;
    state: string;
    city: string;
  }
  
 export interface CountryList{
    name : string,
    state : string[]
  }

  export interface StateFinds{
    name : string,
    city : string[]
  }

  export interface Country{
    id : number,
    name : string
  }

  export interface State{
    id : number,
    name : string ,
    country : number
  }

  export interface City{
    id : number,
    name : string ,
    state : number
  }
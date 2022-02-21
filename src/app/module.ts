export interface UserData{
    id? : Number;
    username : String;
    phoneno : Number;
    email : String;
    country : String;
    state : String;
    city : String;
    
}
export interface LoginData {
    email : string,
    password : string
}
export interface TokenData{
    token : string
}
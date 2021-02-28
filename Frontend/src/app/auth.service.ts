import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

loggedProfIn()
{
  return !!localStorage.getItem('tokenProf')
}
courseProf(id){

  return !!(localStorage.getItem('profId') == id)
}
loggedUserIn()
{
  return !!localStorage.getItem('tokenUser')
}
logIn(){
  return !!(localStorage.getItem('tokenUser') || localStorage.getItem('tokenProf'))
}
getUserToken()
  {
    return localStorage.getItem('tokenUser')
  }
getProfToken()
  {
    return localStorage.getItem('tokenProf')
  }  

}

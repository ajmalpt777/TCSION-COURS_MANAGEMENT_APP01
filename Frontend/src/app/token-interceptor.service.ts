import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import{ AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,nxt)
  {
    let authService=this.injector.get(AuthService)
    let tokenizedReq=req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getProfToken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)
  }

}

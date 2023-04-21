import { Injectable } from '@angular/core';

const TOKEN_KEY = "tokenDashboard"

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {}

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token)
  }

  destroyToken() {
    localStorage.removeItem(TOKEN_KEY)
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
}

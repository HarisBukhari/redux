import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../Models/AuthResponseData.model';
import { jobs } from '../Models/jobs.model';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  job = {
    company: "",
    position: "string",
    author: "string",
    status: "string",
    description: "string",
    creadtedBy: "string",
    id: 1,
  }
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE}`,
      { email, password, returnSecureToken: true })
  }

  formatUser(data: any) {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000)
    const user = new User(data.email, data.idToken, data.localId, expirationDate)
    return user
  }

  check(id: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set('Authorization', 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmRjMWU1OGVhMTQ2YjFlNzgwYmQ2YTMiLCJuYW1lIjoiSGFyaXMiLCJpYXQiOjE2NjI5NjY3MzQsImV4cCI6MTY2NTU1ODczNH0.cALS_LucrEp0of2EjHo4kZMubtYxCGJzx0Qu7LDJi_M")
    return this.http.get('https://jobs-api-node.herokuapp.com/api/v1/jobs/' + id, { 'headers': headers })
  }

  formatJob(data: any){
    this.job.company = data.job.company
    this.job.position = data.job.position
    this.job.author = data.job.createdBy
    this.job.status = data.job.position
    this.job.description = data.job.description
    this.job.creadtedBy = data.job.createdBy
    this.job.id = data.job._id
    return this.job
  }

}

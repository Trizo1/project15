import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {
  routeApi = 'http://localhost:3000/workers';
  constructor(private http: HttpClient) {
  }

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorker(worker: MyWorker) {
    let body = { id: worker.id, name: worker.name, surname: worker.surname, type: worker.type, phone: worker.phone };
    return this.http.post(this.routeApi, body).toPromise();
  }

  deleteWorker(id: number) {
    this.http.delete(`${this.routeApi}/${id}`).subscribe(() => console.log("Пользователь удален"));
  }

  saveWorker(worker: MyWorker) {
    let body = { id: worker.id, name: worker.name, surname: worker.surname, type: worker.type, phone: worker.phone };
    this.http.put(`${this.routeApi}/${body.id}`, body).subscribe(() => console.log("Пользователь обновлен"));
  }

}

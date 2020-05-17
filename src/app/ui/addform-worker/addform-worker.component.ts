import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  myWorkerType = MyWorkerType;
  mask = ['8', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  workerForm: FormGroup;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit() {
    this.workerForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('[а-яА-ЯёЁa-zA-Z]+')]),
      surname: new FormControl(null, [Validators.required, Validators.pattern('[а-яА-ЯёЁa-zA-Z]+')]),
      type: new FormControl(null, [Validators.required,]),
      phone: new FormControl(null, [Validators.required,]),
    });
  }

  onAddWorker() {
    let worker: MyWorker = {
      name: this.workerForm.value.name,
      surname: this.workerForm.value.surname,
      type: this.workerForm.value.type,
      phone: this.workerForm.value.phone
    };
    worker.phone = worker.phone.replace(/\D/g, '');
    if (worker.phone.length == 11) {
      try {
        this.addWorker.emit(worker);
      } catch (err) {
        console.log(err);
      } finally {
        this.workerForm.reset();
      }
    } else
      alert('Проверьте правильность введенных данных');
  }

  checkWorker(name: string, surname: string, phone: string) {
    if (name.length > 0 && surname.length > 0 && phone.length == 11) {
      return true;
    }
    else {
      alert('Проверьте правильность введенных данных');
      return false;
    }
  }

}

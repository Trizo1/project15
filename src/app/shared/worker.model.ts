import { FormGroup } from '@angular/forms';

export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
    phone: string;
    workerForm?: FormGroup;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager,
}
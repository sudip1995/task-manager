import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskManagerConfig} from './task-manager.config';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor(private httpClient: HttpClient) { }

  public upload(ticketId: string, formData: FormData) {
    return this.httpClient.post<any>(TaskManagerConfig.uploadAttachmentApi(ticketId), formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}

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

  downloadFile(id: string) {
    return this.httpClient.get(TaskManagerConfig.downloadAttachmentApi(id), {responseType: 'blob'});
  }

  deleteFile(id: string) {
    return this.httpClient.delete(TaskManagerConfig.deleteAttachmentApi(id));
  }
}

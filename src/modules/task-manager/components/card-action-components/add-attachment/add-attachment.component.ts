import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {CardActionInterface} from '../../../interfaces/card-action.interface';
import {TaskManagerService} from '../../../task-manager.service';
import {catchError, map} from 'rxjs/operators';
import {HttpEventType} from '@angular/common/http';
import {of} from 'rxjs';

@Component({
  selector: 'app-add-attachment',
  templateUrl: './add-attachment.component.html',
  styleUrls: ['./add-attachment.component.scss']
})
export class AddAttachmentComponent implements OnInit, CardActionInterface {

  @ViewChild('fileDropRef', {static: false}) fileDropEl: ElementRef;
  files: any[] = [];
  cardDetails: any;
  fileSizeError: string;

  constructor(private taskManagerService: TaskManagerService) {

  }

  ngOnInit(): void {
  }

  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  onFileSelect($event) {
    this.prepareFilesList($event.target.files);
  }

  prepareFilesList(files: any[]) {
    this.fileSizeError = '';
    for (const file of files) {
      file.inProgress = false;
      file.progress = 0;
      if (file.size > 25 * 1024 * 1024) {
        this.fileSizeError = 'File size should be below 25 MB';
        continue;
      }
      this.files.push(file);
    }
    this.fileDropEl.nativeElement.value = '';
    this.uploadFiles();
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  uploadFiles() {
    this.files.forEach(file => {
      if (file.inProgress === false) {
        this.uploadFile(file);
      }
    });
  }

  onClick(): boolean {
    return true;
  }

  private uploadFile(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    file.inProgress = true;
    this.taskManagerService.upload(this.cardDetails.id, formData).pipe(map(event => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          file.progress = Math.round(event.loaded * 100 / event.total);
          break;
        case HttpEventType.Response:
          return event;
      }
    }), catchError(err => {
      file.inProgress = false;
      return of(`${file.data.name} upload failed.`);
    })).subscribe(event => {
      if (typeof event === 'object') {
        file.inProgress = false;
        console.log(event.body);
      }
    });
  }
}

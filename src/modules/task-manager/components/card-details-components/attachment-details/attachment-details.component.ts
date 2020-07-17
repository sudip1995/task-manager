import {Component, Input, OnInit} from '@angular/core';
import {TaskManagerService} from '../../../task-manager.service';

@Component({
  selector: 'app-attachment-details',
  templateUrl: './attachment-details.component.html',
  styleUrls: ['./attachment-details.component.scss']
})
export class AttachmentDetailsComponent implements OnInit {
  @Input() files: any[];
  constructor(private taskManagerService: TaskManagerService) { }

  ngOnInit() {
    console.log(this.files);
  }

  deleteFile(index: number) {

  }

  download(file: any) {
    this.taskManagerService.downloadFile(file.id).subscribe(res => {
      console.log(res);
      if (res.size !== 0) {
        this.saveAsBlob(res);
      }
    });
  }

  saveAsBlob(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}

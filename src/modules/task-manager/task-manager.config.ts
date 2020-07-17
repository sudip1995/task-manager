import {environment} from '../../environments/environment';

// @dynamic
export class TaskManagerConfig {

  static get rootApi(): string {
    return environment.task_manager_api;
  }

  static uploadAttachmentApi(ticketId: string): string {
    return `${TaskManagerConfig.rootApi}/api/attachment/upload?ticketId=${ticketId}`;
  }

  static downloadAttachmentApi(id: string) {
    return `${TaskManagerConfig.rootApi}/api/attachment/download?id=${id}`;
  }
}

import {AddChecklistComponent} from './components/card-action-components/add-checklist/add-checklist.component';
import {CopyCardComponent} from './components/card-action-components/copy-card/copy-card.component';
import {MoveCardComponent} from './components/card-action-components/move-card/move-card.component';

export class TaskManagerComponentRegistry {
  static components: Map<string, any>;

  public static init() {
    this.components = new Map<string, any>();

    this.components.set('AddChecklistComponent', AddChecklistComponent);
    this.components.set('CopyCardComponent', CopyCardComponent);
    this.components.set('MoveCardComponent', MoveCardComponent);
  }
}

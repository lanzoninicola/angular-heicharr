import { JobIdModel } from './jobid.model';

export class JobidCollection {
  items: JobIdModel[];

  constructor(jobid: JobIdModel[]) {
    this.items = jobid;
  }

  getItems(): JobIdModel[] {
    return this.items;
  }

  add(item: JobIdModel) {
    this.items.push(item);
  }

  findItemById(id: number): JobIdModel {
    return this.items.find((item) => item.getId() === id) || ({} as JobIdModel);
  }
}

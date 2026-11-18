export class DataEngine {

  constructor() {
    this.datasets = {};
  }

  async load(name, data) {
    this.datasets[name] = data;
  }

  resolveDataset(name) {
    return this.datasets[name];
  }

  resolveCollection(dataset, collection) {
    return this.datasets[dataset]?.[collection];
  }

}

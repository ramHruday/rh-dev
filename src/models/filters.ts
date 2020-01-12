import { IAssetAttribute } from './asset';

/**
 * A Filters object that return a new copy of itself after every operation
 */
export class FiltersObject {
  static fromJSONString(json: string) {
    try {
      const obj: { [category in IAssetAttribute]: string[] } = JSON.parse(json);
      const filters = Object.fromEntries(Object.entries(obj).map(([category, values]) => [category, new Set(values)]));
      return new FiltersObject(filters);
    } catch (e) {
      console.error('Invalid JSON', e);
      throw new Error('JSONError: Invalid JSON');
    }
  }

  constructor(public filters?: { [category in IAssetAttribute]?: Set<string> }) {
    this.filters = filters ? this.filtersCopy() : {};
  }

  get count() {
    return Object.values(this.filters!).reduce((count, values) => count + (values ? values.size : 0), 0);
  }

  get categories() {
    return Object.keys(this.filters!) as IAssetAttribute[];
  }

  private filtersCopy() {
    return Object.fromEntries(Object.entries(this.filters!).map(([key, values]) => [key, new Set(values)]));
  }

  clone() {
    return new FiltersObject(this.filters);
  }

  add(value: string, category: IAssetAttribute) {
    const values = this.filters![category] || new Set();
    values.add(value);
    this.filters![category] = values;
    return new FiltersObject(this.filters);
  }

  remove(value: string, category: IAssetAttribute) {
    const values = this.filters![category] || new Set();
    values.delete(value);
    this.filters![category] = values;
    return new FiltersObject(this.filters);
  }

  toggle(value: string, category: IAssetAttribute) {
    const values = this.filters![category] || new Set();
    return values.has(value) ? this.remove(value, category) : this.add(value, category);
  }

  removeAll(category: IAssetAttribute) {
    if (this.filters && this.filters[category]) {
      delete this.filters[category];
    }
    return new FiltersObject(this.filters);
  }

  clear() {
    return new FiltersObject();
  }

  toJSONString() {
    return JSON.stringify(
      Object.fromEntries(
        Object.entries(this.filters!).map(([category, values]) => [category, Array.from(values || [])])
      )
    );
  }
}

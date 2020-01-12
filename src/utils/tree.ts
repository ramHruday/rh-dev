import { IFacetValue } from '../models';

export class TreeNode<T> {
  private children: TreeNode<T>[];

  get hasChild() {
    return !!this.children.length;
  }

  constructor(public content: T, public parent: TreeNode<T> | null = null) {
    this.content = content;
    this.children = [];
    this.parent = parent;
  }

  getChildren() {
    return this.children;
  }

  addChild(content: T) {
    const node = new TreeNode(content, this);
    this.children.push(node);
  }

  findChild(matcher: (content: T) => boolean): TreeNode<T> | null {
    return this.children.find(node => matcher(node.content)) ?? null;
  }
}

export class Tree<T> {
  root: TreeNode<T>;

  constructor(private rootContent: T) {
    this.root = new TreeNode(this.rootContent);
  }

  getBranch(node: TreeNode<T>) {
    const nodes: TreeNode<T>[] = [node];

    while (node.parent !== null) {
      nodes.push(node.parent);
      node = node.parent;
    }

    return nodes.reverse();
  }
}

export type ILocationTree = { [country: string]: Tree<{ name: string; count: number; value: string }> };

export function convertLocationToTree(locations: IFacetValue[]) {
  const result: ILocationTree = {};

  locations.forEach(location => {
    // all values start with '/', ignore first value as its empty.
    // TODO: Generalize this to arbitrary depth. Use stack.
    const [country, state, city] = location.value?.split('/').slice(1);

    if (country && !result[country]) {
      result[country] = new Tree({ name: country, count: location.count!, value: `/${country}` });
    }

    if (state) {
      const countryRoot = result[country].root;
      let stateNode = countryRoot.findChild(content => content.name === state);

      if (!stateNode) {
        countryRoot.addChild({ name: state, count: location.count!, value: `/${country}/${state}` });
      } else {
        if (city) {
          stateNode.addChild({ name: city, count: location.count!, value: `/${country}/${state}/${city}` });
        }
      }
    }
  });

  return result;
}

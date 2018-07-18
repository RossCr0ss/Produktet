export class MetaTag {
  name: string;
  content: string;

  constructor(metaTag?: any) {
    this.name = metaTag && metaTag.name || null;
    this.content = metaTag && metaTag.content || null;
  }
}

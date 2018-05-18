export interface TinworkCard extends Object {
  avatar?: string;
  title: string;
  subtitle: string;
  content: string;
  image?: string;
  actions?: Array<any>;
  actionType?: string;
  chips?: any;
}
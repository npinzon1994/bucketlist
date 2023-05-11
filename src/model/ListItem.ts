class ListItemObject {
  description: string;
  year: number;
  id: string;

  constructor(itemDescription: string, itemYear: number, id: string) {
    this.description = itemDescription;
    this.year = itemYear;
    this.id = id;
  }
}

export default ListItemObject;

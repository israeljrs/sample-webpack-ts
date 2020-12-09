export class Messages {

  private title: string;
  private description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  showMessage(): void {
    console.log(`titulo: ${this.title} and description: ${this.description}`);
  }

}

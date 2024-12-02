export class Channel {
  channelId: number;
  description: string;
  status_id: number;
  name: string;
  channel_icon:string;

  constructor() {
    this.channelId = 0;
    this.description = '';
    this.status_id = 0;
    this.name = '';
    this.channel_icon = '';
  }
}

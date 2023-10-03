import { Component, signal, OnInit, computed } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages = signal<String[]>([]);
  totalMessages = computed(() => {
    return this.messages().length;
  });

  constructor(private service: MessageService) {}

  ngOnInit() {
    this.service.getMessages().subscribe({
      next: (messages) => this.messages.set(messages),
      complete: () => console.info('Message processing complete')
    });
  }

  addMessage() : void {
    this.messages().push('Message 2');

  }
}

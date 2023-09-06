import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(private messagesRepo: MessagesRepository) {

  }

  findOne(id: string): Promise<any> {
    return this.messagesRepo.findOne(id);
  }

  findAll(): Promise<any> {
    return this.messagesRepo.findAll();
  }

  create(content: string): Promise<any> {
    return this.messagesRepo.create(content);
  }
}

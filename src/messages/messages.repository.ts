import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string): Promise<any> {
    const contents: string = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll(): Promise<any> {
    const contents: string = await readFile('messages.json', 'utf8');
    return JSON.parse(contents);
  }

  async create(content: string): Promise<any> {
    const contents: string = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id: number = Math.floor(Math.random() * 999);
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}

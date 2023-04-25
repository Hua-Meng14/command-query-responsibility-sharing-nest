import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entities/person/person';
import { PersonController } from './person.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPersonHandler } from './queries/handlers/get-person.handler/get-person.handler';
import { SavePersonHandler } from './commands/handler/save-person.handler/save-person.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Person]), CqrsModule],
  controllers: [PersonController],
  providers: [GetPersonHandler, SavePersonHandler]
})

export class PersonModule { }

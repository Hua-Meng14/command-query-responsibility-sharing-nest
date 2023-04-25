import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPersonQuery } from './queries/impl/get-person.query/get-person.query';
import { SavePersonCommand } from './commands/impl/save-person.command/save-person.command';


@Controller('person')
export class PersonController {
    constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) { }



    @Post('add')
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform: true }))
    async createEmployee(@Body() newPerson: SavePersonCommand) {
        return await this.commandBus.execute(newPerson);
    }

    @Get('all')
    async getAll() {
        return await this.queryBus.execute(new GetPersonQuery());
    }

}

import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPersonQuery } from './queries/impl/get-person.query/get-person.query';


@Controller('person')
export class PersonController {
    constructor(private readonly queryBus: QueryBus) { }

    @Get('all')
    async getAll() {
        return await this.queryBus.execute(new GetPersonQuery());
    }

}

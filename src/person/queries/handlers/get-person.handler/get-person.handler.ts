import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/entities/person/person";
import { Repository } from "typeorm";
import { GetPersonQuery } from "../../impl/get-person.query/get-person.query";

@QueryHandler(GetPersonQuery)
export class GetPersonHandler implements IQueryHandler<GetPersonQuery> {
    constructor(
        @InjectRepository(Person) private personRepo: Repository<Person>,
    ) { }
    async execute(query: GetPersonQuery): Promise<Person[]> {
        return await this.personRepo.find();
    }
}
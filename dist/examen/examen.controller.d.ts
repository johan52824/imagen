import { ExamenService } from './examen.service';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';
import { Examen } from './entities/examen.entity';
export declare class ExamenController {
    private readonly examenService;
    constructor(examenService: ExamenService);
    create(CreateExamenDto: CreateExamenDto): Examen;
    findAll(): Examen[];
    findOne(id: number): Examen;
    update(id: string, updateExmaneDto: UpdateExamenDto): Examen;
    remove(id: string): void;
}

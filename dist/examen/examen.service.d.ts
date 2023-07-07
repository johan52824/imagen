import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';
import { Examen } from './entities/examen.entity';
export declare class ExamenService {
    private examens;
    create(createEstudianteDto: CreateExamenDto): Examen;
    findAll(): Examen[];
    findOne(id: number): Examen;
    update(id: number, updateExamenDto: UpdateExamenDto): Examen;
    remove(id: number): void;
}

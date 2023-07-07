"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamenService = void 0;
const common_1 = require("@nestjs/common");
const examen_entity_1 = require("./entities/examen.entity");
let ExamenService = class ExamenService {
    constructor() {
        this.examens = [
            {
                id: 1, identificacion: '101', descripcion: 'Examen Parcial', estado: true
            },
            {
                id: 2, identificacion: '202', descripcion: 'Examen Final', estado: true
            },
        ];
    }
    create(createEstudianteDto) {
        const examen = new examen_entity_1.Examen();
        examen.id = Math.max(...this.examens.map(elemento => elemento.id), 0) + 1;
        examen.descripcion = createEstudianteDto.descripcion;
        this.examens.push(examen);
        return examen;
    }
    findAll() {
        return this.examens;
    }
    findOne(id) {
        const examen = this.examens.find(examen => examen.id === id);
        if (!examen)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return examen;
    }
    update(id, updateExamenDto) {
        const { identificacion, descripcion } = updateExamenDto;
        const examen = this.findOne(id);
        if (identificacion)
            examen.identificacion = identificacion;
        if (descripcion)
            examen.descripcion = descripcion;
        this.examens = this.examens.map(elemento => {
            if (elemento.id === id)
                return examen;
            return elemento;
        });
        return examen;
    }
    remove(id) {
        this.findOne(id);
        this.examens = this.examens.filter(elemento => elemento.id !== id);
    }
};
ExamenService = __decorate([
    (0, common_1.Injectable)()
], ExamenService);
exports.ExamenService = ExamenService;
//# sourceMappingURL=examen.service.js.map
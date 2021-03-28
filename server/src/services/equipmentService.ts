import { v4 as UUID } from 'uuid';

import { EquipmentRequest, EquipmentResponse } from '../models/Equipment';
import { EquipmentRepository } from "../repositories/equipmentRepository";

export class EquipmentService {
  private repository = new EquipmentRepository();

  public getEquipment = (): Promise<EquipmentResponse[]> => {
    return this.repository.getEquipment();
  }

  public createEquipment = (params: EquipmentRequest): Promise<void> => {
    const id = UUID();
    const equipment = { ...params, id };
    return this.repository.createEquipment(equipment);
  }
}

import { v4 as UUID } from 'uuid';

import { EquipmentRequest } from '../models/Equipment';
import { EquipmentsRepository } from "../repositories/equipmentsRepository";

export class EquipmentsService {
  private repository = new EquipmentsRepository();

  public createItem = (params: EquipmentRequest): Promise<void> => {
    const id = UUID();
    const equipment = { ...params, id };
    return this.repository.createEquipment(equipment);
  }
}

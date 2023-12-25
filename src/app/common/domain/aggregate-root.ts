import { Entity } from "./entity";

export abstract class AggregateRoot extends Entity {
  protected constructor(id?: number) {
    super(id);
  }
}

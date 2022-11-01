import { Entity } from "../graphdb/entity";

export class Transaction extends Entity{

  constructor(){
    super();
  }

  class_name() {
    return "Transactiom";
  }
}
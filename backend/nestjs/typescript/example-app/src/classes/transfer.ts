// interfaces
import { hasFormatter } from "../interfaces/hasFormat.js";

// classes
export class Transfer implements hasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} transfer Rp. ${this.amount} for ${this.details}`;
    }
}
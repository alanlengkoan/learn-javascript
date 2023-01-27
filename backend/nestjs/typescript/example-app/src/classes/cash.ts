// interfaces
import { hasFormatter } from "../interfaces/hasFormat.js";

// classes
export class Cash implements hasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} cash Rp. ${this.amount} for ${this.details}`;
    }
}
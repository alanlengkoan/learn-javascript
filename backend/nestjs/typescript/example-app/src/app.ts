import { Cash } from './classes/cash.js';
import { Transfer } from './classes/transfer.js';
import { hasFormatter } from "./interfaces/hasFormat.js";
import { listTemplate } from "./classes/listTemplate.js";

const form = document.querySelector('form')! as HTMLFormElement;

// input
const type = document.querySelector('#type')! as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: hasFormatter;
  if (type.value === 'cash') {
    doc = new Cash(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Transfer(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});
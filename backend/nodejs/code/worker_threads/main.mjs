import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./worker_threads/worker.mjs");
const worker2 = new Worker("./worker_threads/worker.mjs");

worker1.on("message", (message) => {
  console.log(`Thread ${threadId} received message worker 1: ${message}`);
});

worker2.on("message", (message) => {
  console.log(`Thread ${threadId} received message worker 2: ${message}`);
});


worker1.postMessage(5);
worker2.postMessage(10);
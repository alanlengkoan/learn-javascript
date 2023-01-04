import timers from 'timers/promises';

const res = await timers.setTimeout(5000, 'result');
console.log(res); 

for await (const res of timers.setInterval(1000, new Date())){
  console.info(new Date());
}
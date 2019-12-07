const { createWorker, createScheduler } = require('tesseract.js');


(async () => {
  await worker1.load();
  await worker2.load();
  await worker1.loadLanguage('eng');
  await worker2.loadLanguage('eng');
  await worker1.initialize('eng');
  await worker2.initialize('eng');
  scheduler.addWorker(worker1);
  scheduler.addWorker(worker2);
  /** Add 10 recognition jobs */
  const results = await Promise.all(Array(10).fill(0).map(() => (
    await scheduler.addJob('recognize', 'https://tesseract.projectnaptha.com/img/eng_bw.png')
  )))
  console.log(results);
  await scheduler.terminate(); // It also terminates all workers.
})();
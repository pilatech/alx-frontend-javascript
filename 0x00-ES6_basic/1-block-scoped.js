export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-unused-vars, prefer-const */
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}

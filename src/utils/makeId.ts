export function* makeId() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

const idGenerator = makeId();

export const getId = (): number =>
  idGenerator.next().value as unknown as number;

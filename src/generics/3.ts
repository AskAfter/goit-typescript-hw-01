function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

console.log(merge({ name: 'Petro' }, { lastName: 'Ratych' }));

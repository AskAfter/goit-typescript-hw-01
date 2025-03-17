function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

console.log(merge({ name: 'Petro' }, { lastName: 'Ratych' }));

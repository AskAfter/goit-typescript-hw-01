function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

showMessage('message');

console.log(calc(8, 10));

try {
  customError();
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught an error: ${error.message}`);
  }
}

function year(value: string | number) : void {
    console.log(`Now is ${value}`);
}

year(2025);
year('twenty twenty five')

type Car = 'Audi' | 'BMW' | 'Mercedes';

let auto: Car;

auto = 'BMW';
console.log(auto);

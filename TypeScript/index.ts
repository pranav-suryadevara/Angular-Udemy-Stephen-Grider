class ValueHolder<valueType> {
	value: valueType;
}

const numberWrapper = (value: number): number[] => {
    return [value];
};

const booleanWrapper = (value: boolean): boolean[] => {
    return [value];
};

const stringWrapper = (value: string): string[] => {
    return [value];
};

const valueWrapper = <T>(value: T): T[] => {
    return [value]
}

valueWrapper<number>(10);

valueWrapper<string>('Pranav');




const x = valueWrapper(10);


































// const Component = (target: any) => {
// 	console.log(target);
// };

// @Component // class
// class Car{
//     @Component year: string; // property

//     @Component // method
//     drive(@Component speed: number) { // argument
    
//     }

//     @Component  // accessor
//     get year {
    
//     }
// }




// class Car {   
//     color: string;
//     year: number;
    
//     constructor(color: string, year: number) {
//         this.color = color;
//         this.year = year;
//     }

//     drive() {
//         console.log('Vroom');
//     }
// }

// const myCar = new Car('red', 2022);
// myCar.drive();

// console.log(myCar.color, myCar.year);



// interface Post {
//     title: string;
//     daysOld: number;
//     published: boolean;
// }

// const post  = {
//     title: 'Latest News',
//     daysOld: 10,
//     published: true
// };

// const printPost = (postToPrint: Post) => {
//     return `${postToPrint.title} (${postToPrint.daysOld} days old.)`;
// }

// printPost(post);



// const add = (a: number, b: number): number => {
//     return a + b;
// }

// const joinStrings = (a: string, b: string): string => {
//     return a + b;
// }

// function addAgain(a: string, b: string): string {
//     return a + b;
// }

// const addThem = function (a: string, b: string): string {
//     return a + b;
// }



// const myName = "Pranav";



// let myName;

// if (1 === 1) {
//     myName = "Pranav";
// } else {
//     myName = "Aneesh";
// }

// myName = 10;
// myName = null;


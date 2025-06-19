type Person = {
    name: String;
};

type contact ={
    phone: number
}

let pass: "red" | "yellow" | 12 | 34 = 34;

const user: Person & contact = {
    name:"Raj",
    phone: 48521
}

console.log("pass:",pass);
console.log(`Name: ${user.name} phone:${user.phone}`);

//Pending from: 8:40
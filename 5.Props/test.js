const profile = {
    name: "ram sharma",
    age: 23,
    role: "writer"
};

// destructing the object
const { name, age, role } = profile;
console.log(`my name is ${name}. i am a ${role} and ${age} years old`);

const friends = ["rohan", "sita", "hari"];
// destructing the array
const [first, second, third] = friends;
console.log(first)
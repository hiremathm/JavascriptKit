//Objects - are unordered , string indexed and collection of values

const player = {
    firstName: "sachin",
    lastName: "tendlkar",
    age: 20,
    country: 'India',
    ODIRuns: [20,49,58,20],
    isCaptin: false,
    iplTeam: 'Mumbai India',
    T20Runs: [30,40,58,49]
}

console.log("First Name :: ",player.firstName)
console.log("Last Name :: ",player.lastName)

const s1 = {
    id: 1,
    name: 'shiva',
    mobile: '1234567890'
}
const s2 = {
    id: 2,
    name: 'rashu',
    mobile: '2345678901'
}

const students = []
students.push(s1,s2)
console.log(`${JSON.stringify(students)}`)
console.log(students)
let d1 = new Date();

console.log(d1.getDate());

console.log(d1.getDay())

console.log(d1.getFullYear());

console.log(d1.getSeconds())

let dt = "2024-01-01";

let newDate = new Date(dt);
newDate.setDate(2);
console.log(newDate);
let Y = "Set and Methods!!"
let dateSet = new Set();
            dateSet.add(new Date(2020, 3, 18));
            dateSet.add(new Date(2021, 5, 25));
            dateSet.add(new Date(2022, 9, 3));
            dateSet.add(new Date(2023, 11, 22));

            let formattedDates = [...dateSet].map(date => date.toDateString());
            let years = [...dateSet].map(date => date.getFullYear());
            document.getElementById("Heading2").innerHTML = Y;
            document.getElementById("setDates1").innerHTML = "Dates in the Set: " + formattedDates.join(", ");
            document.getElementById("setDates2").innerHTML = "Years in the Set: " + years.join(", ");
            document.getElementById("setDates3").innerHTML = "Size of the Set: " + dateSet.size;

            // Add a new date
            dateSet.add(new Date(2026, 8, 10));
            formattedDates = [...dateSet].map(date => date.toDateString());
            document.getElementById("setDates4").innerHTML = "Dates after adding a new date: " + formattedDates.join(", ");Date.setMonth(11)

console.log(newDate);

console.log(newDate.toDateString());
console.log(newDate.toISOString());

let currentDate = new Date();

console.log(currentDate);

console.log(currentDate.toISOString());
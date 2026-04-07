function findLargest() {
    let a = [];
    let largest;
    for (let i = 0; i < 5; i++) {
        a[i] = parseInt(prompt("Enter number " + (i + 1) + ":"));
    }
    largest = a[0];
    for (let i = 1; i < 5; i++) {
        if (a[i] > largest) {
            largest = a[i];
        }
    }
    document.getElementById("result").innerHTML = "Largest number is: " + largest;
}
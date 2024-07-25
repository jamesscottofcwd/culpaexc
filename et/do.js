let skip = false;
const items = [1, 2, 3, 4, 5, 6];

for (const item of items) {
    if (!(skip = !skip)) {
        console.log(item); // Process item
    }
}

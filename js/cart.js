const unitPrice = [50, 50];
let quantities = [1, 1];

function changeQty(index, change) {
    quantities[index] += change;

    if (quantities[index] < 1) {
        quantities[index] = 1;
    }

    document.getElementById(`qty${index}`).innerText =
        quantities[index];

    document.getElementById(`price${index}`).innerText =
        unitPrice[index] * quantities[index];

    updateSubtotal();
}

function updateSubtotal() {
    let total = 0;

    for (let i = 0; i < quantities.length; i++) {
        total += quantities[i] * unitPrice[i];
    }

    document.getElementById("subtotal").innerText = total;
}

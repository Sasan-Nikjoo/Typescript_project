// const anchor = document.querySelector('a');
// console.log(anchor?.href);
// const form = document.querySelector('form')!;
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
//inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const toform = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// Event listener for form submission
// form.addEventListener('submit', (e: Event): void => {
//     e.preventDefault(); // Prevent the default form submission behavior
// Log the values with type safety
//     console.log('Type:', type.value);       // Logs the selected value from the dropdown
//     console.log('To/From:', toform.value); // Logs the entered value for 'To/From'
//     console.log('Details:', details.value); // Logs the entered details
//     console.log('Amount (£):', amount.value); // Logs the entered amount
//   });
//------------------------------------------------------------------
//class
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.amount = a;
        this.client = c;
        this.details = d;
    }
    Invoice.prototype.format = function () {
        console.log('the user called ${this.client} ows ${this.amount} for ${this.details}');
    };
    return Invoice;
}());
var InvOne = new Invoice('sasan', 'work on website', 200);
InvOne.format();

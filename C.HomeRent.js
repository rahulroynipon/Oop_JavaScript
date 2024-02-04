const HomeRent = function(name, month, rentPerDay) {
    this.name = name;
    this.month = month;
    this.rentPerDay = rentPerDay;

    this.totalDay = function(day = 0) {
        return this.rentPerDay * day;
    };
};

// Prototype

HomeRent.prototype.bill = function(day) {
    console.log(`Name: ${this.name}\nMonth: ${this.month}\nTotal Bill: ${this.totalDay(day)}`);
};

const customer1 = new HomeRent('Rahul', 'Feb', 700);
const totalBill = customer1.totalDay(40);
console.log(`Total Bill for 40 days: ${totalBill}`);

customer1.bill(40);

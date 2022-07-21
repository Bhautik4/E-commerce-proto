var custItem;
var OrderNumber = 0;
var FinalPrice = 0;
var CurrentPosition = 0;
var nl = "\n";


function productClass(product, info, rent, quantity, custTotalPrice) {
    this.product = product;
    this.info = info;
    this.rent = rent;
    this.Quantity = quantity;
    this.totalPrice = custTotalPrice;
}

function ProductInfo(item, desc, price) {
    this.item = item;
    this.price = price;
    this.desc = desc;
}

var itemArray = new Array(10)
var cartArray = new Array()

itemArray[0] = new ProductInfo("Pen", "Cello", 5);
itemArray[1] = new ProductInfo("Pencil", "Natraj", 3)
itemArray[2] = new ProductInfo("CompassBox", "Camel", 50);
itemArray[3] = new ProductInfo("LunchBox", "Mahavir", 80);
itemArray[4] = new ProductInfo("Paper", "Cello", 3);
itemArray[5] = new ProductInfo("Stapler", "Camel", 30);
itemArray[6] = new ProductInfo("Toys", "China", 80);
itemArray[7] = new ProductInfo("TextBook", "Yuva", 35);
itemArray[8] = new ProductInfo("NoteBook", "Technical", 25);
itemArray[9] = new ProductInfo("FileFolder", "Cello", 5);

function add() {
    var Item = document.getElementById("Item").value;
    var Quantity = document.getElementById("Quantity").value;

    for (var i = 0; i < itemArray.length; i++) {
        if (itemArray[i].item == Item) {
            custItem = itemArray[i];
            totalPrice = Quantity * itemArray[i].price;
            var addCart = new productClass(custItem.item, custItem.desc, custItem.price, Quantity, totalPrice)
            cartArray.push(addCart);
        }
    }
    for (var i = 0; i < cartArray.length - 1; i++) {
        if (Item == cartArray[i].product) {
            cartArray.pop(custItem.item);
            cartArray[i].Quantity = Quantity;
            cartArray[i].totalPrice = cartArray[i].Quantity * itemArray[i].price;
        }
    }

    display();
}

function display() {

    var Item = document.getElementById("Item").value;
    var Quantity = document.getElementById("Quantity").value;
    document.getElementById("CartDisplay").value = "";

    if (Quantity < 0) {
        cartArray.length = 0;
        return alert("Quantity can not less than 0.");
    }

    if (Quantity == 0) {
        cartArray.length = 0;
        return alert("Please select Quantity");
    }
    if (Quantity > 10) {
        cartArray.length = 0;
        return alert("Quantity is not more than 10");
    }
    else {
        for (var i = 0; i < cartArray.length; i++) {

            document.getElementById("CartDisplay").value +=
                "Your Item: " +
                cartArray[i].product +
                nl +
                "price of " +
                cartArray[i].product +
                " is: " +
                cartArray[i].rent +
                nl +
                "Description of item is: " + cartArray[i].info + nl
                +
                "Quantity is: " +
                cartArray[i].Quantity +
                nl +
                "Total Price: " +
                cartArray[i].totalPrice +
                nl + nl
            FinalPrice = FinalPrice + cartArray[i].totalPrice;
            OrderNumber++;
        }
    }
}

// Form

function formClass(fname, lname, email, mobile, addr) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.mobile = mobile;
    this.address = addr;
}


function formDisplay() {
    FirstName = document.getElementById('FirstName').value;
    LastName = document.getElementById('LastName').value;
    Email = document.getElementById('Email').value;
    PhoneNo = document.getElementById('Mobile').value;
    Address = document.getElementById('Address').value;

    var customer = new formClass(FirstName, LastName, Email, PhoneNo, Address);

    if (FirstName == "" || LastName == "" || Email == "" || PhoneNo == "" || Address == "") {
        alert("Details can't be blank");
    }
    else if (Email.indexOf("@") == -1 || Email.indexOf(".") == -1) {
        alert("Enter a valid email address")
    }
    else if (PhoneNo.length < 10 || PhoneNo.length > 11 || PhoneNo == isNaN) {
        alert("Phone number must be 10 digits or enter a digit");
    }
    else {
        document.getElementById('DisplayForm').value = document.getElementById("CartDisplay").value + nl +
            "Your Name: " + FirstName + " " + LastName + nl +
            "Your Email: " + Email + nl +
            "Your MobileNo: " + PhoneNo + nl +
            "Your Address: " + Address + nl

        orderArray.push(new order(cartArray, customer));
        cartArray = [];
        customer = [];

        clear();
    }

}

function clear() {
    document.getElementById("Quantity").value = "";
    document.getElementById("CartDisplay").value = "";
    document.getElementById('FirstName').value = "";
    document.getElementById('LastName').value = "";
    document.getElementById('Email').value = "";
    document.getElementById('Mobile').value = "";
    document.getElementById('Address').value = "";
}

// Summary

function order(itemDetails, formDetails) {
    this.itemDetails = itemDetails;
    this.formDetails = formDetails;
}

var orderArray = new Array();

function LoadForm(orderno) {

    document.getElementById('OrderSummery').value = "";

    FinalPrice = 0;

    var size = orderArray.length;

    if (orderno == "" || orderno == null || isNaN(orderno)) {
        orderno = 0;
    }
    if (orderno == -2) {
        orderno = CurrentPosition - 1;
        if (orderno < 0) orderno = 0;
    }
    if (orderno == -1) {
        orderno = CurrentPosition + 1;
        if (orderno >= size) orderno = size - 1;
    }
    if (orderno == -3) {
        orderno = size - 1;
    }

    CurrentPosition = orderno;

    if (orderno > orderArray.length) {
        alert("Entered order no is not available.")
    }
    else {
        var i = orderno;
        for (var j = 0; j < (orderArray[i].itemDetails).length; j++) {

            document.getElementById('OrderSummery').value +=
                "Your Item: " +
                orderArray[i].itemDetails[j].product +
                nl +
                "price of " +
                orderArray[i].itemDetails[j].product +
                " is: " +
                orderArray[i].itemDetails[j].rent +
                nl +
                "Description of item is: " + orderArray[i].itemDetails[j].info + nl
                +
                "Quantity is: " +
                orderArray[i].itemDetails[j].Quantity +
                nl +
                "Total Price: " +
                orderArray[i].itemDetails[j].totalPrice +
                nl + nl
            FinalPrice = FinalPrice + orderArray[i].itemDetails[j].totalPrice;
        }
        document.getElementById('OrderSummery').value +=
            "Final Price: " + FinalPrice + nl + nl +
            "Your Name: " + orderArray[i].formDetails.fname + " " + orderArray[i].formDetails.lname + nl +
            "Your Email: " + orderArray[i].formDetails.email + nl +
            "Your MobileNo: " + orderArray[i].formDetails.mobile + nl +
            "Your Address: " + orderArray[i].formDetails.address + nl + nl

        document.getElementById('SubScript').value = orderno;

    }
}


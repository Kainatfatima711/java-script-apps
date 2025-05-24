var choice =prompt("Welcome to Area Calculator. \n Please Enter your Choice. \n1.Area of Rectangle. \n2.Area of Triangle. \n3.Area of Circle. \n4.Area of Parallelogram")

if (choice =='1') {
    var Length = prompt ("Enter the Length")
    var Breadth = prompt ("Enter the Breadth")
    var result = Number(Length) * Number(Breadth)
    alert("The Area is  " + result)
}

if (choice =='2'){
    var height = prompt("Enter the height")
    var base = prompt("Enter the base")
    var result = Number(height) * Number (base) /2
    alert("The Area is " + result)
}

if(choice =='3'){
    var radius = prompt ("Enter the radius")
    var result = 3.14 * Number(radius) * Number(radius)
    alert("The Area is" + result)   
}

if (choice =='4'){
    var height =prompt("Enter the height")
    var corresponding =prompt("Enter the corresponding base")
    var result= Number(height) * Number(corresponding)
    alert("The area is " + result)
}
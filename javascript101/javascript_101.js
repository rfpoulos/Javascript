function hello(name) {
    if (name) {
		return ("hello, " + name + "!")
	}
	else {
		return ("hello, World!")
    }
}

function madlib(name, subject) {
	return name + "'s favorite subject is " + subject 
}

function tipAmount(amount, service) {
	if (service == "good") {
		return amount*0.2
    } 
    else if (service == "fair") {
        return amount*0.15
    }
    else if (service == "bad") {
        return amount*0.1
    }
} 

function totalAmount(amount, service) {
	if (service == "good") {
		return amount + amount*0.2
    } 
    else if (service == "fair") {
        return amount + amount*0.15
    }
    else if (service == "bad") {
        return amount + amount*0.1
    }
}

function splitAmount(amount, service, split) {
	if (service == "good") {
		return amount*1.2 / split
    }
    else if (service == "fair") {
        return amount*1.15 /split
    }
    else if (service == "bad") {
        return amount*1.1 / split
    }
}
// Business logic

function makeGreeting(text) {
    return "Hello " + text + "!";
}

alert(makeGreeting("world")); // Hello world!

// Advices

function aopizeAdvice(args) {
    args[0] = "AOP " + args[0];
    return args;
}

function shoutAdvice(result) {
    return result.toUpperCase();
}

function ciaoAdvice() {
    return "Bye-bye!";
}

// Let's go!

Ajaxpect.addBefore(this, "makeGreeting", aopizeAdvice);
alert(makeGreeting("world")); // Hello AOP world!

Ajaxpect.addAfter(this, "makeGreeting", shoutAdvice);
alert(makeGreeting("world")); // HELLO AOP WORLD!

Ajaxpect.addAround(this, "makeGreeting", ciaoAdvice);
alert(makeGreeting("world")); // Bye-bye!

//

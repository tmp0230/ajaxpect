Ajaxpect = new Object();

Ajaxpect.addBefore = function(obj, fname, before) {
    var oldFunc = obj[fname];
    obj[fname] = function() {
        return oldFunc.apply(this, before(arguments, oldFunc, this));
    };
};

Ajaxpect.addAfter = function(obj, fname, after) {
    var oldFunc = obj[fname];
    obj[fname] = function() {
        return after(oldFunc.apply(this, arguments), arguments, oldFunc, this);
    };
};

Ajaxpect.addAround = function(obj, fname, around) {
    var oldFunc = obj[fname];
    obj[fname] = function() {
        return around(arguments, oldFunc, this);
    };
};
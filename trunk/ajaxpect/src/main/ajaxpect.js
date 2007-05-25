var Ajaxpect = {

  addBefore: function(obj, fname, before) {
    var orig = obj[fname];
    obj[fname] = function() {
      return orig.apply(this, before(arguments, orig, this));
    }
  },

  addAfter: function(obj, fname, after) {
    var orig = obj[fname];
    obj[fname] = function() {
      return after(orig.apply(this, arguments), arguments, orig, this);
    }
  },

  addAround: function(obj, fname, around) {
    var orig = obj[fname];
    obj[fname] = function() {
      return around(arguments, orig, this);
    }
  }

}




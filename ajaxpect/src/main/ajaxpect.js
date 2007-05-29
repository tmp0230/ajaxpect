var Ajaxpect = {

  addBefore: function(obj, filter, before) {
    var link = function(orig) {
      return function() {
        return orig.apply(this, before(arguments, orig, this));
      }
    }
    this._process(obj, filter, link);
  },

  addAfter: function(obj, filter, after) {
    var link = function(orig) {
      return function() {
        return after(orig.apply(this, arguments), arguments, orig, this);
      }
    }
    this._process(obj, filter, link);
  },

  addAround: function(obj, filter, around) {
    var link = function(orig) {
      return function() {
        return around(arguments, orig, this);
      }
    }
    this._process(obj, filter, link);
  },
  
  _process: function(obj, filter, link) {
    var check;
    if (filter.exec) {
      check = function(str) { return filter.exec(str) }
    } else if (filter.call) {
      check = function(str) { return filter.call(this, str) }
    }
    if (check) {
      for (var member in obj) {
        if (check(member)) {
          this._attach(obj, member, link);
        }
      }
    } else {
      this._attach(obj, filter, link);
    }
  },

  _attach: function(obj, member, link) {
    var orig = obj[member];
    obj[member] = link(orig);
  }
  
}

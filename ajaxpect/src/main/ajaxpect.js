var Ajaxpect = {

  addBefore: function(obj, filter, before) {
    var linker = function(orig) {
      return function() {
        return orig.apply(this, before(arguments, orig, this));
      }
    }
    this._processObject(obj, filter, before, linker);
  },

  addAfter: function(obj, filter, after) {
    var linker = function(orig) {
      return function() {
        return after(orig.apply(this, arguments), arguments, orig, this);
      }
    }
    this._processObject(obj, filter, after, linker);
  },

  addAround: function(obj, filter, around) {
    var linker = function(orig) {
      return function() {
        return around(arguments, orig, this);
      }
    }
    this._processObject(obj, filter, around, linker);
  },
  
  _processObject: function(obj, filter, advice, linker) {
    if (! filter.exec) {
      var orig = obj[filter];
      obj[filter] = linker(orig);
    } else {
      for (var member in obj) {
        if (this._testMember(obj, member, filter)) {
          linker(obj, member, advice);
        }
      }
    }
  },
  
  _testMember: function(obj, member, filter) {
    var check = filter.exec(member);
    if (check && (!check.input || check[0])) {
      return true;
    }
   	return false;
  }
  
}

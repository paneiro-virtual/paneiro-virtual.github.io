var anObject=require("./_an-object"),get=require("./core.get-iterator-method");module.exports=require("./_core").getIterator=function(e){var r=get(e);if("function"!=typeof r)throw TypeError(e+" is not iterable!");return anObject(r.call(e))};
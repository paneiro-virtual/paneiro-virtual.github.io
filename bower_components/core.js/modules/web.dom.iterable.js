for(var $iterators=require("./es6.array.iterator"),redefine=require("./_redefine"),global=require("./_global"),hide=require("./_hide"),Iterators=require("./_iterators"),wks=require("./_wks"),ITERATOR=wks("iterator"),TO_STRING_TAG=wks("toStringTag"),ArrayValues=Iterators.Array,collections=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],i=0;i<5;i++){var NAME=collections[i],Collection=global[NAME],proto=Collection&&Collection.prototype,key;if(proto){proto[ITERATOR]||hide(proto,ITERATOR,ArrayValues),proto[TO_STRING_TAG]||hide(proto,TO_STRING_TAG,NAME),Iterators[NAME]=ArrayValues;for(key in $iterators)proto[key]||redefine(proto,key,$iterators[key],!0)}}
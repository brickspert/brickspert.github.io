webpackJsonp([3],{711:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(661),c=u(r),o=n(665),l=u(o),i=n(666),f=u(i),a=n(670),d=u(a),s=n(688),p=u(s),m=n(329),_=u(m),v=n(528),b=n(482),h=function(e){function t(){return(0,l["default"])(this,t),(0,d["default"])(this,(t.__proto__||(0,c["default"])(t)).apply(this,arguments))}return(0,p["default"])(t,e),(0,f["default"])(t,[{key:"render",value:function(){var e=this;return _["default"].createElement("div",null,_["default"].createElement("div",null,"当前计数为",this.props.counter.count),_["default"].createElement("button",{onClick:function(){return e.props.increment()}},"自增"),_["default"].createElement("button",{onClick:function(){return e.props.decrement()}},"自减"),_["default"].createElement("button",{onClick:function(){return e.props.reset()}},"重置"))}}]),t}(m.Component),k=function(e){return{counter:e.counter}},E=function(e){return{increment:function(){e((0,v.increment)())},decrement:function(){e((0,v.decrement)())},reset:function(){e((0,v.reset)())}}};t["default"]=(0,b.connect)(k,E)(h)}});
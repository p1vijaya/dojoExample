require([ "dojo/_base/declare",
          "dojo/dom-construct",
          "dojo/parser",
          "dojo/ready",
          "dijit/_WidgetBase"],
          function (declare, domConstruct, parser, ready, _WidgetBase){
	declare ("app.FirstWidget",[_WidgetBase],{
		i : 10,
		name : '',
		age : 0,
		constructor : function(){
			this.i = 30;
			alert ("Inside Constructor");
		},
		postMixInProperties : function(){
			this.i = 20;
			alert ("Inside postMixInProperties");
		},
		buildRendering : function(){
			alert ("Inside buildRendering");
			this.domNode = domConstruct.create("button",
			{innerHTML: "I am Button!!"});
		},
		_setNameAttr : function(name){
			this.name = name;
		},
		_setAgeAttr : function(age){
			this.age = age;
		},
		postCreate : function(){
			alert("Name : " + this.name);
			alert("Age : " + this.age);
		},
		startUP : function(){
			alert ("Inside SatrtUp");
		}
	});

});
angular
	.module("BookApp")
	.controller("BookCtrl", BookCtrl);

BookCtrl.$inject = [];

function BookCtrl() {
	var self = this;
	self.books = [
		{ Id: 1, Code: 'java', Description: 'Java Programming', 
			ListPrice: '57.50'},
		{ Id: 2, Code: 'jsp', Description: 'Java Servlets and JSP', 
			ListPrice: '57.50'},
		{ Id: 3, Code: 'mysql', Description: 'MySQL', 
			ListPrice: '54.50'},
		{ Id: 4, Code: 'android', Description: 'Android Programming', 
			ListPrice: '57.50'},
		{ Id: 5, Code: 'html5', Description: 'HTML5 and CSS3', 
			ListPrice: '54.50'},
		{ Id: 6, Code: 'oracle', Description: 'Oracle and PL/SQL', 
			ListPrice: '54.50'},
		{ Id: 7, Code: 'javascript', Description: 'JavaScript and jQuery', 
			ListPrice: '54.50'}
	];

	var getCopyright = function() {
		return "Copyright (c) Pierson D'Enbeau 2017 All Rights Reserved";
	}
};


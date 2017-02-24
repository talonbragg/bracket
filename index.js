#!/usr/bin/env node
const program = require('commander');
const mkdirp = require('mkdirp');
const pkg = require('./package.json');

program
	.option('-i, --init, <init>', 'Initialize a directory')
	.action(function() {
		if(program.init) mkdirp(program.init, function(err) { 

    		

		});
		console.log('Directory Created!');
	})
	.parse(process.argv);
	

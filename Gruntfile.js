module.exports=function(grunt){
	grunt.registerTask('hello','Hello Nantes',function(){
		console.log('Hello Grunt, depuis Nantes!')
	});

	grunt.registerTask('etape1','Etape 1 visite Nantes',function(){
		console.log('Etape 1 de la visite de Nantes!')
	});

	grunt.registerTask('etape2','Etape 2 visite Nantes',function(){
		console.log('Etape 2 de la visite de Nantes!')
	});

	grunt.registerTask('etape3','Etape 3 visite Nantes',function(){
		console.log('Etape 3 de la visite de Nantes!')
	});

	grunt.registerTask('visite',['etape1','etape2','etape3']);

	grunt.registerTask('default','hello');//la tâche hello devient celle par defaut pour grunt : création d'un alias
}

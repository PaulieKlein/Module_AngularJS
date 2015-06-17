angular.module("todo").controller("TodoController",function () {
			var todoCtrl = this;
			todoCtrl.tasks=[
			{description :"un"},
			{description :"deux"},
			];

			todoCtrl.addtask= function(desc){
				todoCtrl.tasks.push({
				description : desc})
			};
			todoCtrl.desc=true;
			todoCtrl.tri = function(){
				todoCtrl.desc =!todoCtrl.desc;
			}
			this.user1 = {name:"Pauline",email:"p.klein1@outlook.fr"}
		this.user2 = {email:"p.klein1@outlook.fr"}
		})
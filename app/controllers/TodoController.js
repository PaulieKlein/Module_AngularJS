angular.module("todo").controller("TodoController",function () {
			var todoCtrl = this;
			todoCtrl.games=[];

			todoCtrl.ships=[
			{value:1, label :"1 bâteau"},
			{value:2, label :"2 bâteaux"},
			{value:3, label :"3 bâteaux"},
			{value:4, label :"4 bâteaux"},
			{value:5, label :"5 bâteaux"}];

			todoCtrl.game={ 
				ships : todoCtrl.ships[0].value
			}

			this.Create= function(form){
				if (form.$invalid)return
					var clone = angular.copy(todoCtrl.game)
					todoCtrl.games.push(clone)

			}

			})
			
// JavaScript Document
enchant();
var bg1;
var bg2;
var enemy1;
var enemy2;
var data1 = [];
var data2 = [];
var treasure1;
var start;
var end;
var clear;
var effect;
window.onload = function(){
	game = new Game(1000, 1500);
	//let speed = 20;
	game.fps = 30;
	game.preload(["images/chara0.png", "images/chara3.png", "images/chara4.png", "images/chara5.png", "images/clear.png", "images/end.png", "images/start.png", "images/avatarBg1.png", "images/effect0.png", "images/icon0.png", "images/map0.png"]);
	
	/*game.addEventListener('load', function(){
		game.pushScene(game.startScene());
	});
	
	game.startScene = function(){
		var scene = new Scene();
		scene.backgroundColor = 'black';
		
		var start = new Sprite(236, 48);
		start.img = game.assets["images/start.png"];
		start.scaleX = 3;
		start.scaleY = 3;
		start.x = 500;
		start.y = 500;
		game.rootScene.addChild(start);
		start.rootScene.on(Event.TOUCH_START, function(){
			game.replaceScene(game.onload());
		});
		return scene;
	}*/
	
	/*game.onload = function(){
		game = new Scene();
		game.rootScene.backgroundColor = "#000";
		game.pushScene(scene);
		
		start = new Sprite(236,48);
		start.image = game.assets["images/start.png"];
		start.moveTo(382,750);
		start.scaleX = 3;
		start.scaleY = 3;
		game.rootScene.addChild(start);
		
		start.addEventListener(Event.TOUCH_START,game.onload);
	}*/
	
	game.onload = function(){
		/*player1 = new Sprite(32, 32);
		player1.x = 484;
		player1.y = 1400;*/
		/*player1.width = 32;
		player1.height = 32;*/
		
		/*player1.image = game.assets["images/chara0.png"];
		player1.frame = 28;//[28,29,27,28,29,27,28,29,27];
		
		player1.scaleX = 3;
		player1.scaleY = 3;
		
		
		player1.addEventListener("enterframe", function(){
			let s = 5
			//player1.y -= s;
			
			if (game.input.left){
				this.x -= s;
				this.frame = this.age % 3 + 9;  //[10,11,9,10,11,9,10,11,9];
			} 
			if (game.input.right){
				this.x += s;
				this.frame = this.age % 3 + 18; //[19,20,18,19,20,18,19,20,18];
			} 
			if (game.input.up){
				this.y -= s;
				this.frame = this.age % 3 + 27; //[28,29,27,28,29,27,28,29,27];
			} 
			if (game.input.down){
				this.y += s;
				this.frame = this.age % 3; //[1,2,0,1,2,0,1,2,0];
			} 
		});*/
		/*start = new Sprite(236,48);
		start.image = game.assets["images/start.png"];
		start.moveTo(382,750);
		start.scaleX = 3;
		start.scaleY = 3;
		game.rootScene.addChild(start);
		start.addEventListener(Event.TOUCH_START);*/
		
		player1 = new Player1();
		player1.x = 484;
		player1.y = 1420;
		player1.scaleX = 3;
		player1.scaleY = 3;
		
		
		
		bg1 = new Sprite(32, 128);
		bg1.image = game.assets["images/avatarBg1.png"];
		bg1.frame = 3;
		bg1.x = 484; /*468*/
		bg1.y = 150;
		bg1.scaleX = 32;
		bg1.scaleY = 20;
		
		bg2 = new Sprite(32, 128);
		bg2.image = game.assets["images/avatarBg1.png"];
		bg2.frame = 0;
		bg2.x = 484; /*468*/
		bg2.y = -2400;
		bg2.scaleX = 32;
		bg2.scaleY = 20;
		
		/*enemy1 = new Enemy();
		enemy1.frame = 1;
		enemy1.scaleX = 2;
		enemy1.scaleY = 2;
		enemy1.rotation = -90;*/
		
		game.rootScene.addChild(bg1);
		game.rootScene.addChild(bg2);
		game.rootScene.addChild(player1);
		//game.rootScene.backgroundColor = '#ccc';
		
		game.onenterframe = function(){
			//data1 = []
			if (game.frame % 10 == 0){
				enemy1 = new Enemy();
				enemy1.frame = 1;
				enemy1.scaleX = 2;
				enemy1.scaleY = 2;
				enemy1.rotation = -90;
				let rand1 = Math.random() * 1100;
				enemy1.moveTo(1050, 200 + rand1);
				data1.push(enemy1);
				
				/*enemy2 = new Enemy();
				enemy2.frame = 3;
				enemy2.scaleX = 2;
				enemy2.scaleY = 2;
				enemy2.rotation = -90;
				let rand2 = Math.random() * 550;
				enemy2.moveTo(1050, 200 + rand2);
				data2.push(enemy2);*/
				}
			
			/*if (game.frame % 10 == 0){
				enemy2 = new Enemy();
				enemy2.frame = 3;
				enemy2.scaleX = 2;
				enemy2.scaleY = 2;
				enemy2.rotation = -90;
				let rand2 = Math.random() * 550;
				enemy2.moveTo(1050, 200 + rand2);
				data2.push(enemy2);
				}*/
			
			for (let i = 0; i < data1.length; ++i){
				game.rootScene.addChild(enemy1);
			}
			
			for (let j = 0; j < data2.length; ++j){
				game.rootScene.addChild(enemy2);
			}
			/*if (player1.within(enemy1,10)){
					game.rootScene.addChild(end);
					game.stop();
				}*/
		}
		
		treasure1 = new Treasure();
		treasure1.moveTo(500, -1300); 
		treasure1.scaleX = 3;
		treasure1.scaleY = 3;
		game.rootScene.addChild(treasure1);
		/*if (bg2.y > 500){
			game.rootScene.addChild(treasure1);
			}*/
		
		/*treasure2 = new Treasure();
		treasure2.moveTo(500, 1000);
		treasure2.scaleX = 3;
		treasure2.scaleY = 3;
		game.rootScene.addChild(treasure2);*/
		
		clear = new Sprite(267,48);
		clear.image = game.assets["images/clear.png"];
		clear.moveTo(367,750);
		clear.scaleX = 3;
		clear.scaleY = 3;
		/*if (player1.within(treasure1,20)){
			game.rootScene.addChild(clear);
			game.stop();
			}*/
		
		end = new Sprite(189,97);
		end.image = game.assets["images/end.png"];
		end.moveTo(406,750);
		end.scaleX = 4;
		end.scaleY = 4;
		
		/*start = new Sprite(236,48);
		start.image = game.assets["images/start.png"];
		start.moveTo(382,750);
		start.scaleX = 3;
		start.scaleY = 3;*/
		
		effect = new Sprite(16,16);
		effect.image = game.assets["images/effect0.png"];
		effect.scaleX = 7;
		effect.scaleY = 7;
		effect.frame = 0;
		/*end.ontouchstart = function(){
			game.start();
		};*/
 	}
	/*start = new Sprite(236,48);
	start.image = game.assets["images/start.png"];
	start.scaleX = 7;
	start.scaleY = 7;
	start.moveTo(382,750);
	game.root.Scene.addChild(start);*/
	game.start();
}

Array.prototype.remove = function(elm){
	var index = this.indexOf(elm);
	this.splice(index, 1);
	return this;
}

var Player1 = Class.create(Sprite,{
	initialize: function(){
		Sprite.call(this,32,32);
		this.image = game.assets["images/chara0.png"];
		this.frame = 28;
	},
	onenterframe: function(){
		var s = 5;
		
		if (game.input.left){
				this.x -= s / 2;
				this.frame = this.age % 3 + 9;  //[10,11,9,10,11,9,10,11,9];
				if (this.x <= 0){
					this.x = 0;
					}
			} 
			if (game.input.right){
				this.x += s / 2;
				this.frame = this.age % 3 + 18; //[19,20,18,19,20,18,19,20,18];
				if (this.x >= 1000 - 45){
					this.x = 1000 - 45;
					}
			} 
			if (game.input.up){
				if (this.y >= 750){
					this.y -= s / 2;
					}
				this.frame = this.age % 3 + 27; //[28,29,27,28,29,27,28,29,27];
				
				if (this.y < 750 && bg2.y < 1000){
					bg1.y += s / 2;
					bg2.y += s / 2;
					this.y = 745;
					treasure1.y += s / 5;
					for (let i = 0; i < data1.length; i++){
						let sp1 = data1[i];
						sp1.y += s / 2;
					}
					/*for (let j = 0; j < data2.length; j++){
						let sp2 = data2[j];
						sp2.y += s / 2;
					}*/
					//enemy1.y += s;
					}else if (bg2.y == 1000){
						this.y -= s / 2;
						treasure1.y = treasure1.y;
							  }
				if (this.y <= 0){
					this.y = 0;
					}
				/*if (bg2.y >= -600){
					bg1.y += s;
					bg2.y += s;
					this.y -= s / 2;
					}
				if (bg2.y == 900){
					bg2.y = 900;
					this.y = 0;
					}*/
			} 
			if (game.input.down){
				if (this.y <= 740){
					this.y += s / 2;
					}
				this.frame = this.age % 3; //[1,2,0,1,2,0,1,2,0];
				
				if (this.y > 740 && bg1.y > 150){
					bg1.y -= s / 2;
					bg2.y -= s / 2;
					treasure1.y -= s / 5;
					this.y = 745;
					for (let i = 0; i < data1.length; i++){
						let sp1 = data1[i];
						sp1.y -= s / 2;
					}
					/*for (let j = 0; j < data2.length; j++){
						let sp2 = data2[j];
						sp2.y -= s / 2;
					}*/
					}else if (bg1.y == 150){
							  this.y += s / 2;
							  }
				if (this.y >= 1420){
					this.y = 1420;
					}
			}
		if (this.within(treasure1,10)){
			game.rootScene.addChild(clear);
			game.stop();
			}
		for (let i = 0; i < data1.length; i++){
			var sprite1 = data1[i];
			if (this.within(sprite1,30)){
				effect.x = player1.x + 5;
				effect.y = player1.y + 5;
				/*for (var j = 0; j < 5; j++){
					effect.frame = j;
					game.rootScene.addChild(effect);
				}*/
				game.rootScene.addChild(effect);
				game.rootScene.addChild(end);
				game.stop();
				}
		}
		/*for (let j = 0; j < data2.length; j++){
			var sprite2 = data2[j];
			if (this.within(sprite2,30)){
				effect.x = player1.x + 5;
				effect.y = player1.y + 5;
				game.rootScene.addChild(effect);
				game.rootScene.addChild(end);
				game.stop();
				}
		}*/
	}
});

var Enemy = Class.create(Sprite,{
	initialize: function() {
		Sprite.call(this, 32, 32);
		this.image = game.assets["images/chara4.png"];
		//this.moveTo(1050, 800);
	},
	onenterframe: function() {
		this.x -= 5;
		
		if (this.x < - 50){
			this.parentNode.removeChild(this);
			data1.remove(this);
			}
	}
});

var Treasure = Class.create(Sprite,{
	initialize: function(){
		Sprite.call(this,16, 16);
		this.image = game.assets["images/map0.png"];
		this.frame = 25;
	},
	
	onenterframe: function(){
		//this.y += 5;
	}
})

/*var bg = function(scene){
	var ground = new Sprite(32, 128);
	ground.image = game.assets["images/avatarBg1.png"];
	this.frame = 3;
	scene.addChild(ground);
}*/

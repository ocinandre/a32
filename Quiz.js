class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta

    //escribe aquí el código para cambiar el color de fondo 

    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario

    //llama aquí a getContestantInfo( )


    //escribe la condición para comprobar si contestantInfor no está indefinido 

    //escribe aquí el código para agregar una nota

    //escribe el código para resaltar al concursante que respondió correctamente
    
  }

}

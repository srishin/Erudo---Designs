
 

 access_token = localStorage.getItem('accessToken');    //token;
 var userid=localStorage.getItem('userId') ; //userId;  
 var room=localStorage.getItem('selected coursesession_id');
 var mouse = { 
      
      pos: {x:0, y:0},
      pos_prev: {x:0, y:0}
   };


window.onload = function() {
  
     
  var myCanvas = document.getElementById("drawing");
  var ctx = myCanvas.getContext("2d");
    
    // Fill Window Width and Height
/*    myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;*/
    $('body').width($(document).width());

  $("main.col-sm-9").width($("main.col-sm-9").width()-1).removeClass('col-sm-9 col-xs-12');
  $('.board').width($('.board').width()).removeClass('col-sm-1  col-xs-2');
  $('.canvas').width($('.canvas').width()).removeClass('col-sm-11 col-xs-11');
  $('.chatbox').width($('.chatbox').width()).removeClass('col-sm-3 col-xs-12');

   myCanvas.width=600;
   myCanvas.height=400;
  
  // Set Background Color
    // ctx.fillStyle="#fff";
    // ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
  
    // Mouse Event Handlers
  if(myCanvas){
    var isDown = false;
    var canvasX, canvasY;
    ctx.lineWidth = 2;
    
    $(myCanvas)
    .mousedown(function(e){
      isDown = true;
      ctx.beginPath();
      canvasX = e.pageX - myCanvas.offsetLeft;
      canvasY = e.pageY - myCanvas.offsetTop;
      ctx.moveTo(canvasX, canvasY);
      mouse.pos_prev.x =canvasX;
      mouse.pos_prev.y =canvasY;
      

      var xcord,ycord;
      
      var room=localStorage.getItem('selected coursesession_id');
      //socket.emit('sendchat', { line: [ mouse.pos, mouse.pos_prev ] },room);
      //console.log('down eve'+room);
      //socket.emit('sendchat', { line:[canvasX,canvasY] },room);
      // socket.on('updatechat2', function (username, data) {
      // var point=data.line;
      //     xcord=point[0];
      //  ycord=point[1];
      // });
      // ctx.moveTo(xcord, ycord);
      
      
    })
    .mousemove(function(e){
      if(isDown !== false) {
        canvasX = e.pageX - myCanvas.offsetLeft;
        canvasY = e.pageY - myCanvas.offsetTop;
        ctx.lineTo(canvasX, canvasY);
        mouse.pos.x =canvasX;
        mouse.pos.y =canvasY;
       var xcord,ycord;
       var room=localStorage.getItem('selected coursesession_id');
       //console.log('move eve'+room);
      //socket.emit('sendchat', { line:[canvasX,canvasY] },room);
     
      mouse.pos_prev.x=mouse.pos.x;
      mouse.pos_prev.y=mouse.pos.y;
      // socket.on('updatechat2', function (username, data) {
      // var point=data.line;
      //     xcord=point[0];
      //  ycord=point[1];
         //ctx.lineTo(xcord,ycord);
      //  });
      
      
      ctx.strokeStyle = "#000";
      ctx.stroke();
      }
      
    })
    .mouseup(function(e){
      isDown = false;
      ctx.closePath();
    });
  }
  
  // Touch Events Handlers
  draw = {





    started: false,
    start: function(evt) {

    //  socket.emit('sendchat', { line:[evt.touches[0].pageX,evt.touches[0].pageY] },room);
    //  socket.on('updatechat2', function (username, data) {
    //  var point=data.line;

    //  ctx.beginPath();
    //  ctx.moveTo(
    //    point[0],
    //    point[1]
    //  );

    //  this.started = true;
    // });

    },
    move: function(evt) {

      // socket.emit('sendchat', { line:[evt.touches[0].pageX,evt.touches[0].pageY] },room);
      // socket.on('updatechat2', function (username, data) {
      // var point=data.line;
      // if (this.started) {

      //  ctx.lineTo(
      //    point[0],
      //    point[1]
      //  );

      //  ctx.strokeStyle = "#000";
      //  ctx.lineWidth = 5;
      //  ctx.stroke();
      //  }
      // });

     },
    end: function(evt) {
      this.started = false;
      ctx.closePath;
    }
  };
  
  // Touch Events
  myCanvas.addEventListener('touchstart', draw.start, false);
  myCanvas.addEventListener('touchend', draw.end, false);
  myCanvas.addEventListener('touchmove', draw.move, false);
  
  // Disable Page Move
  document.body.addEventListener('touchmove',function(evt){
    evt.preventDefault();
  },false);
};
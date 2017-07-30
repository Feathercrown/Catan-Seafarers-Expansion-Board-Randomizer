function randomizeCatanBoard(){
    var ports = document.getElementById("ports").checked;
    var extraWidth = document.getElementById("extendedEdges").checked?1:0;
    
    var tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7]; //All 49 tiles, hand counted!
    var board = [[],[],[],[],[],[],[]]; //The empty board
    
    //Place down the tiles
    for(var i=0;i<7;i++){
        var width = i==0||i==6?5:(i==1||i==5?6:(i==2||i==4?7:8))+extraWidth; //Calculate the width of the current row
        for(var j=0;j<width;j++){
            var random = Math.floor(Math.random()*tiles.length); //Calculate a random tile from the tile pile (I'm a poet and I didn't even know it!)
            board[i][j] = tiles[random]; //Add it to the board
            tiles = Array.join(tiles.split(0, random),tiles.length==random?[]:tiles.split(random+1)); //Remove it from the pile
        }
    }
    
    alert(tiles);
}

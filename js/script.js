
 


const eleGrid = document.querySelector('.container');
const facile = document.querySelector('.facile');
const medio = document.querySelector('.medio');
const hard = document.querySelector('.difficile');
let listCells = 0
let listCellsHard = 0
let listCellsMedium = 0
 
/*
function remove(){
    const listCellsHard = document.querySelectorAll('.cell-hard');
    const listCellsMedium = document.querySelectorAll('.cell-medium');
    const listCells = document.querySelectorAll('.cell');

    for (i = 0; i < listCells.length; i++) {
    var elem = document.querySelector(".cell"); elem.remove();
    }
    for (i = 0; i < listCellsMedium.length; i++) {
    var elem = document.querySelector(".cell-medium"); elem.remove();
    }
    for (i = 0; i < listCellsHard.length; i++) {
    var elem = document.querySelector(".cell-hard"); elem.remove();
    }
}  */


    
        
 




facile.addEventListener('click',
    function(){

        listCellsHard = document.querySelectorAll('.cell-hard');
        listCellsMedium = document.querySelectorAll('.cell-medium');
        listCells = document.querySelectorAll('.cell');
    
        for (i = 0; i < listCells.length; i++) {
        var elem = document.querySelector(".cell"); elem.remove();
        }
        for (i = 0; i < listCellsMedium.length; i++) {
        var elem = document.querySelector(".cell-medium"); elem.remove();
        }
        for (i = 0; i < listCellsHard.length; i++) {
        var elem = document.querySelector(".cell-hard"); elem.remove();
        } 

        createGrid(100, eleGrid);  
        function createGrid(numCells, eleContainer) {
            for (let i = 0; i < numCells; i++) {
                eleContainer.innerHTML += `<div class="cell">${[i + 1]}</div>`;

                const listCells = document.querySelectorAll('.cell');
                for (let i = 0; i < listCells.length; i++) {
	            const cell = listCells[i];
	            cell.addEventListener('click',
		        function colorCell() {
			    console.log(this);
			    this.classList.toggle('clicked');
		        })}
            }
        }
    }
)   
         

    
medio.addEventListener('click',
    function(){ 
        
        listCellsHard = document.querySelectorAll('.cell-hard');
        listCellsMedium = document.querySelectorAll('.cell-medium');
        listCells = document.querySelectorAll('.cell');
    
        for (i = 0; i < listCells.length; i++) {
        var elem = document.querySelector(".cell"); elem.remove();
        }
        for (i = 0; i < listCellsMedium.length; i++) {
        var elem = document.querySelector(".cell-medium"); elem.remove();
        }
        for (i = 0; i < listCellsHard.length; i++) {
        var elem = document.querySelector(".cell-hard"); elem.remove();
        }


        
       
        createGrid(81, eleGrid);  
        function createGrid(numCells, eleContainer) {
            for (let i = 0; i < numCells; i++) {
            eleContainer.innerHTML += `<div class="cell-medium">${[i + 1]}</div>`;

            const listCellsMedium = document.querySelectorAll('.cell-medium');
                for (let i = 0; i < listCellsMedium.length; i++) {
	            const cell = listCellsMedium[i];
	            cell.addEventListener('click',
		        function colorCell() {
			    console.log(this);
			    this.classList.toggle('clicked');
		        })}
            
                
            }
        }  
    }
)  

hard.addEventListener('click',
    function(){
        

        listCellsHard = document.querySelectorAll('.cell-hard');
        listCellsMedium = document.querySelectorAll('.cell-medium');
        listCells = document.querySelectorAll('.cell');
    
        for (i = 0; i < listCells.length; i++) {
        var elem = document.querySelector(".cell"); elem.remove();
        }
        for (i = 0; i < listCellsMedium.length; i++) {
        var elem = document.querySelector(".cell-medium"); elem.remove();
        }
        for (i = 0; i < listCellsHard.length; i++) {
        var elem = document.querySelector(".cell-hard"); elem.remove();
        }


        
        createGrid(49, eleGrid);  
        function createGrid(numCells, eleContainer) {
            for (let i = 0; i < numCells; i++) {
            eleContainer.innerHTML += `<div class="cell-hard">${[i + 1]}</div>`;

            const listCellsHard = document.querySelectorAll('.cell-hard');
                for (let i = 0; i < listCellsHard.length; i++) {
	            const cell = listCellsHard[i];
	            cell.addEventListener('click',
		        function colorCell() {
			    console.log(this);
			    this.classList.toggle('clicked');
		        })}
            }
        }
    }
)
        

      

 









function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




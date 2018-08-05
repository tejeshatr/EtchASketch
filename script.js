
var Size = 16;
document.onload = drawGrid(Size);
window.onload = update();
var elements = [];
var reset = document.querySelector('.reset');
var newG = document.querySelector('.new');

function Reset(){
	for(i = 0; i < elements.length; i++)
		elements[i].style.backgroundColor = 'white';
}

function clearGrid()
{
	let g = document.querySelector('.grid');
	while(g.hasChildNodes())
		g.removeChild(g.firstChild);
}

function NewG(){
	let x = Number(prompt('Enter grid size(1-64)'));
	if(!(x >= 1 && x <= 64))
	{
		alert(x+' is invalid grid size');
		return;
	}
	clearGrid();
	Size = x;
	drawGrid(Size);
	update();
	Reset();
}

function randColor()
{
	let p = [0,0,0];
	for(let i = 0; i < p.length; i++)
		p[i] = Math.floor(Math.random()*255);

	return 'rgb('+p.join(',')+');';
}

function changeColor(e)
{
	let c = randColor();
	e.target.style.cssText += 'background-color:'+c;
}

function drawGrid(n)
{
	var grid = document.querySelector('.grid');
	let ele = '';
	let width = 0, height = 0;
	let w = grid.clientWidth;
	let h = grid.clientHeight;

	for(let i = 0; i < n; i++)
		for(let j = 0; j < n; j++){
			ele = document.createElement('div');
			grid.appendChild(ele);
			ele.classList.add('gridElement');
			
			width= w/n;
			height = h/n;
			ele.style.height = height+'px';
			ele.style.width = width+'px';
		}
}


function update(){

	elements = document.querySelectorAll('.gridElement');

	for(let i = 0; i < elements.length; i++)
		elements[i].addEventListener('mouseover', changeColor);
}
reset.addEventListener('click', Reset);
newG.addEventListener('click', NewG);

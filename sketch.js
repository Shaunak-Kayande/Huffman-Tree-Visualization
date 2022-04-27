const huffman = new HuffmanNode()
let huffmanQueue = [];
let n = 6;
let charArray1 = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
let charfreq1 = [ 55, 9, 12, 13, 16, 45 ];
let root = null;
let codes = [];

function setup() {
	let cnv = createCanvas(880, 400);
	//cnv.position(600, 100, 'relative');
	background(500);
	translate(width/2, 16);
	for (let i = 0; i < charArray1.length; i++) {
		huffman.addNode(huffmanQueue, charArray1[i], charfreq1[i]);	
	}
	root = huffman.buildTree(huffmanQueue);
	huffman.printCode(root, 1, codes);
	getTreeDetails(codes);
}


function draw() {
}

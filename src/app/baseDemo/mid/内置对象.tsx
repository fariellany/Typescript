// TODO: 内置对象

// 基本内置对象
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;


// DOM 和 BOM 的内置对象
// Document、HTMLElement、Event、NodeList

let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function (e: MouseEvent) {
    // Do something
});

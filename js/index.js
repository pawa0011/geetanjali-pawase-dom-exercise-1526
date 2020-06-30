
//    Assignment: JavaScript and the DOM
//    Author : Geetanjali Pawase
    



//  ---------------------------------------- Task 1 ----------------------------------------

//  Task 1

//  Access HTML element with id tag-line.

let tagLine = document.getElementById('tag-line');

console.log(tagLine);



//  Access all headings that belong to div with the class name bg-main-content.

let headings = document.querySelectorAll('.bg-main-content h2');

console.log(headings);



//  Create the variable collect and assign it with content of tag-line.

let collect1 = `
${tagLine.innerText}
--------------------
`;

console.log(collect1);



//  Loop through the node list of headings and append the content of each heading to variable collect

for(let i = 0; i < headings.length; i++) {
	
    // append the textual content of each heading here
    // also need to use \n 
    collect1 += `${headings[i].innerText}\n`;

}



//  After the loop, use alert to print collect

alert(collect1);



//---------------------------------------- Task 2 ----------------------------------------

//  Task 2

//  Collect all divs with the class name "box" in node list.

let div = document.querySelectorAll('.bg-main-content .box');

console.log(div);



//  Access 13th div with class name box that belongs to div with the class name bg-main-content.

let collect2 = `
${div[12].querySelector('h2').innerText}
--------------------
`;

console.log(collect2);



//  Create variable collect and assign it with the heading and body-text that belong to the 13th div in order to resemble the screenshot below.

let body = div[12].querySelectorAll('p');

console.log(body);

for(let i = 0; i < body.length; i++){
    
    collect2 += `${body[i].innerText} \n\n`;
    
}



//  Print collect.

alert(collect2);



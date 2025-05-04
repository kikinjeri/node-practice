import fs from 'fs';



//const ottawa = {
  //          country: 'Canada',
    //        province: 'Ontario',
      //      languages: 'English & French'
        
//};
  //      console.log(ottawa);

//const food = {
  //  fone: 'poutine',
    //ftwo: 'shawarma',
    //fthree: 'beavertails'
//}

  //const woman = {
    //    name: 'Mwihaki Githii',
      //  interests: 'Web Development',
        //title: 'Jr Software Developer'

    //} ; 
 //console.log(woman);

 

 //const eng = {
   //     webdev: 'Web Development',
     //   coding: ['HTML', 'CSS', 'JS', 'Node.js', 'Express', 'Mongdo.db' ],
       // title: 'Jr. Software Developer'
        
 //};
 //console.log(eng);


   //  console.log('I live in ', ottawa.province, ottawa.country, ', in the capitol,  where the official languages are', ottawa.languages);
    //console.log('My name is ', woman.name, '. I am ', woman.ethnicity, ' and I am interested in ', woman.interests);    
    //console.log('I am studying', eng.webdev, 'by building projects in ', eng.coding)
 


   

   // const generatePage =()=> 'Name: Mwihaki Githii, Github: kikinjeri.git';
    //console.log(generatePage());

   // const generatePage = (username, githubName) => `Name: ${username}, Github: ${githubName}`;
   // console.log (generatePage('Mwihaki Githii', 'kikinjeri.git'));

const username = 'Mwihaki Githii';
const githubName = 'kikinjeri.git';

function generatePage(username, githubName) {
    return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML file</title>
  </head>

  <body>
    <h1>${username}</h1>
    <h2><a href="https://github.com/${githubName}">Github</a></h2>
  </body>
  </html>
  `;
}

fs.writeFile('index.html', generatePage(username, githubName), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
    

    
    

    







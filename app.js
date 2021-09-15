//Select From
const memeForm=document.querySelector('form');
//Select Create button
const addMeme=document.querySelector('#create');
//Select Div containing meme
const memeDiv=document.querySelector('#memeDiv');


//Add an event listener on the button to add the memes created when clicked
addMeme.addEventListener('click', function(event) {
    //set variav=ble to validate creation when all information are typed in
    let create=true;
    //prevent default form submition
    event.preventDefault();
    
    //get top text
    let topText=document.querySelector('#tText').value;
    if(topText===''){
        create = false;
        alert("Enter Top Text!");
    }
    //get bottom text
    let bottomText=document.querySelector('#bText').value;
    if(bottomText===''){
        create = false;
        alert("Enter Bottom Text!");
    }
    //get image path
    let path=document.querySelector('#memeImage').value;
     if(path==''){
         create = false;
        alert("Enter Path for Image!");
    }
    
    //create meme
    if(create){
        //create div around img and text
        let container = document.createElement('div');
        container.setAttribute('class', 'container');
        memeDiv.append(container);

        //image
        let newImage = document.createElement('img');
        newImage.setAttribute('src',path);
    
        newImage.setAttribute('class', 'newImage');
        container.append(newImage);

        //text
        let textOnTop=document.createElement('div');
        textOnTop.innerText=topText;
        textOnTop.setAttribute('class','topText');
        container.append(textOnTop);
        
        let textAtBottom=document.createElement('div');
        textAtBottom.innerText=bottomText;
        textAtBottom.setAttribute('class','bottomText');
        container.append(textAtBottom);

        //delete button
        let deleteButton=document.createElement('button');
        deleteButton.innerText='Delete Meme!';
        deleteButton.setAttribute('class','deleteButton');
        container.append(deleteButton);

        //reset form
        memeForm.reset();
    }
  });

  
  //Add event listener on delete meme button by delegation to memeDiv
  memeDiv.addEventListener('click', function(e){
      if(e.target.tagName==='BUTTON'){
          e.target.parentElement.remove();
      }
  })

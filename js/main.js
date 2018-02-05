// Declared variables at the top
let playerName = "";
let choiceList = [];
let currentPage = null;


// Prompt for user to input their name, will be placed in playerName variable
playerName = prompt("What is your name?");


// This uses getCurrentPage function to fetch the current page and return a page object
function getCurrentPage(slug) {
  currentPage = storyData[slug]; //slug is value key
  return currentPage;
}


// Adds slug to choiceList array
function recordChoice(slug) {
  choiceList.push(slug);
}


function undoChoice() {
  choiceList.pop(); //  choiceList.pop() removes the last item in the arrya, in this case, the last 'slug'
  return choiceList[choiceList.length-1]; //Used to get last item in the array.
}


  function changePage(slug) {
        recordChoice(slug), // This records the latest choice and takes the slug parameter
        currentPage = getCurrentPage(slug), // Calls getCurrentPage with slug parameter and sets current page
        updatePage(currentPage); // Invokes updatePage function from above
  }


///////////////////////////////////////////////////
//////// Story Data //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Only edit this data to change/enhance the story. Be sure to watch for how  //
// changes to the story data might affect the mechanisms that output the      //
// story.                                                                     //
////////////////////////////////////////////////////////////////////////////////
// NOTE: The data below is organized as a JS Object. The content for each     //
// page is stored using a "slug" -- a short alphanumeric identifier (for      //
// example, "p1", "p2", "homeEnd", etc.). Each page contains a `text`         //
// property and a `choices` property. The `choices` property is an Array that //
// contains all of the choices, including the slug that each choice should    //
// link to.                                                                   //
////////////////////////////////////////////////////////////////////////////////

var storyData = {
    title: "Puppy Quest",
    p1: {
        text: `You are a puppy named ${playerName}. You are excited as you await your owner to come home from work. You rustle in your kennel and realize that they left the cage unlocked.`,
        choices: [
            {
                text: `Rush out into freedom!`,
                link: 'p2'
            }, {
                text: `Stay put, you don't want to get in trouble.`,
                link: 'homeEnd'
            }
        ]
    },
    homeEnd : {
        text: `You enjoy a nice nap curled up in a ball in the safety of your kennel. 
                <br><br>
                The End.`,
        choices: [
            {
                text: `Play again?`,
                link: 'p1'
            }
        ]
    },
    p2 : {
        text: `You run out of the kennel! Freedom awaits! The kitchen is nearby where all your treats are kept, but there is also the doggy door that leads to the backyard.`,
        choices: [
            {
                text: `Go check out the kitchen!`,
                link: 'p3'
            }, {
                text: `That backyard looks quite nice...`,
                link: 'outsideEnd'
            }, {
                text: `You've already adventured too far, time to go back to your kennel`,
                link: 'homeEnd'
            }
        ]
    },
    outsideEnd : {
        text: `You rush through the doggy door and crunch your paws on some dried leaves as you take in the fresh air. The sounds of birds chirping encompass your ears and you close your eyes as a small breeze rolls in. The serenity is cut short when a loud, piercing sound pangs through the calm - the house security alarms.`,
      choices: [
          {
              text: `Run back inside and into your kennel and wait for the alarms to stop.`, 
              link: 'homeEnd'       
      }, { 
              text: `Run off into the freedom your little heart has always dreamed!!!`,
              link: 'finalEnd'
         }
       ]
     },
  finalEnd : {
              text: `You run off into the fields behind your backyard to start your new puppy life. 
                <br><br>
                The End.`,
        choices: [
            {
                text: `Play again?`,
                link: 'p1'     
            }
     ]
  },
    p3 : {
        text: `You arrive at the kitchen and start sniffing around to find something yummy. You stumble upon the cabinet where your treats are usually held.`,
        choices: [
            {
                text: `Leave the treats and keep exploring the house.`,
                link: 'p4'
            }, {
                text: `Take the treats`,
                link: 'foodEnd'
            }
        ]
    },
    foodEnd : {
        text: `You nudge open the cabinet with your nose and find your puppy snacks. Without hesitation, you reach in and rip the bag open with a little too much zeal, coating the kitchen tile with puppy treats. You quickly try to eat all the treats and run into the dining table, knocking over a vase and shattering it immediately upon impact. You're in very big trouble now.`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p4 : {
        text: `As you explore the rest of the house, you notice a hissing sound and quickly turn around. It's Tubs, the family cat that isn't a fan of your newfound presense in the household.`,
        choices: [
            {
                text: `Leave him alone and continue through the house.`,
                link: 'p5'
            }, {
                text: `This is your house too! Show him your mighty roar!`,
                link: 'catEnd'
            }
        ]
    },
    catEnd : {
       text: `Tubs is terrified of your roar and runs for his life! He runs as fast as he can out the doggy and sets off the alarm. Uh oh...`,
      choices: [
        {
          text: `Start over?`,
          link: 'p1'
        }
      ]
    },

    p5 : {
        text: `You ignore Tubs and keep walking through the house. You navigate you way to the master bedroom and see a spherical object on the nightstand next to the bed. Is it...? No...it couldn't be...THE BALL?`,
        choices: [
            {
              text: `Maybe go back to your kennel, you've already adventured too much.`,
                link: 'adventureEnd'
            }, {
                text: `Take the ball!!!`,
                link: 'p6'
            }
        ]
    },
    adventureEnd : {
        text: `You roam around the rest of the house but nothing seems to captivate you as much as the ball did. You decide it's been enough rebellious behavior for one day and decide to lay back in your kennel.
                <br><br>
                The End`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p6 : {
        text: `You jump up on the nightstand and grab the ball, but it turns out, the spherical object you absolutely believed was a ball was actually an apple, your absolute favorite fruity treat!`,
        choices: [
            {
                text: `Leave it, maybe your owners want to have it for a snack later? Or maybe Tubs is watching...`,
                link: 'appleEnd'
            }, {
                text: `Take the apple, no one would never know.`,
                link: 'p7'
            }
        ]
    },
    appleEnd : {
        text: `You leave the apple and keep looking around the room for something fun to play with. You poke your little snout inside the closet and see all the shoes laying around. You look at the fuzzy slippers inside the room that look so tempting to gnaw at.`,
        choices: [
            {
                text: `Boring! Keep adventuring around.`,
                link: `adventureEnd`,                
            }, {
                text: `Grab it! You were good about the apple, have a little fun?`,
                link: 'p7'
            }
        ]
    },
    p7 : {
        text: `You take the apple and hurry back to your kennel and tuck it under your blankets. You now can rest easy with a your favorite snack! What a fun and productive adventure, time to sleep!
                <br><br>
                The End`,
        choices: [
            {
                text: `Play again?`,
                link: 'p1'
            }
        ]
    }
};

///////////////////////////////////////////////////
//////// Main Script /////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// This script runs the game. You should only edit it if you are attempting a //
// stretch goal. Otherwise, this script calls the functions that you have     //
// created above.                                                             //
////////////////////////////////////////////////////////////////////////////////

let title = document.querySelector('#story-title');
title.innerHTML = storyData.title;

let pageContent = document.querySelector('#story-text');
let choicesUL = document.querySelector('#choices');

function updatePage(page) {
    pageContent.innerHTML = page.text;
    choicesUL.innerHTML = '';
    for (choice of page.choices){
        let newLI = document.createElement('li');
        newLI.innerHTML = choice.text;
        newLI.setAttribute('data-slug', choice.link);
        choicesUL.appendChild(newLI);
    }
    addEventListeners();
}

function addEventListeners(){
    let choices = document.querySelectorAll('#choices li');
    for (choice of choices){
        choice.addEventListener('click', function(e){
            console.log(`Moving to page: ${e.target.dataset.slug}`);
            changePage(e.target.dataset.slug);
        })
    }
}

let undo = document.querySelector('#undo');
undo.addEventListener('click', function(e){
    console.log('Undoing last choice.');
    let slug = undoChoice();
    currentPage = getCurrentPage(slug);
    updatePage(currentPage);
})

currentPage = storyData.p1;
recordChoice('p1');
updatePage(currentPage);


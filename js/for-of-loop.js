/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

function capitalizeWord(word){
    return word[0].toUpperCase() + word.substr(1);
}

for (let day of days) {
   let dayWeek =  capitalizeWord(day);
   console.log(dayWeek);
}

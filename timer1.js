/*
** Code Review exercise for Lighthouse Labs**
** Student: Omar Sallam 
** Exercise link: https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/390?journey_step=32&workbook=7

** Objective: Implement a timer that will beep when (x) amount of time has passed.
** Desired outcome: have it beep at 3, 5, 9, 10, and 15 seconds
*/

// timeEntries - to enter seconds into the terminal and store them as an array
const timeEntries = process.argv.slice(2);

/*
*Function - to execute machineSound 
If no time it exists otherwise it take an entry(time) to count for sound.*/

const machineSound = function(timeEntry) {
  timeEntry = Number(timeEntry) * 1000; // Turning character into a number and multiplying it to turn into seconds
  if (timeEntry < 0 || typeof(timeEntry) !== 'number') {
    return false; // exit
  } 
  else {
    setTimeout(() => {
      process.stdout.write('\x07'); // Code for machine sound
    }, timeEntry) 
  }
};

// Execution and testing - will loop through timeEntries array for entries and repeat the beeps accordingly
for (let i = 0; i < timeEntries.length; i++) {
  machineSound(timeEntries[i]);
};


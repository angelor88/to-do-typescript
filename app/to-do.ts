// class Task {
//   done: boolean;
//   description: string;
//   priority: string;

class Task {
  done: boolean = false;

  // constructor(descriptionParameter: string, priorityParameter: string) {
  //   this.done = false;
  //   this.description = descriptionParameter;
  //   this.priority = priorityParameter;
  // }

  // Constructor Shortcuts with Public
  constructor(public descriptionParameter: string, public priorityParameter: string) {}

  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];

tasks.push(new Task('Do the dishes.','Medium'));
tasks.push(new Task('Buy chocolate.','Low'));
tasks.push(new Task('Do laundry','High'));

// Let's call markDone method
tasks[0].markDone();
tasks[1].markDone();

// Looping in To Do
for (var task of tasks){
console.log(task);
}

// A basic TypeScript for loop looks like this:
//
// for(var individualThing of listOfMultipleThings) {
//   console.log(individualThing);
// };

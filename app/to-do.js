// class Task {
//   done: boolean;
//   description: string;
//   priority: string;
var Task = /** @class */ (function () {
    // constructor(descriptionParameter: string, priorityParameter: string) {
    //   this.done = false;
    //   this.description = descriptionParameter;
    //   this.priority = priorityParameter;
    // }
    // Constructor Shortcuts with Public
    function Task(descriptionParameter, priorityParameter) {
        this.descriptionParameter = descriptionParameter;
        this.priorityParameter = priorityParameter;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry', 'High'));
// Let's call markDone method
tasks[0].markDone();
tasks[1].markDone();
// Looping in To Do
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
// A basic TypeScript for loop looks like this:
//
// for(var individualThing of listOfMultipleThings) {
//   console.log(individualThing);
// };

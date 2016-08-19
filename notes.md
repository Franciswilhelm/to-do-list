notes
Ping-Pong
Create a web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:

Numbers divisible by 3 are replaced with "ping"
Numbers divisible by 5 are replaced with "pong"
Numbers divisible by 15 are replaced with "ping-pong"
A user should be able to enter a new number and see new results over and over again.

Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file.

Business logic: The code responsible for handling the evaluation and manipulation of data; does not require any user interface.

User interface logic: The code responsible for the interaction between the user and the application; handles tasks such as event listening, user input forms, DOM manipulation, display and styling. We have not covered how to write the actual code for this yet; don't worry!

Make sure to declare all variables. At the moment, you never declared your result variable so technically it does not exist outside the scope of the branching that determines the resulting track. Instead, you should have used the 'course' variable you declared at the top of your file.

Keep your form submit function more organized by grabbing all of the user input before processing the results.
You should also move the functionality that increments the counters and determines the results to a function outside of the document.ready.

Make sure to remove all console.logs before your final commit

Use the 'git diff' command to see a print out of all of the changes in a file since your last commit. Ex git diff css/styles.css

Add files individually rather than using git add . for each commit. Not all changes in every file will be related.

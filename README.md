# final-project-running-journal-cs-290
**Assignment and Code Blog entry due at 11:59pm on Monday, 6/15/2018**

**Demo due by 5:00pm on Friday, 6/15/2018**

The goal of this assignment develop a complete web app utilizing all tools taught throughout this term of CS290. We are to design and develop the web page using HTML, CSS, JS, NodeJS, as well as using modules such as handlebars and express and databases.

## 1. Design

  * I'm developing a web page that a user can visit and type up and keep track of their running progress. It's similar to google docs in that the user can write a document and edit it whenever they want. It'll have a field for the title, a field for the text, and possibly a field for the distance run and the amount of time.

  * There will only be one page that has listed, in flex boxes, all the documents written thus far by the user, including the name, date, and distance run for the entry. This page will also have a modal for text editing
    * The modal of this page will open when the user clicks either the "Log New Run" button or when the user clicks on one of the already added documents listed wherein the user can edit the text (might do this differently if easier)

  * All entries upon completion will be immediately added to the mongoDB database and the on screen list will be updated.
    * The user will also be able to delete any entry they desire via a small button in each list entry (it will ask "are you sure?")

  * Might add graph functionality

## 2. The How

This is the process by which the assignment will get completed. Basically, I will go through developing this website by way of emulating the format of this term:

  * First, I will design the basic layout of the page, edit, iterate, and officially determine what the website will look like, hardcoded pieces and all.

  * Second, I will complete the functionality of the page via client-side JS. This will include the input of content via large pop-up modal, inclusion into page upon confirmation of text, editing of previously input entries, deletion of entries, searching of entries, and so on (maybe a sort function).

  * Third, I will work on the NodeJS server stuff, but this will be edited when doing the next step

  * Fourth, I'll templatize all aspect of my page with handlebars

  * Lastly, I'll add database functionality





## Code Blog

Add an entry to your Code Blog reflecting on your experience with this assignment.  Here are some questions you could answer (though these aren't the only ones):

  * What was challenging about the assignment, and what specific kinds of problems did you have.  How did you solve those problems?

  * What did you learn from the assignment?  Were there any special insights you had?  What did you find that you already knew?

  * What kinds of resources were helpful for completing the assignment?  Specific websites?  Lectures?  The class Piazza forum?  The TAs?  How did you use each of these resources?

  * What are one or two things you had to Google to complete the assignment?

## Submission

As always, we'll be using GitHub Classroom for this assignment, and you will submit your assignment via GitHub.  Just make sure your completed files are committed and pushed by the assignment's deadline to the master branch of the GitHub repo that was created for you by GitHub Classroom.  A good way to check whether your files are safely submitted is to look at the master branch your assignment repo on the github.com website (i.e. https://github.com/OSU-CS290-Sp18/final-project-running-journal-cs-290-fp/). If your changes show up there, you can consider your files submitted.

In addition to submitting your assignment via GitHub, you must submit the URL to your code blog entry (e.g. http://web.engr.oregonstate.edu/~YOUR_ONID_ID/cs290/blog.html) via Canvas by the due date specified above.

## Grading criteria

The assignment is worth 40% of class grade

# SetHap
What happened this day in your favorite band's setlist history?

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sep 10th| Project Description Wireframes / Priority Matrix / Functional Components / Core Application Structure (HTML, CSS, etc.) Pseudocode | Incomplete
|Sep 11th|  all data points selected, rendered to DOM | Incomplete
|Sep 12th| Initial Clickable Model / styling / media queries | Incomplete
|Sep 13th| MVP | Incomplete
|Sep 14th|  | Incomplete
|Sep 15th|  | Incomplete
|Sep 16th| Present | Incomplete


## Project Description

When the user submits a band name, SetHap will generate a live concert setlist from a given date paired with a news happening from that same day.

## Wireframes

https://res.cloudinary.com/dfhdie1sf/image/upload/v1568139027/SetHap/SetHap---Wireframe-cc-Premium_dhdvre.pdf

## Priority Matrix 
on iPhone

## API Data Sample

https://res.cloudinary.com/dfhdie1sf/image/upload/v1568140080/SetHap/newsapi-json-snip.jpg
https://res.cloudinary.com/dfhdie1sf/image/upload/v1568139329/SetHap/setlist.fm-json-snip.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- build input for use to enter band name
- grab necessary data from news api (title, descrip, img, date published, link to full article)
- grab necssary data from setlist api (eventdate, band name, venue, city, state, setlist)
- when user submits band name a random setlist will render, tied to the date of an article published on that day

#### PostMVP 

- build button to generate random setlist/news article pairing
- build input to allow user to submit date
- display more articles from that setlist date


#### Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| query select required news article data points | H | 4hrs| TI | AT |
| render article data points to DOM | H | 4hrs| TI | AT |
| query select required setlist data points | H | 4hrs| TI | AT |
| render news article data to DOM | H | 4hrs| TI | AT |
| connect setlist date to article date | H | 4hrs | TI | AT |
| build band input, submit button | H | 4hrs| TI | AT |
| styling | M | 4hrs | TI | AT|
| add button to generate a random setlist/article | L | 4hrs | TI | AT |
| query select required news article data points | L | 4hrs| TI | AT |
| Total | H | 6hrs| 5hrs | 36hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

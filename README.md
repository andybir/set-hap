# SetHap
What happened this day in your favorite band's setlist history?
https://pages.git.generalassemb.ly/andyb/SetHap/

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sep 10th| Project Description Wireframes / Priority Matrix / Functional Components / Core Application Structure (HTML, CSS, etc.) Pseudocode | Complete
|Sep 11th|  all data points selected, rendered to DOM | Complete
|Sep 12th| Initial Clickable Model | Complete
|Sep 13th| styling / pMVP / media queries | Incomplete
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
https://res.cloudinary.com/dfhdie1sf/image/upload/v1568145283/SetHap/setlist-json-snip-1.jpg
https://res.cloudinary.com/dfhdie1sf/image/upload/v1568145284/SetHap/setlist-json-snip-2.jpg

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
| query select required news article data points | H | 4hrs| 1hr | 1hr |
| render article data points to DOM | H | 4hrs| 1hr | 1hr |
| query select required setlist data points | H | 4hrs| 1.5hrs | 1.5hrs |
| render setlist data to DOM | H | 4hrs| 1.5hrs | 1.5hrs |
| allow search by mbid | H | 4hrs| 1.5hrs | 1.5hrs |
| push mbid into setlist api | H | 4hrs| 1.5hrs | 1.5hrs |
| connect setlist date to article date | H | 4hrs | 1.5hrs | 1.5hrs |
| build band input, submit button | H | 2hrs| 2hrs | 2hrs |
| styling | M | 4hrs | TI | AT|
| add button to generate a random setlist/article | L | 4hrs | TI | AT |

| Total | H | 36hrs| TI | AT |


## Code Snippet

In this snippet I took the date from the setlist results, changed the order (MM-DD-YYYY to DD-MM-YYYY), separated them by a dash (-) and pushed them into the date queries in the NYT API.
```
let arr = eventDate.split("-");
        getNews(arr[2], arr[1], arr[0])

let newsResponse = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=world&fq=pub_date:"${year}-${month}-${day}"&api-key=ep9FTX8Z54fyUsBz9zwDaxII8xA6k7ML`)
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
 
  

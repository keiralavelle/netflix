# Original Setup 
https://www.netflix.com/browse

## How to run project locally 
Open Terminal 
npm install
npm run dev 


## MP1
Implemented interactive search and genre filtering using React state and event handlers
Users can type in the search bar and select a genre to filter recommended titles.
Added a clickable details card interaction that opens a details card (summary, rating, match %, cast) of each title.

Search + filtering helps users quickly find content they’ll enjoy without scrolling endlessly.

Next: Build out “My List” saving (add/remove titles), improve the homepage layout into rows

## MP3
original website: https://www.netflix.com/browse

I chose to recreate a simplified version on Netflix, focusing on browsing and saving. 
The recreated app includes a homepage, search funcitonality, genre filtering, title details view, and a my list where users can save titles to watch later. 

Features 
Homepage 
displayed recommended titles 
Search 
users search for titles, and the list updates
Genre Filterring
users filter content by genre using a dropdown menu 
Title Details 
clicking on a title opens a details view showing title, match percentage, rating, and image 
My List 
users can add titles to a personal list using the + my list button 
Remove Titles 
ttitles can also be removed 

Technical Implementation 
Stage Management 
search 
genre 
selected 
myListIds 
page 

Routing Structure 
conditional rendering for page navigation 
My List Page displays saved titles 

Hooks Used 
useState 
- search input, selected genre, saved titles, page navigation 
useMemo 
- genre list generation, filtered search results, save titles list 
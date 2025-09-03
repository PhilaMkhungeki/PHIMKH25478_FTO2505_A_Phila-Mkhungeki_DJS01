//@ts-check

import { podcasts } from "../data.js";

//get from local storage and display on the app
/**
 * 
 *  
 */
export function displayPodcast(){

    const main = document.querySelector(".main");

    podcasts.forEach((podcast) => {
        //create a div for each podcast
        const podcastCard = document.createElement("div");
        podcastCard.classList.add("podcast");

        podcastCard.innerHTML = `
            <img src="${podcast.image}"/>
            <h2 class="title">${podcast.title}</h2>
            <p class="seasons">${podcast.seasons}</p>
            <p class="genres">${podcast.genres}</p>
            <p class="update">${podcast.updated}</p>
        `;
        //append to the html main section
        main?.appendChild(podcastCard);
    });
    
}
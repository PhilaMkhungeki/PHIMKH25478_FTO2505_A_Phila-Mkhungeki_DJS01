

import { podcasts, genres } from "../data.js";
import { displayPodcastModal } from "./modal.js";
/**
 * display a list of podcast shows on the landing page
 *  
 */
export function displayPodcast(){

    const main = document.querySelector(".main");

    podcasts.forEach((podcast) => {
        //create a div for each podcast
        const podcastCard = document.createElement("div");
        podcastCard.classList.add("podcast");

        //store the podcast ID in a dataset
        podcastCard.dataset.podcastID = podcast.id;

        //convert the date to be in a human-readable format
        const date = new Date(podcast.updated);

        //display genre names
        const genreNames = podcast.genres.map(id => {
            const genre = genres.find(g => g.id === id);
            return genre ? genre.title : "unknown";
        }).join(", ");

        podcastCard.innerHTML = `
            <img src="${podcast.image}"/>
            <h2 class="title">${podcast.title}</h2>
            <p class="seasons">${podcast.seasons} seasons</p>
            <p class="genres">${genreNames}</p>
            <p class="update">Updated: ${date.toDateString()}</p>
        `;
        //append to the html main section
        main?.appendChild(podcastCard);

        //add a click event listener for the podcast
        podcastCard.addEventListener('click', () => {
                displayPodcastModal(podcast.id);
        });
    });
}
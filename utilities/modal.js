
import { podcasts } from "../data.js";

/**
 * @param {String} podcastID 
 *  Display podcast data
 */
export function displayPodcastModal(podcastID){

    const modal = document.getElementById("modal");
    const podcastToRender = podcasts.find(i => i.id === String(podcastID));

    modal.innerHTML = `
        <span class="close">&times;</span>
        <h2 class="title">${podcastToRender.title}</h2>
        <img src="${podcastToRender.image}"/>
        <p class="seasons">${podcastToRender.description}</p>
        <p class="genres">${podcastToRender.genres}</p>
        <p class="update">${podcastToRender.updated}</p>
        <p class="seasons">${podcastToRender.seasons}</p>
    `;

    modal.showModal();
}
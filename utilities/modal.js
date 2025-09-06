
import { podcasts } from "../data.js";

/**
 * @param {String} podcastID 
 *  Display podcast data
 */
export function displayPodcastModal(podcastID){

    const modal = document.getElementById("modal");
    const podcastToRender = podcasts.find(i => i.id === String(podcastID));

    const date = new Date(podcastToRender.updated);

    modal.innerHTML = `
        <span class="close">&times;</span>
        <h2 class="title">${podcastToRender.title}</h2>
        <img src="${podcastToRender.image}" alt="Large Cover Image"/>
        <div>
            <p>Description</p>
            <p class="seasons">${podcastToRender.description}</p>
            <p>Genres</p>
            <p class="genres">${podcastToRender.genres}</p>
            <p class="update">Last updated: ${date.toDateString()}</p>
        </div>
        <h3>Seasons</h3>
        <p class="seasons">${podcastToRender.seasons}</p>
    `;

    modal.showModal();

    //close modal
    closeModal();
}

export function closeModal() {
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    
    closeModal.addEventListener('click', () => {
        modal.close();
    });
}
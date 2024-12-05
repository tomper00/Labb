// Hitta elementet att observera
const targetElement = document.querySelector(".owpl-quick-search-dialogbody_fhnqszy .dropdown-content");

if (targetElement) {
    // Skapa en observer
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            console.log('Mutation detected:', mutation); // Skriver detaljer om ändringarna till konsolen
            console.log("Search");
            console.log(document.querySelector(".omnia-workplace-quick-search[dialogmode="true"] input").innerText);
        }
    });

    // Konfiguration för vilka ändringar som ska övervakas
    const config = { 
        childList: true, // Lyssna på ändringar i child nodes
        attributes: true, // Lyssna på ändringar av attribut
        subtree: true, // Observera eventuella child nodes under elementet
        characterData: true // Lyssna om textinnehållet ändras
    };

    // Starta övervakningen
    observer.observe(targetElement, config);

    console.log('Observer is now watching the element...');
} else {
    console.error('Target element not found.');
}

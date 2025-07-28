// Script pour charger les produits depuis l'API Firebase
async function chargerProduits() {
  try {
    const response = await fetch("/api/produits"); // Appel à votre Cloud Function
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const produits = await response.json();
    console.log("Données de produits reçues :", produits);

    // Mettre à jour votre HTML pour afficher les produits
    const listeProduitsDiv = document.getElementById("liste-produits");
    if (listeProduitsDiv) {
      listeProduitsDiv.innerHTML = produits.map(p => `
        <div class="produit-item" data-aos="fade-up" data-aos-delay="100">
          <div class="produit-nom">${p.nom}</div>
          <div class="produit-prix">${p.prix}€</div>
        </div>
      `).join("");
      
      // Réinitialiser AOS pour les nouveaux éléments
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }
  } catch (error) {
    console.error("Impossible de charger les produits :", error);
    
    // Afficher un message d'erreur à l'utilisateur
    const listeProduitsDiv = document.getElementById("liste-produits");
    if (listeProduitsDiv) {
      listeProduitsDiv.innerHTML = `
        <div class="produit-item" style="grid-column: 1 / -1;">
          <p style="color: #dc3545;">Erreur lors du chargement des produits. Veuillez réessayer plus tard.</p>
        </div>
      `;
    }
  }
}

// Fonction pour tester toutes les APIs
async function testerAPIs() {
  const apis = [
    { url: "/api/content", nom: "Contenu" },
    { url: "/api/about", nom: "À propos" },
    { url: "/api/blog", nom: "Blog" },
    { url: "/api/contact", nom: "Contact" },
    { url: "/api/produits", nom: "Produits" }
  ];

  console.log("=== Test des APIs MAKAYA ===");
  
  for (const api of apis) {
    try {
      const response = await fetch(api.url);
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ ${api.nom} (${api.url}):`, data);
      } else {
        console.error(`❌ ${api.nom} (${api.url}): HTTP ${response.status}`);
      }
    } catch (error) {
      console.error(`❌ ${api.nom} (${api.url}): Erreur réseau`, error);
    }
  }
}

// Appeler les fonctions au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
  chargerProduits();
  
  // Optionnel: tester toutes les APIs (pour debug)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log("Mode développement détecté - Test des APIs activé");
    testerAPIs();
  }
});

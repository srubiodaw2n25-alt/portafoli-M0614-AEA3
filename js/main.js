// js/main.js
/**
 * Mostra o amaga el menú de navegació en dispositius mòbils.
 * Comprova si l'element té la classe 'is-active' i la commuta.
 *
 * @param {string} menuId - L'identificador (ID) de l'element del menú al DOM.
 * @returns {void} - No retorna cap valor.
 */
function toggleMobileMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.classList.toggle('is-active');
        console.log(`Menú ${menuId} commutat.`);
    } else {
        console.error(`No s'ha trobat l'element amb ID: ${menuId}`);
    }
}
/**
 * Calcula la suma de dos preus per al carret de la compra.
 * (Exemple extra per veure com queda a la documentació)
 *
 * @param {number} preuA - El preu del primer producte.
 * @param {number} preuB - El preu del segon producte.
 * @returns {number} - La suma total.
 */
function calcularTotal(preuA, preuB) {
    return preuA + preuB;
}

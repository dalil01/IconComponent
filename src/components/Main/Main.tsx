import "./Main.css";

import React, { JSX } from "react";

export default function Main(): JSX.Element {
	return (
		<main className="main">
			<p> Dans le monde des applications web d'aujourd'hui, les icônes sont incontournables.
				IconComponent est une ressource pensée pour rendre l'intégration d'icônes dans vos projets web
				rapide et fluide.
			</p>

			<p>
				- Retrouvez comment utiliser la bibliothèque Fantasticon pour
				transformer vos images SVG en icônes de police, sans tracas.
			</p>

			<p>
				- Intégrer un composant Icon pour afficher vos plus belles icones,
			</p>

			<button>Download</button>

			<p>
				Note: Si vous ne trouvez pas la version du composant Icon adaptée à votre framework préféré,
				n'hésitez pas à proposer un Pull Request sur GitHub.
				Nous encourageons la collaboration et sommes toujours ouverts à l'amélioration de cette
				ressource pour mieux servir la communauté !
			</p>
		</main>
	);
}

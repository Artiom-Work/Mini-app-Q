'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const marker = entry.target;
				const nextElement = marker.nextElementSibling;

				if (nextElement &&
					nextElement.classList.contains('lazy-load') &&
					nextElement.getAttribute('style')?.includes('display: none')) {

					nextElement.removeAttribute('style');
					marker.classList.add('marker-viewed');
					observer.unobserve(marker);

					const nextMarker = document.querySelector('.load-marker:not(.marker-viewed)');
					if (nextMarker) {
						observer.observe(nextMarker);
					}
				}
			}
		});
	}, {
		rootMargin: '200px 0px',
		threshold: 0.1
	});

	const firstMarker = document.querySelector('.load-marker:not(.marker-viewed)');
	if (firstMarker) {
		observer.observe(firstMarker);
	}
});


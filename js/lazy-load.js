'use strict';



document.addEventListener('DOMContentLoaded', () => {
	const lazyLoadElements = document.querySelectorAll('.lazy-load');
	console.log(lazyLoadElements);

	const observer = new IntersectionObserver((entries) => {
		// entries - массив элементов, которые пересекли viewport
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				console.log(entry.target);
				// Если элемент пересек viewport
				// Удаляем класс lazy-load
				entry.target.style.display = "block";
				// Отписываемся от наблюдения
				observer.unobserve(entry.target);
			}
		});
	});

	lazyLoadElements.forEach(element => {
		observer.observe(element);
	});
});



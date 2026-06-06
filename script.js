const revealItems = document.querySelectorAll('.reveal');
const bookingForm = document.querySelector('#bookingForm');
const bookingMessage = document.querySelector('#bookingMessage');

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			}
		});
	},
	{ threshold: 0.15 }
);

revealItems.forEach((item, index) => {
	setTimeout(() => observer.observe(item), index * 55);
});

if (bookingForm && bookingMessage) {
	bookingForm.addEventListener('submit', (event) => {
		event.preventDefault();

		if (!bookingForm.checkValidity()) {
			bookingMessage.textContent = 'Please complete all booking fields before submitting.';
			return;
		}

		const formData = new FormData(bookingForm);
		const name = formData.get('name');
		const service = formData.get('service');
		const date = formData.get('date');

		bookingMessage.textContent = `Thank you, ${name}. Your request for ${service} on ${date} has been received.`;
		bookingForm.reset();
	});
}

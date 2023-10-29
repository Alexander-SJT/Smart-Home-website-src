const smartInit = () => {
	const infoItems = document.querySelectorAll('.smart__item-content');
	const checkboxes = document.querySelectorAll('.smart__input');

	const cssIsVisible = 'smart__item-content--isVisible';
	const cssVisibleItem = '.smart__item';
	const cssContentItem = '.smart__item-content';

	infoItems[0].classList.add(cssIsVisible);

	function toggleClass(elem, cssClass) {
		elem.classList.toggle(cssClass);
	}

	function closeOtherContentItems(event) {
		const checkedCheckboxes = document.querySelectorAll('.smart__input:checked');
		checkedCheckboxes.forEach((checkbox) => {
			if (checkbox !== event.target) {
				const contentItem = checkbox.closest(cssVisibleItem).querySelector(cssContentItem);
				toggleClass(contentItem, cssIsVisible);
				checkbox.checked = false;
			}
		});
	}

	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener('input', (event) => {
			const contentItem = event.target.closest(cssVisibleItem).querySelector(cssContentItem);
			toggleClass(contentItem, cssIsVisible);
			closeOtherContentItems(event);
		});
	});
};

export default smartInit;

const openModal = document.querySelectorAll('div.modal');
const closeModal = document.querySelectorAll('div.modal__close')
const modal = document.getElementById('modal_main');
const objModalSuccess = document.getElementsByClassName('show-success')
const modalSuccess= document.getElementById('modal_success');

document.body.addEventListener("click", handleModalActiv);

	for(let i = 0; i < closeModal.length; i++) {
	closeModal[i].addEventListener("click", handleOpenModal);
	}

	objModalSuccess[0].addEventListener("click", handleModalSuccess);

function handleOpenModal() {
for(let i = 0; i < openModal.length; i++) {
    	openModal[i].style.display = 'none';
		}   
    }

    function handleModalSuccess() {
        modalSuccess.style.display = 'flex';
        }

function handleModalActiv() {
    	modal.classList.add('modal_active');
}
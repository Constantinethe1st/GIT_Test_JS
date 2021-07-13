
document.addEventListener('DOMContentLoaded', function () { // документ загружен
    const form = document.getElementById('form'); // присваивается объект form переменной form
    form.addEventListener('submit', formSend) // добавляется событие по нажатию кнопки
    async function formSend(e) { // исполняемая функция submit
        e.preventDefault(); // запрет на стандартную отправку данных формы
		let error = formValidate(form); // валидация формы
		let formData = new FormData(form); // данные формы
		try {
			let response = await axios({
				method: "POST",
				url: "/converter",
				data: formData
			});
			form.classList.add('_sending'); // добавление класса формы в случае успешной валидации
			if (response.ok){ // проверка отправки данных (ок или нет)
				let result = await response.json();
				console.log('Данные отправлены!');
				form.reset(); // очистка формы
				form.classList.remove('_sending'); // удаление класса формы
			} else {
				console.log('Ошибка отправки данных!');
				form.classList.remove('_sending'); // удаление класса формы
			}
		} catch (err) {
			console.log('Обязательные поля не заполнены!');
		}
    }
    function formValidate(form) { // исполняемая функция валидации
        let error = 0;
        let formReq = document.querySelectorAll('._req'); // класс проверяемых полей формы
            for (let index = 0; index < formReq.length; index++){ // цикл для проверки
                const input = formReq[index]; // каждый объект в input
                formRemoveError(input); // удаляет класс _error у объекта проверки
                    // проверка валидности e-mail
                    if (input.classList.contains('_email')){ // проверка e-mail
                        if (emailTest(input)){
                            formAddError(input);
                            error++;
                        }
                    } else if (input.value === ''){ // проверка заполнения
                            formAddError(input);
                            error++;
                        } else {
                            if (sumTest(input)){ // проверка на число
                                formAddError(input);
                                error++;
                            }
                    }
            }
            return error; // возвращает значение (0 || >0)
    }
    function formAddError(input) { // добавляет класс _error
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) { // удаляет класс _error
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) { // тест e-mail
        return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
    }
    function sumTest(input) { // тест sum
        return !/^\s*[\d]+([,\.][\d]+)?\s*$/.test(input.value);
    }
});

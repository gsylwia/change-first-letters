const text = "pisze Tutaj Cokolwiek, A ala Ma Kota";

const changeFirstLetters = (text) => {
    
    const arrText = text.split(" ");
    const arrSentence = [];

    arrText.forEach(el => {
    	if (el[0] === el[0].toLowerCase() ) {
            const upper = el[0].toUpperCase() + el.substring(1);
            arrSentence.push(upper);
        } else {
			const lower = el[0].toLowerCase() + el.substring(1);
            arrSentence.push(lower);
        }
    });
    
    const newSentence = arrSentence.join(" ");
    console.log(newSentence);
};

changeFirstLetters(text);
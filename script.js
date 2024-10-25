document.getElementById('gradesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstPartial = parseFloat(document.getElementById('firstPartial').value);
    const secondPartial = parseFloat(document.getElementById('secondPartial').value);
    const thirdPartial = parseFloat(document.getElementById('thirdPartial').value);

    
    if (isNaN(firstPartial) || isNaN(secondPartial) || isNaN(thirdPartial) || 
        firstPartial < 0 || secondPartial < 0 || thirdPartial < 0 ||
        firstPartial > 30 || secondPartial > 30 || thirdPartial > 40) {
        alert('Por favor, ingrese notas válidas dentro de los límites.');
        return;
    }

    const totalScore = firstPartial + secondPartial + thirdPartial;

    let message;
    if (totalScore < 60) {
        message = 'Reprobado';
    } else if (totalScore < 80) {
        message = 'Bueno';
    } else if (totalScore < 90) {
        message = 'Muy Bueno';
    } else {
        message = 'Sobresaliente';
    }

    document.getElementById('result').innerHTML = `Nota Final: ${totalScore}%. Estado: ${message}`;
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('firstPartial').value = '';
    document.getElementById('secondPartial').value = '';
    document.getElementById('thirdPartial').value = '';
    document.getElementById('result').innerHTML = '';
});

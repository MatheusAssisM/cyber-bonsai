google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    
    let temp = {
        redFrom:35, redTo:100,
        yellowFrom:28, yellowTo:35,
        greenFrom:10, greenTo:28
    }

    let ar = {
        redFrom:0, redTo:40,
        yellowFrom:40, yellowTo:50,
        greenFrom:50, greenTo:100
    }

    let solo = {
        redFrom:0, redTo:40,
        yellowFrom:40, yellowTo:60,
        greenFrom:60, greenTo:100
    }

    makeChart("Temperatura", "temperatura", temp)
    makeChart("Umidade ar", "umidadeAr", ar)
    makeChart("Umidade solo", "umidadeSolo", solo)
    
}

function makeChart(label, div, op){
    dados = setChart(label)
    options = setOptions(op)
    chart = new google.visualization.Gauge(document.getElementById(div));
    chart.draw(dados, options);
}

function setChart(label){
    let data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        [label, 50],
    ]);

    return data
}

function setOptions(data){
    let options = {
        width: 800, height: 240,
        redFrom: data.redFrom, redTo: data.redTo,
        yellowFrom: data.yellowFrom, yellowTo: data.yellowTo,
        greenTo: data.greenTo, greenFrom:data.greenFrom,
        minorTicks: 5,
    };

    return options
}





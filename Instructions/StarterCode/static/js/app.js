function buildPlot(id){
    d3.json("samples.json").then((data) =>{
       console.log(data)

    var wash_freq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Frequency: ${wash_freq}`)

    var samples = data.samples.map(s => s.id.toString() === id)[0];

    console.log(samples);
    })
}

buildPlot(0)
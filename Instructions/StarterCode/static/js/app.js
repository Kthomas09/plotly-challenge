function buildPlot(id){
    d3.json("samples.json").then((data) =>{
    //    console.log(data)
    
    var metadata = data.metadata;
        // console.log(metadata)
    var names = data.names;
        // console.log(names)
    var samples = data.samples;
        console.log(samples)
    });
};

buildPlot(0)
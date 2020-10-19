function getPlot(id) {
    
    // get the data from the json file
    d3.json("../data/samples.json").then((data)=> {
        console.log(data)

        var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)

        // filter sample values by id 
        var samples = data.samples.filter(s => s.id.toString() === id)[0];

        console.log(samples);

        // get only top 10 sample values to plot and reverse for the plotly
        var sampleValues = samples.sample_values.slice(0, 10).reverse();

        // get only top 10 otu ids for the plot
        var idValues = (samples.otu_ids.slice(0, 10)).reverse();
        
        // get the otu id's to the desired form for the plot
        var idOtu = idValues.map(d => "OTU " + d)

        console.log(`OTU IDS: ${idOtu}`)

        // get the top 10 labels for the plot
        var labels = samples.otu_labels.slice(0, 10);

        console.log(`Sample Values: ${sampleValues}`)
        console.log(`Id Values: ${idValues}`)

        
        // create trace variable for the plot
        var trace = {
            x: sampleValues,
            y: idOtu,
            text: labels,
            type:"bar",
            orientation: "h",
        };

        // create data variable
        var data = [trace];

        // create layout variable to set plots layout
        var layout = {
            title: "Top 10 OTU",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 30,
                b: 20
            }
        };

        // create the bar plot
        Plotly.newPlot("bar", data, layout);

        var trace1 = {
            x: samples.otu_ids,
            y: samples.sample_values,
            mode: "markers",
            marker: {
                size: samples.sample_values,
                color: samples.otu_ids
            },
            text: samples.otu_labels

        };

        // set the layout for the bubble plot
        var layout = {
            xaxis:{title: "OTU ID"},
            height: 600,
            width: 1300
        };

        // create the data variable 
        var data1 = [trace1];

        // create the bubble plot
        Plotly.newPlot("bubble", data1, layout); 

        // create pie chart
        var tracePie = {
            labels: idOtu,
            values:sampleValues,
            type:"pie",
        }

        var data = [tracePie]
        
        
        Plotly.newPlot("gauge", data)

    });    
}

// var json_data = "../data/samples.json"
// // console.log(json_data)
// d3.json(json_data).then(function(data){
//     console.log(data);
// });

// const dataPromise = d3.json(json_data);
// // console.log("Data Promis: ", dataPromise);

// function unpack(rows, index) {
//     return rows.map(function(row){
//         return row[index];
//     })
// }
// console.log(rows)

// function buildPlot(){
//     d3.json(json_data).then(function(data) {
//         var sample_values = data.samples.sample_values;
//         var otu_ids = data.samples.otu_ids
//         var otu_labels = data.samples.otu_labels 

//         var trace1 = {
//             type:  "bar", 
//             mode: "lines",
//             name: otu_labels,
//             x: sample_values,
//             y: otu_ids,
//         };
//         var data = [trace1];

//         var layout = {
//             title:`Belly Button Diversity`,
//             xaxis: {
//                 range: []
//             }
//         }
//     })
// }



// function plotData(id){
//     d3.json("../data/samples.json").then((data)=>{
//         console.log(data)
//     }
//     )};


// var otu_id_sort = bacteria_data.sort((a, b) => b.samples-a.samples);
// console.log(otu_id_sort);

// var otu_id_sliced =  otu_id_sort.slice(0,10);
// console.log(otu_id_sliced);


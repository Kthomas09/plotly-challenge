function buildPlot(sample){
    d3.json("samples.json").then((data)=>{
        var otu_ids = data.samples[0].otu_ids;
        var sample_values = data.samples[0].sample_values.slice(0,10).reverse();
        var otu_labels = data.samples[0].otu_labels.slice(0,10).reverse();
        // formatting data for plots
        var top_otu_samples = (data.samples[0].otu_ids.slice(0,10)).reverse();
        var top_otu_ids = top_otu_samples.map(d => "OTU " + d);
        var top_otu_labels = data.samples[0].otu_labels.slice(0,10).reverse();
        // variable to plot the trace of the bar graph
        var trace_1 = {
            x: sample_values,
            y: otu_ids,
            text: top_otu_labels,
            marker: {
            color: "red"},
            type: "bar",
            orientation: "h", 
        };
        // variable to create the data
        var data_1 = [trace_1];
        // varable to plot the layout of the bar graph
        var layout_1 = {
            title: "Top Ten Operational Taxonomic Units",
            yaxis:{
                tickmode: "Linear",
            },
            margin: {
                l:100,
                r:100,
                t:100,
                b:30
            }
        };
    // plot the bar graph
    Plotly.newPlot("bar", data_1, layout_1);
        // variable to plot the trace of the bubble chart
        var trace_2 = {
            x: data.samples[0].otu_ids,
            y: data.samples[0].sample_values,
            mode: "markers",
            markers: {
                size: data.samples[0].sample_values,
                color: data.samples[0].otu_ids,
            },
            text: data.samples[0].otu_labels,
        };
        // variable to create the data
        var data_2 = [trace_2];
        // varable to plot the layout of the bar graph
        var layout_2 = {
            xaxis: {title: "OTU ID"},
            height: 600,
            width: 1000
        };
    // plot the bubble chart
    Plotly.newPlot("bubble", data_2,layout_2);
    })
};

function gatheringDemographicInfo(id) {
    d3.json("samples.json").then((data)=>{
        var metadata = data.metadata;
        // console.log(metadata)
        var info = metadata.filter(m => m.id.toString()==id)[0];
        var demoInfo = d3.select("#sample-metadata");
        demoInfo.html("");
        Object.entries(info).forEach((key)=>{
            demoInfo.append("h5").text(key[0].toUpperCase()+": "+key[1]+"\n");
        });
    });
}

buildPlot(data.name[0]);
gatheringDemographicInfo(data.name[0]);






// // function to build the necessary plots for the dashboard
// function buildData(sample) {
//     // reading the sample.json into the JavaScript
//     d3.json("samples.json").then((data) => {
//         // console.log(data)
//         // Setting the variables to read in the specific portions of the JSON
//         var metadata = data.metadata;
//         var names = data.names;
//         var samples = data.samples;
        
//         // Setting the intial display message into drop down menu
//         var message = ("Choose A Sample");
//         d3.select("#selDataset")
//         .append("option")
//         .attr("value", message)
//             .html(message)

//         // populating the dropdown menu with the sample names
//         var dropMenu = d3.select("#selDataset");
//         names.forEach((sample) => {
//             var row = dropMenu.append("option")
//                 .attr("value", sample);
//             row.text(sample);
//         });
//     });
// };
// function buildCharts(buildData){
//     // slice data
//     var filterMetadata = metadata.filter(d => d.id == metadata);
//     console.log(filterMetadata)
//     var filterSamples = samples.filter(s => s.id == sample);
//     // console.log(filterSamples)
//     // layout the chart
//     // put trace in 
//     // layout trace
//     // plot trace

// };

// // build chart function

// // Initiate the entire function
// function init(){
//     var selector = d3.select("#selDataset");
//         d3.json("samples.json").then((data)=>{
//             var name = data.names;
//             name.forEach((sample)=>{
//                 selector.append("option")
//                 .property("value", sample)
//                 .text(sample);
//             });
        
//         var first = name[0]
//         buildData(first);
//         buildCharts(first)
//         // call build chart function with first
//     })

// }


// function menuChange(newsample)
    // use the data to populate the build chart functions
    // metadata changed, call function (below)
    // buildData(newsample)
    // buildChart(newsample)
// init();

// 
        // function to change the drop down menu and append selected sample data.
        // function dropMenuChange(() => {
        //     console.log(filterSamples)
        //     console.log(filterMetadata)
        //     var demographTable = d3.select("#demographic-table");
        //     demographTable.html("");
        //     var inputElement = d3.select("#selDataset");
        //     var tableBody = d3.select("tbody");
        //     var inputValue = d3.select("value");

        //    
        //     




            // filterMetadata.forEach((sample)=>{
            //     let row = tableBody.append("tr");
            //     Object.entries(sample).forEach(value =>{
            //         let cell = row.append("tr");
            //         cell.text("");
            //         cell.text(`${value[0]}: ${value[1]}`);
            //         var slicedSamples = filterSamples[0].sample_values.slice(0,10).reverse();
            //         var slicedOTU_ids = filterSamples[0].otu_ids.slice(0,10).reverse().map(d => `OTU `+ d);
            //         var slicedOTU_labels = filterSamples[0].otu_labels.slice(0,10).reverse();
            //         console.log(slicedSamples)
            //         console.log(slicedOTU_ids)
            //         console.log(slicedOTU_labels)

            //         var trace1 = {
            //             x: slicedSamples,
            //             y: slicedOTU_ids,
            //             text: slicedOTU_labels,
            //             type: "bar",
            //             orientation: "h"
            //         };

            //         var barGraphData = [trace1]

            //         var barGraphLayout = {
            //             title: "Top Ten Belly Button OTU Samples",
            //             xaxis: {title:"Ubiquity of OTU Samples"},
            //             yaxis: {title:"OTU ID Number"}
            //         };
            //         Plotly.newPlot("bar", barGraphData, barGraphLayout)
            //     })
d3.json("samples.json").then((data)=>{
    var otuSort = data.sort((a,b) => b.otu_ids - a.otu_ids);
    console.log(otuSort)
}) 
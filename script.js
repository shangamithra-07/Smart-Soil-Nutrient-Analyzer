function analyzeSoil(){

    let n = parseFloat(document.getElementById("nitrogen").value);
    let p = parseFloat(document.getElementById("phosphorus").value);
    let k = parseFloat(document.getElementById("potassium").value);
    let ph = parseFloat(document.getElementById("ph").value);
    let moisture = parseFloat(document.getElementById("moisture").value);

    if(isNaN(n) || isNaN(p) || isNaN(k) || isNaN(ph) || isNaN(moisture))
    {
        alert("Please enter all values");
        return;
    }

    let health;
    let crop;
    let fertilizer;

    if(n > 50 && p > 40 && k > 40 && ph >= 6 && ph <= 7.5)
    {
        health = "Healthy";
        crop = "Wheat";
        fertilizer = "Minimal Fertilizer Needed";
    }
    else if(ph < 6)
    {
        health = "Acidic Soil";
        crop = "Potato";
        fertilizer = "Apply Lime";
    }
    else if(ph > 7.5)
    {
        health = "Alkaline Soil";
        crop = "Cotton";
        fertilizer = "Apply Organic Compost";
    }
    else
    {
        health = "Moderate";
        crop = "Rice";
        fertilizer = "Use NPK Fertilizer";
    }

    document.getElementById("health").innerHTML = health;
    document.getElementById("crop").innerHTML = crop;
    document.getElementById("fertilizer").innerHTML = fertilizer;

    document.getElementById("report").innerHTML = `
        <h3>Soil Analysis Report</h3>

        <p><b>Nitrogen:</b> ${n}</p>
        <p><b>Phosphorus:</b> ${p}</p>
        <p><b>Potassium:</b> ${k}</p>
        <p><b>pH Value:</b> ${ph}</p>
        <p><b>Moisture:</b> ${moisture}%</p>

        <hr>

        <p><b>Soil Health:</b> ${health}</p>
        <p><b>Recommended Crop:</b> ${crop}</p>
        <p><b>Fertilizer Recommendation:</b> ${fertilizer}</p>
    `;
}
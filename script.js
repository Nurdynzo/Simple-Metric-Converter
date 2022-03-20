



    






function reset() {
    document.getElementById("input-get").value = ''

    document.getElementById("M_F-meters").innerText = 0
    document.getElementById("M_F-feet").innerText = 0.00.toFixed(2)

    document.getElementById("F_M-meters").innerText = 0.00.toFixed(2)
    document.getElementById("F_M-feet").innerText = 0

    document.getElementById("L_G-liters").innerText = 0
    document.getElementById("L_G-gallons").innerText = 0.00.toFixed(2)

    document.getElementById("G_L-liters").innerText = 0.00.toFixed(2)
    document.getElementById("G_L-gallons").innerText = 0

    document.getElementById("K_P-kilos").innerText = 0
    document.getElementById("K_P-pounds").innerText = 0.00.toFixed(2)

    document.getElementById("P_K-kilos").innerText = 0.00.toFixed(2)
    document.getElementById("P_K-pounds").innerText = 0
}





function convert() {
    metric = document.getElementById("input-get").value

    meters = (metric * 3.2808).toFixed(3)
    feet = (metric  / 3.2808).toFixed(3)
    document.getElementById("M_F-meters").innerText = metric
    document.getElementById("M_F-feet").innerText = meters

    document.getElementById("F_M-meters").innerText = feet
    document.getElementById("F_M-feet").innerText = metric

    gallons = (metric * 3.78541).toFixed(3)
    liters = (metric  / 3.78541).toFixed(3)
    document.getElementById("L_G-liters").innerText = metric
    document.getElementById("L_G-gallons").innerText = gallons

    document.getElementById("G_L-liters").innerText = liters
    document.getElementById("G_L-gallons").innerText = metric

    pounds = (metric * 2.20462).toFixed(3)
    kilos = (metric  / 2.20462).toFixed(3)
    document.getElementById("K_P-kilos").innerText = metric
    document.getElementById("K_P-pounds").innerText = pounds

    document.getElementById("P_K-kilos").innerText = kilos
    document.getElementById("P_K-pounds").innerText = metric

}
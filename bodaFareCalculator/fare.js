function calculateBodaFare(){
let distanceInKm = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    if(isNaN(distanceInKm) || distanceInKm <=0) {
        alert("Tafadhali ingiza nambari sahihi ya kilomita.");
    return;}
    const baseFare = 50;
    const chargePerKm = 15;
    const tripFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + tripFare;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${tripFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\n Panda Pikipiki!"); 
}
 calculateBodaFare();
    
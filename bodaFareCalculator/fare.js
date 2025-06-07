function calculateBodaFare(distanceInKm){
    const baseFare = 50;
    const chargePerKm = 15;
    const tripFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + tripFare;
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${tripFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}
 const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
 const distance = Number(input);     
 if (isNaN(distance) || distance <=0) {
    console.log("Tafadhali ingiza nambari sahihi ya kilomita.");
 } else {
    calculateBodaFare(distance);
 }
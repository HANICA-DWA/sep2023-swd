let staffCount = {
  teachers: 150,
  administration: 20,
  management: 2,
};

for (staffType in staffCount) {
  console.log(`${staffType}: ${staffCount[staffType]}`);
}

console.log();

let OWEs = ["DWA", "OOSE", "Stage", "NoTS", "Minor", "Afstuderen"];

for (owe in OWEs) {
  console.log(`${owe}: ${OWEs[owe]}`);
}

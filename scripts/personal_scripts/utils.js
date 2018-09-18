function getYears(birthDate) {
    let diffMs = Date.now() - birthDate.getTime();
    let ageDate = new Date(diffMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970)
}
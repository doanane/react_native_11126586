//Task 3:array of names and the array of modified names

function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }

    let userProfiles = [];
    for (let i = 0; i < names.length; i++) {
        userProfiles.push({
            id: i + 1,
            originalName: names[i],
            modifiedName: modifiedNames[i]
        });
    }
    return userProfiles;
}

let originalNames = ["Samuel", "Mavis", "Emmanuella", "Issac", "Georgina"];
let modifiedNames = ["SAMUEL", "mavis", "EMMANUELLA", "georgina", "iSAAC"];

let userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && members.length < 1 || !Array.isArray(members)) return false;
  let name = [];
  members.forEach(member => {
    if (typeof (member) === 'string') {
      name.push(member.replace(/\s/g, '').charAt(0).toUpperCase());
    }
  });
  return name.length > 0 ? name.sort().join('') : false;
};

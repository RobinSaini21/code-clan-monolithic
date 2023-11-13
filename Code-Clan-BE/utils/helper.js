

// email validation
function emailValidate(email) {
  if (String(email).match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return true;
  } else {
    return false;
  }
}




module.exports = {
  emailValidate,
};
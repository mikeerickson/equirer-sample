const { Input } = require("enquirer");

fname = ""; // test by clearing variables
lname = "";
email = "";

if (fname === "") {
  const fnamePrompt = new Input({
    message: "Please supply first name?"
  });

  fnamePrompt
    .run()
    .then(answer => console.log("First Name:", answer))
    .catch(console.log);
}

if (lname === "") {
  const lastNamePrompt = new Input({
    message: "Please supply last name?"
  });

  lastNamePrompt
    .run()
    .then(answer => console.log("Last Name:", answer))
    .catch(console.log);
}

if (email === "") {
  const emailPrompt = new Input({
    message: "Please supply email?"
  });

  emailPrompt
    .run()
    .then(answer => console.log("Email:", answer))
    .catch(console.log);
}

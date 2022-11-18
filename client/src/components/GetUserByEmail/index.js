import EmailOrProfessionTemplate from "../EmailOrProfessionTemplate";

function GetUserByEmail() {
  return (
    <EmailOrProfessionTemplate
      headerText="Get User By Email"
      inputDefault="Andree.Flita@gmail.com"
      searchRef="email"
      searchBarPlaceholder="Email..."
    />
  );
}

export default GetUserByEmail;

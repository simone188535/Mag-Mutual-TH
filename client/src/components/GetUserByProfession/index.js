import EmailOrProfessionTemplate from "../EmailOrProfessionTemplate";

function GetUserByProfession() {
    return (
        <EmailOrProfessionTemplate
      headerText="Get Users By Profession"
      inputDefault="worker"
      searchRef="profession"
      searchBarPlaceholder="Profession..."
    />
);
}

export default GetUserByProfession;
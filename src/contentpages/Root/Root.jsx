import '../../App.css'

import 
    {
        Outlet, 
    } from "react-router-dom";

import 
    {
      Header,
      NavigationColumn,
      SomeLinkkiLaja,
      FinalFooter,
    } from "../../components";

/*
  export async function action() {
        const contact = await createContact();
        return redirect(`/contacts/${contact.id}/edit`);
    }
*/
/*
export async function loader({request}) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  return {q};
}
*/

export default function Root() {
  /*
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    //const submit = useSubmit();
    const searching = navigation.location &&
    new URLSearchParams(navigation.location.search).has(
        "q"
        );

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q]);
*/
    return (
        <div className="App">
          <div className="Master-container">
            <Header/>
            <div id="Kontsabox-ja-navbar">
              <NavigationColumn/>
              <div className="MainContainer">
                  <div className="Kontsa">
                    <Outlet/>
                  </div>
              <SomeLinkkiLaja/>
              </div>
            </div> 
          </div>
        <FinalFooter/> 
        </div>
    );
}
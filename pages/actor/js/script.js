import { getData } from "../../../modules/http";
import { reload_actor_page } from "../../../modules/ui";
// import { getData } from "../../../modules/http";


getData("/person/popular").then((res) => reload_actor_page(res?.data?.results));


reload_actor_page()


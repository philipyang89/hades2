import { ActionFunctionArgs} from "@remix-run/node";
import { logout } from "app/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  return await logout(request);
}
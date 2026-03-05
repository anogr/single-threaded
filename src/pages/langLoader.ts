import type { LoaderFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";

export function langLoader({ params }: LoaderFunctionArgs) {
	const lang = params.lang;
	if (lang !== "sv" && lang !== "en") {
		return redirect("/en");
	}
	return null;
}

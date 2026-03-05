import { useTranslation } from "react-i18next";

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="border-t border-border">
			<div className="max-w-4xl mx-auto px-6 py-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
					<p>© {CURRENT_YEAR} Single Threaded AB</p>
					<p>Org.nr: 559400-8558</p>
					<p>{t("ftax")}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

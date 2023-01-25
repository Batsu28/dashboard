import Person from "../components/icons/Person";
import BoardIcon from "../components/icons/BoardIcon";
import DisplayIcon from "../components/icons/DisplayIcon";
import PaperIcon from "../components/icons/PaperIcon";
import UsersIcon from "../components/icons/UsersIcon";
import CaseIcon from "../components/icons/CaseIcon";
import SettingIcon from "../components/icons/SettingIcon";

export const MENUS = [
	{ name: "LOG IN", url: "/login", image: <Person /> },
	{ name: "SIGN UP", url: "/signup", image: <Person /> },
];

export const SIDEMENUS = [
	{ name: "Хянах самбар", icon: <BoardIcon />, url: "", val: "board" },
	{
		name: "Бүтээгдэхүүнүүд",
		icon: <DisplayIcon />,
		url: "products",
		val: "prod",
	},
	{ name: "Захиалгууд", icon: <PaperIcon />, url: "order", val: "order" },
	{ name: "Хэрэглэгчид", icon: <UsersIcon />, url: "users", val: "users" },
	{ name: "Модератор", icon: <CaseIcon />, url: "moderator", val: "mode" },
	{ name: "Тохиргоо", icon: <SettingIcon />, url: "settings", val: "sett" },
];

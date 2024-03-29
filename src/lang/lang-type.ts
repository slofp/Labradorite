type MainSettings = {
	title: string;
	readable_clock: string;
	logging_blur: string;
	change_blur: string;
};

type Background = {
	title: string;
	brightness: string;
	blur: string;
	image: string;
};

type Settings = {
	title: string;
	main: MainSettings;
	background: Background;
};

type Power = {
	sleep: string;
	hibernate: string;
	shutdown: string;
	restart: string;
};

type Textbox = {
	user: string;
	pass: string;
};

export type Lang = {
	key: string;
	override_font_class: string;
	settings: Settings;
	power: Power;
	textbox: Textbox;
};

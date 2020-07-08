class injector {
	static init() {
		$('body')['append'](`<script type='text/javascript' id ='hax' src='https://vidner.github.io/hslo-v5/bundle.js?v=${Date.now()}'></script>`);
		$('body')['append'](`<link rel="stylesheet" type="text/css" href="https://vidner.github.io/hslo-v5/bundle.css?v=${Date.now()}">`);
		$('div.message')['text']('LOADING EXTENSION CORE...');
		console.log("%c警告!! 你正在做一些很危險的事情，除非你知道你自己在做甚麼，否則請盡快關閉此視窗。", "background: black; color: red; font-size: 48px");
		console.log("%c如果你知道自己正在做甚麼，那你應該幫我寫插件，而不是打開這個視窗做一些你不該做的事。", "background: black; color: red; font-size: 48px");
		console.log("%cWarning!! You're doing something very dangerous. Unless you know what you're doing, you SHOULD close this window as soon as possible.", "background: black; color: red; font-size: 48px");
		console.log("%cIf you know what you're doing, you should help me in extension coding instead of doing something you shouldn't do.", "background: black; color: red; font-size: 48px");
	};
};

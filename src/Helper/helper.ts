 export function findCurrentLang (languages:any){
	let lang = null;
	for(let i=0; i <= languages.length; i++){
		if(languages[i] !== undefined){
			if(languages[i].default.meta.lang === import.meta.env.CURRENT_LANG){
				lang = languages[i].default.content;
				i = languages.length;
			}
		}
	}
	return lang;
}
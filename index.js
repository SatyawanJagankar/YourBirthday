$('document').ready(function(){

        $('#my-canvas').addClass('my-canvas');
		var confettiSettings = { target: 'my-canvas', clock:15};
		var confetti = new ConfettiGenerator(confettiSettings);
		confetti.render();

			c = 'ABBA - Super Trouper.mp3';
			  e = 'ABBA - Super Trouper.mp3'; 
			  t = 'ABBA - Super Trouper.mp3';
			   n = document.getElementById("mp3_source");
			    
			     document.title = t;
			      getLyric((n.src = e).replace(".mp3", ".lrc"));
			       o = document.getElementById("player");
			        o.load();
			        o.play();
			       (x = document.createElement("style")).textContent = 'body{background-color:black;background-repeat:no-repeat;-webkit-background-size: 800px;-moz-background-size: 800px;-o-background-size: 800px;background-size: 800px;background-position: center;}#lyricDisplay {font-size: 100%;font-family: "Arial";text-shadow: 0 0 1px #EEEEEE;color: #006666;overflow: hidden;}#lyricDisplay ul {list-style-type: none;padding: 0px;}#lyricDisplay ul li {overflow: hidden;}#lyricDisplay ul li:hover {color: #428bca;}#MP3Lyrics {position: absolute; z-index: 90; background-color: white;border: 1px solid #d3d3d3;text-align: center;}#MP3LyricsHolder {padding: 0px; cursor: move; z-index: 91; background-color: #fce997; color: #fff;width:100%;overflow: auto}input[type=range] {-webkit-appearance: none;margin: 0px 0;width: 100%;}input[type=range]:focus {outline: none;}input[type=range]::-webkit-slider-runnable-track {width: 40%;height: 4px;cursor: pointer;animate: 0.2s;box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; background: gray;border-radius: 5px;border: 0px solid #000101;}input[type=range]::-webkit-slider-thumb {box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;border: 0px solid #000000;height: 10px;width: 4px;border-radius: 3px;background: gray;cursor: pointer;-webkit-appearance: none;margin-top: 0px;}input[type=range]:focus::-webkit-slider-runnable-track {background: gray;}#main{background:white;}#play{width: 2px;float: left;margin-top: 0px;cursor: pointer;}#progress {width: 60px;float: left;margin-left: 0px;margin-top: 0px;}#bar {height: 5px;margin-top: 0px;font-size:12}#VolumeSVG{position:absolute;height:15px;width: 15px;float: left;margin-left:0px;cursor: pointer;}#VolumeValue{width: 60px;margin-top:0px;float: left;margin-left:0;cursor: pointer;}#musicSelector{border: 0px;}';
			       document.head.appendChild(x);
		

	// c = this.value, Mobile && c && (document.getElementById("mId3Info").style.display = ""), e = this.value, t = a[this.selectedIndex - 1].title, n = document.getElementById("mp3_source"), "none" != e && (o.pause(), document.title = t, getLyric((n.src = e).replace(".mp3", ".lrc")), o.load(), o.play())
	// 	}, !1), (x = document.createElement("style")).textContent = 'body{background-color:black;background-repeat:no-repeat;-webkit-background-size: 800px;-moz-background-size: 800px;-o-background-size: 800px;background-size: 800px;background-position: center;}#lyricDisplay {font-size: 100%;font-family: "Arial";text-shadow: 0 0 1px #EEEEEE;color: #006666;overflow: hidden;}#lyricDisplay ul {list-style-type: none;padding: 0px;}#lyricDisplay ul li {overflow: hidden;}#lyricDisplay ul li:hover {color: #428bca;}#MP3Lyrics {position: absolute; z-index: 90; background-color: white;border: 1px solid #d3d3d3;text-align: center;}#MP3LyricsHolder {padding: 0px; cursor: move; z-index: 91; background-color: #fce997; color: #fff;width:100%;overflow: auto}input[type=range] {-webkit-appearance: none;margin: 0px 0;width: 100%;}input[type=range]:focus {outline: none;}input[type=range]::-webkit-slider-runnable-track {width: 40%;height: 4px;cursor: pointer;animate: 0.2s;box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; background: gray;border-radius: 5px;border: 0px solid #000101;}input[type=range]::-webkit-slider-thumb {box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;border: 0px solid #000000;height: 10px;width: 4px;border-radius: 3px;background: gray;cursor: pointer;-webkit-appearance: none;margin-top: 0px;}input[type=range]:focus::-webkit-slider-runnable-track {background: gray;}#main{background:white;}#play{width: 2px;float: left;margin-top: 0px;cursor: pointer;}#progress {width: 60px;float: left;margin-left: 0px;margin-top: 0px;}#bar {height: 5px;margin-top: 0px;font-size:12}#VolumeSVG{position:absolute;height:15px;width: 15px;float: left;margin-left:0px;cursor: pointer;}#VolumeValue{width: 60px;margin-top:0px;float: left;margin-left:0;cursor: pointer;}#musicSelector{border: 0px;}', document.head.appendChild(x),
		


});


ID3v2 = {
	parseStream: function (r, o) {
		var s = {
				0: "Other",
				1: "32x32 pixels 'file icon' (PNG only)",
				2: "Other file icon",
				3: "Cover (front)",
				4: "Cover (back)",
				5: "Leaflet page",
				6: "Media (e.g. lable side of CD)",
				7: "Lead artist/lead performer/soloist",
				8: "Artist/performer",
				9: "Conductor",
				A: "Band/Orchestra",
				B: "Composer",
				C: "Lyricist/text writer",
				D: "Recording Location",
				E: "During recording",
				F: "During performance",
				10: "Movie/video screen capture",
				11: "A bright coloured fish",
				12: "Illustration",
				13: "Band/artist logotype",
				14: "Publisher/Studio logotype"
			},
			a = {
				AENC: "Audio encryption",
				APIC: "Attached picture",
				COMM: "Comments",
				COMR: "Commercial frame",
				ENCR: "Encryption method registration",
				EQUA: "Equalization",
				ETCO: "Event timing codes",
				GEOB: "General encapsulated object",
				GRID: "Group identification registration",
				IPLS: "Involved people list",
				LINK: "Linked information",
				MCDI: "Music CD identifier",
				MLLT: "MPEG location lookup table",
				OWNE: "Ownership frame",
				PRIV: "Private frame",
				PCNT: "Play counter",
				POPM: "Popularimeter",
				POSS: "Position synchronisation frame",
				RBUF: "Recommended buffer size",
				RVAD: "Relative volume adjustment",
				RVRB: "Reverb",
				SYLT: "Synchronized lyric/text",
				SYTC: "Synchronized tempo codes",
				TALB: "Album",
				TBPM: "BPM",
				TCOM: "Composer",
				TCON: "Genre",
				TCOP: "Copyright message",
				TDAT: "Date",
				TDLY: "Playlist delay",
				TENC: "Encoded by",
				TEXT: "Lyricist",
				TFLT: "File type",
				TIME: "Time",
				TIT1: "Content group description",
				TIT2: "Title",
				TIT3: "Subtitle",
				TKEY: "Initial key",
				TLAN: "Language(s)",
				TLEN: "Length",
				TMED: "Media type",
				TOAL: "Original album",
				TOFN: "Original filename",
				TOLY: "Original lyricist",
				TOPE: "Original artist",
				TORY: "Original release year",
				TOWN: "File owner",
				TPE1: "Artist",
				TPE2: "Band",
				TPE3: "Conductor",
				TPE4: "Interpreted, remixed, or otherwise modified by",
				TPOS: "Part of a set",
				TPUB: "Publisher",
				TRCK: "Track number",
				TRDA: "Recording dates",
				TRSN: "Internet radio station name",
				TRSO: "Internet radio station owner",
				TSIZ: "Size",
				TSRC: "ISRC (international standard recording code)",
				TSSE: "Software/Hardware and settings used for encoding",
				TYER: "Year",
				TXXX: "User defined text information frame",
				UFID: "Unique file identifier",
				USER: "Terms of use",
				USLT: "Lyrics",
				WCOM: "Commercial information",
				WCOP: "Copyright/Legal information",
				WOAF: "Official audio file webpage",
				WOAR: "Official artist/performer webpage",
				WOAS: "Official audio source webpage",
				WORS: "Official internet radio station homepage",
				WPAY: "Payment",
				WPUB: "Publishers official webpage",
				WXXX: "User defined URL link frame"
			},
			c = {
				BUF: "RBUF",
				COM: "COMM",
				CRA: "AENC",
				EQU: "EQUA",
				ETC: "ETCO",
				GEO: "GEOB",
				MCI: "MCDI",
				MLL: "MLLT",
				PIC: "APIC",
				POP: "POPM",
				REV: "RVRB",
				RVA: "RVAD",
				SLT: "SYLT",
				STC: "SYTC",
				TAL: "TALB",
				TBP: "TBPM",
				TCM: "TCOM",
				TCO: "TCON",
				TCR: "TCOP",
				TDA: "TDAT",
				TDY: "TDLY",
				TEN: "TENC",
				TFT: "TFLT",
				TIM: "TIME",
				TKE: "TKEY",
				TLA: "TLAN",
				TLE: "TLEN",
				TMT: "TMED",
				TOA: "TOPE",
				TOF: "TOFN",
				TOL: "TOLY",
				TOR: "TORY",
				TOT: "TOAL",
				TP1: "TPE1",
				TP2: "TPE2",
				TP3: "TPE3",
				TP4: "TPE4",
				TPA: "TPOS",
				TPB: "TPUB",
				TRC: "TSRC",
				TRD: "TRDA",
				TRK: "TRCK",
				TSI: "TSIZ",
				TSS: "TSSE",
				TT1: "TIT1",
				TT2: "TIT2",
				TT3: "TIT3",
				TXT: "TEXT",
				TXX: "TXXX",
				TYE: "TYER",
				UFI: "UFID",
				ULT: "USLT",
				WAF: "WOAF",
				WAR: "WOAR",
				WAS: "WOAS",
				WCM: "WCOM",
				WCP: "WCOP",
				WPB: "WPB",
				WXX: "WXXX"
			},
			i = {
				0: "Blues",
				1: "Classic Rock",
				2: "Country",
				3: "Dance",
				4: "Disco",
				5: "Funk",
				6: "Grunge",
				7: "Hip-Hop",
				8: "Jazz",
				9: "Metal",
				10: "New Age",
				11: "Oldies",
				12: "Other",
				13: "Pop",
				14: "R&B",
				15: "Rap",
				16: "Reggae",
				17: "Rock",
				18: "Techno",
				19: "Industrial",
				20: "Alternative",
				21: "Ska",
				22: "Death Metal",
				23: "Pranks",
				24: "Soundtrack",
				25: "Euro-Techno",
				26: "Ambient",
				27: "Trip-Hop",
				28: "Vocal",
				29: "Jazz+Funk",
				30: "Fusion",
				31: "Trance",
				32: "Classical",
				33: "Instrumental",
				34: "Acid",
				35: "House",
				36: "Game",
				37: "Sound Clip",
				38: "Gospel",
				39: "Noise",
				40: "AlternRock",
				41: "Bass",
				42: "Soul",
				43: "Punk",
				44: "Space",
				45: "Meditative",
				46: "Instrumental Pop",
				47: "Instrumental Rock",
				48: "Ethnic",
				49: "Gothic",
				50: "Darkwave",
				51: "Techno-Industrial",
				52: "Electronic",
				53: "Pop-Folk",
				54: "Eurodance",
				55: "Dream",
				56: "Southern Rock",
				57: "Comedy",
				58: "Cult",
				59: "Gangsta",
				60: "Top 40",
				61: "Christian Rap",
				62: "Pop/Funk",
				63: "Jungle",
				64: "Native American",
				65: "Cabaret",
				66: "New Wave",
				67: "Psychadelic",
				68: "Rave",
				69: "Showtunes",
				70: "Trailer",
				71: "Lo-Fi",
				72: "Tribal",
				73: "Acid Punk",
				74: "Acid Jazz",
				75: "Polka",
				76: "Retro",
				77: "Musical",
				78: "Rock & Roll",
				79: "Hard Rock",
				80: "Folk",
				81: "Folk-Rock",
				82: "National Folk",
				83: "Swing",
				84: "Fast Fusion",
				85: "Bebob",
				86: "Latin",
				87: "Revival",
				88: "Celtic",
				89: "Bluegrass",
				90: "Avantgarde",
				91: "Gothic Rock",
				92: "Progressive Rock",
				93: "Psychedelic Rock",
				94: "Symphonic Rock",
				95: "Slow Rock",
				96: "Big Band",
				97: "Chorus",
				98: "Easy Listening",
				99: "Acoustic",
				100: "Humour",
				101: "Speech",
				102: "Chanson",
				103: "Opera",
				104: "Chamber Music",
				105: "Sonata",
				106: "Symphony",
				107: "Booty Bass",
				108: "Primus",
				109: "Porn Groove",
				110: "Satire",
				111: "Slow Jam",
				112: "Club",
				113: "Tango",
				114: "Samba",
				115: "Folklore",
				116: "Ballad",
				117: "Power Ballad",
				118: "Rhythmic Soul",
				119: "Freestyle",
				120: "Duet",
				121: "Punk Rock",
				122: "Drum Solo",
				123: "A capella",
				124: "Euro-House",
				125: "Dance Hall"
			},
			u = {
				pictures: []
			},
			n = 1 / 0;

		function T(e, t) {
			r(e, t, n)
		}

		function l(e) {
			for (var t, r, n, i, o, a, s, c = "", u = 0, T = e.length, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; u < T;) i = (t = e.charCodeAt(u++)) >> 2, o = (3 & t) << 4 | (r = e.charCodeAt(u++)) >> 4, a = (15 & r) << 2 | (n = e.charCodeAt(u++)) >> 6, s = 63 & n, isNaN(r) ? a = s = 64 : isNaN(n) && (s = 64), c = c + l.charAt(i) + l.charAt(o) + l.charAt(a) + l.charAt(s);
			return c
		}

		function f(e) {
			var t = e.toString(2);
			return new Array(8 - t.length + 1).join("0") + t
		}

		function d(e) {
			if (4 == e.length)
				if (3 < u.revision) {
					var t = e[0] << 21;
					t += e[1] << 14, t += e[2] << 7, t += e[3]
				} else {
					t = e[0] << 24;
					t += e[1] << 16, t += e[2] << 8, t += e[3]
				}
			else {
				t = e[0] << 16;
				t += e[1] << 8, t += e[2]
			}
			return t
		}
		var p = {
			APIC: function (e, t, r) {
				u.pictures.push(function (e) {
					e.charCodeAt(0);
					var t = (e = e.substr(1)).indexOf("\0"),
						r = e.substr(0, t),
						n = (e = e.substr(t + 1)).charCodeAt(0),
						i = s[n.toString(16).toUpperCase()],
						o = (e = e.substr(1)).indexOf("\0"),
						a = e.substr(0, o);
					return {
						dataURL: "data:" + r + ";base64," + l((e = e.substr(o + 1)).split("").map(function (e) {
							return String.fromCharCode(255 & e.charCodeAt(0))
						}).join("")),
						PictureType: i,
						Description: a,
						MimeType: r
					}
				}(t))
			},
			PIC: function (e, t, r) {
				u.pictures.push(function (e) {
					e.charCodeAt(0);
					var t = (e = e.substr(1)).substr(0, 3),
						r = (e = e.substr(3)).charCodeAt(0),
						n = s[r.toString(16).toUpperCase()],
						i = (e = e.substr(1)).indexOf("\0"),
						o = e.substr(0, i);
					return {
						dataURL: "data:img/" + t + ";base64," + l((e = e.substr(i + 1)).split("").map(function (e) {
							return String.fromCharCode(255 & e.charCodeAt(0))
						}).join("")),
						PictureType: n,
						Description: o,
						MimeType: MimeType
					}
				}(t))
			},
			TLEN: function (e, t, r) {
				var n, i, o, a;
				u.Length = (n = parseInt(m(t)), i = Math.floor(n / 1e3), o = Math.floor(i / 60), a = Math.floor(o / 60), {
					milliseconds: n % 1e3,
					seconds: i % 60,
					minutes: o % 60,
					hours: a % 24,
					days: Math.floor(a / 24)
				})
			},
			TCON: function (e, t, r) {
				if (t = m(t), /\([0-9]+\)/.test(t)) var n = i[parseInt(t.replace(/[\(\)]/g, ""))];
				else n = t;
				u.Genre = n
			}
		};

		function C() {
			u.revision < 3 ? T(3, function (e) {
				if (console.log(e), /[A-Z0-9]{3}/.test(e)) {
					var n, i, t = c[e.substr(0, 3)];
					n = e, i = t, T(3, function (e, t) {
						var r = d(t);
						T(r, function (e, t) {
							"function" == typeof p[n] ? p[n](r, e, t) : "function" == typeof p[i] ? p[i](r, e, t) : a[i] ? u[a[i]] = (u[a[i]] || "") + m(e) : u[i] = m(e), console.log(u), C()
						})
					})
				} else o(u)
			}) : T(4, function (e) {
				var n;
				(console.log(e), /[A-Z0-9]{4}/.test(e)) ? (n = e, T(4, function (e, t) {
					var r = d(t);
					T(2, function (e, t) {
						t = f(t[0]).concat(f(t[1])), T(r, function (e, t) {
							"function" == typeof p[n] ? p[n](r, e, t) : a[n] ? u[a[n]] = (u[a[n]] || "") + m(e) : u[n] = m(e), C()
						})
					})
				})) : o(u)
			})
		}

		function m(e) {
			if (0 != e.indexOf("http://")) {
				e.charCodeAt(0);
				e = e.substr(1)
			}
			return e.replace(/[^A-Za-z0-9\(\)\{\}\[\]\!\@\#\$\%\^\&\* \/\"\'\;\>\<\?\,\~\`\.\n\t]/g, "")
		}
		return T(3, function (e) {
			if ("ID3" != e) return o(u), !1;
			T(2, function (e, t) {
				u.version = "ID3v2." + t[0] + "." + t[1], u.revision = t[0], console.log("version", u.version), T(1, function (e, t) {
					t = f(t[0]), T(4, function (e, t) {
						n = d(t), T(0, function () {}), C()
					})
				})
			})
		}), u
	},
	parseURL: function (e, t) {
		var r = new XMLHttpRequest;
		r.open("get", e, !0), r.overrideMimeType("text/plain; charset=x-user-defined");
		var n = 0,
			i = 0,
			o = function () {},
			a = 1 / 0;
		var s = "";
		return function () {
			if (r.responseText && (s = r.responseText), r.responseText.length > a && r.abort(), s.length > n + i && i) {
				var e = s.substr(n, i),
					t = e.split("").map(function (e) {
						return 255 & e.charCodeAt(0)
					});
				if (n += i, i = 0, !1 === o(e, t)) return r.abort()
			}
			setTimeout(arguments.callee, 0)
		}(), r.send(null), [r, ID3v2.parseStream(function (e, t, r) {
			o = t, a = r, 0 == (i = e) && t("", [])
		}, t)]
	},
	parseFile: function (e, t) {
		var r = new FileReader;
		console.log(r);
		var n = 0,
			i = 0,
			o = function () {};
		var a = "";
		return function () {
			if (r.result && (a = r.result), a.length > n + i && i) {
				var e = a.substr(n, i),
					t = e.split("").map(function (e) {
						return 255 & e.charCodeAt(0)
					});
				if (n += i, i = 0, !1 === o(e, t)) return r.abort()
			}
			setTimeout(arguments.callee, 0)
		}(), r.readAsBinaryString(e), [r, ID3v2.parseStream(function (e, t, r) {
			o = t, r, 0 == (i = e) && t("", [])
		}, t)]
	},
	handleFiles: function (e, t) {
		var r = 0;
		! function () {
			ID3v2.parseFile(e[r], t), ++r < e.length && setTimeout(arguments.callee, 5e3)
		}()
	},
	MP3Data: function (e) {
		return {
			Pictures: e.pictures.length ? e.pictures[0].dataURL : "",
			Title: e.Title || "",
			Album: e.Album || "",
			TrackNo: e["Track number"] || "",
			Artist: e.Artist || "",
			Genre: e.Genre || "",
			Duration: e.Length ? [e.Length.minutes, e.Length.seconds].join(":") : "",
			Lyrics: e.Lyrics ? e.Lyrics.substr(3) : ""
		}
	}
};
var VOLUME0 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><path d="M1089.041 681.36c1.719 1.718 2.577 3.742 2.577 6.074 0 2.331-.858 4.356-2.577 6.074l-57.063 57.063c-1.718 1.718-3.681 2.577-5.89 2.577-1.964 0-4.05-.859-6.259-2.577l-81.359-81.36-81.36 81.36c-1.718 1.718-3.682 2.577-5.891 2.577-1.964 0-4.05-.859-6.259-2.577l-57.063-57.063c-1.473-1.473-2.209-3.559-2.209-6.259 0-2.454.736-4.417 2.209-5.89l81.36-81.36-80.992-81.36c-1.718-1.473-2.577-3.436-2.577-5.89 0-2.7.859-4.786 2.577-6.259l56.694-57.063c1.719-1.718 3.805-2.577 6.259-2.577s4.418.859 5.891 2.577l81.36 81.36 81.359-81.36c1.718-1.718 3.743-2.577 6.074-2.577 2.332 0 4.356.859 6.074 2.577l57.063 57.063c1.719 1.718 2.577 3.743 2.577 6.074 0 2.332-.858 4.356-2.577 6.074L1007.682 600l81.359 81.36zm-980.66-296.554h243.817l366.784-298.94v1028.27l-366.784-298.94H108.381v-430.39z" style="fill: black;"/></svg>',
	VOLUME = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><path d="M0 384.806h243.816L610.6 85.866v1028.269l-366.784-298.94H0V384.806zm748.41-48.764c72.085 72.084 108.834 159.717 110.247 262.897 0 98.94-36.749 183.746-110.247 254.418l-74.205-76.325c50.883-50.884 76.325-110.954 76.325-180.212 0-70.672-25.442-132.156-76.325-184.453l74.205-76.325zm127.208-125.088c106.008 106.007 159.011 233.922 159.011 383.745 0 149.824-53.003 278.445-159.011 385.866l-78.445-78.445c84.806-83.393 127.209-185.513 127.209-306.36s-42.403-223.675-127.208-308.48l78.444-76.326zM992.227 94.346c65.018 65.018 115.9 140.636 152.649 226.855 36.749 86.22 55.124 177.386 55.124 273.498 0 96.113-18.375 187.633-55.124 274.559s-87.632 162.897-152.649 227.916l-76.325-76.326c117.314-117.314 175.972-259.01 175.972-425.088s-58.657-307.774-175.972-425.088l76.325-76.326z"  style="fill: black;"/></svg>';

function getLyric(e) {
	var i = new XMLHttpRequest;
	i.open("GET", e, !0), i.responseType = "text", i.onload = function () {
		var e = i.response.split("\n").join("\n"),
			t = document.getElementById("player"),
			n = new LyricsMP3Player;
		n.setLrc(e), t.addEventListener("timeupdate", function () {
			n.move(t.currentTime)
		}), window.addEventListener("LyricToClick", function (e) {
			0 < e.detail.time && (t.currentTime = e.detail.time)
		})
	}, i.onerror = i.onabort = function (e) {
		console.log("lyric fail")
	}, console.log("loading..."), i.send()
}
var playStatus = !(window.LyricsMP3Player = function (e) {
		if (this.id = "lyricDisplay", this.currentStyle = "currentLne", this.prefixLinId = "lyrics-line", this.showLines = 4, this.clickable = !0, this.clickEventName = "LyricToClick", e)
			for (var t in e) void 0 !== this[t] && e.hasOwnProperty(t) && (this[t] = e[t]);
		this.setLrc = function (e) {
			this.tags = {}, this.lrc = [], this.rangeLrc = [];
			for (var t = /\[([a-z]+):(.*)\].*/, n = /(\[[0-9.:\[\]]*\])+(.*)/, i = /\[([0-9]+):([0-9.]+)\]/, o = e.split(/[\r\n]/), r = 0; r < o.length; r++) {
				var l = t.exec(o[r]);
				if (l && l[0]) this.tags[l[1]] = l[2];
				else {
					var a = n.exec(o[r]);
					if (a && a[0])
						for (var s = a[1].replace(/\]\[/g, "],[").split(","), c = 0; c < s.length; c++) {
							var d = i.exec(s[c]);
							d && d[0] && this.lrc.push({
								starttime: 60 * parseInt(d[1], 10) + parseFloat(d[2]),
								line: a[2]
							})
						}
				}
			}
			this.lrc.sort(function (e, t) {
				return e.starttime - t.starttime
			});
			for (r = 0; r < this.showLines; r++) this.rangeLrc.push({
				starttime: -1,
				endtime: 0,
				line: "&nbsp;"
			});
			var u = 0,
				p = "";
			for (r = 0; r < this.lrc.length; r++) endtime = parseFloat(this.lrc[r].starttime), this.rangeLrc.push({
				starttime: u,
				endtime: endtime,
				line: p
			}), u = endtime, p = this.lrc[r].line;
			this.rangeLrc.push({
				starttime: u,
				endtime: 999.99,
				line: p
			});
			for (r = 0; r < this.showLines; r++) this.rangeLrc.push({
				starttime: -1,
				endtime: 0,
				line: "&nbsp;"
			});
			this.totalLines = this.rangeLrc.length, this.currentLine = 0;
			var m = document.getElementById(this.id);
			m.innerHTML = "";
			var f = document.createElement("ul");
			m.appendChild(f);
			for (r = 0; r < this.totalLines; r++) {
				var h = document.createElement("li");
				h.innerHTML = this.rangeLrc[r].line, h.innerHTML || (h.innerHTML = "&nbsp;"), h.setAttribute("id", this.prefixLinId + r), this.clickable && (h.onclick = g(this, r), h.style.cursor = "pointer"), f.appendChild(h)
			}
			for (r = this.showLines; r < this.totalLines; r++) document.getElementById(this.prefixLinId + r).style.display = "none";
			this.move(0)
		};
		var g = function (n, i) {
			return function () {
				var e = {
						time: n.rangeLrc[i].starttime
					},
					t = new CustomEvent(n.clickEventName, {
						detail: e,
						bubbles: !0
					});
				document.getElementById(n.prefixLinId + i).dispatchEvent(t)
			}
		};
		this.move = function (e) {
			for (var t = 0; t < this.totalLines; t++)
				if (e >= this.rangeLrc[t].starttime && e < this.rangeLrc[t].endtime) {
					this.currentLine = t;
					var n = this.currentLine - this.showLines,
						i = this.currentLine + this.showLines;
					for (t = 0; t < this.totalLines; t++) {
						var o = document.getElementById(this.prefixLinId + t);
						o.style.display = n <= t && t <= i ? "block" : "none", t == this.currentLine ? o.className = this.currentStyle : o.className = ""
					}
					return
				}
		}
	}),
	Mobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
window.onload = function () {
	var o = document.getElementById("player"),
		e = document.getElementById("VolumeSVG"),
		t = document.getElementById("VolumeValue");
	e.innerHTML = VOLUME;
	var n = document.getElementById("play"),
		r = (document.getElementById("pause"), document.getElementById("bar"));

	function i() {
		n.style.display = "block"
	}

	function l() {
		o.volume = document.getElementById("VolumeValue").value / 100, 0 == o.volume && (document.getElementById("VolumeSVG").innerHTML = VOLUME0), 0 != o.volume && (document.getElementById("VolumeSVG").innerHTML = VOLUME)
	}
	playStatus = !0, n.innerHTML = "&#10074;&#10074;", o.paused ? i() : o.addEventListener("canplay", function () {
		i()
	}), n.addEventListener("click", function () {
		playStatus ? (o.pause(), n.innerHTML = "&#9658;", playStatus = !1) : (o.play(), n.innerHTML = "&#10074;&#10074;", playStatus = !0)
	}, !1), o.addEventListener("timeupdate", function () {
		var e = parseInt(o.duration / 60) % 60,
			t = parseInt(o.duration % 60),
			n = "",
			i = "";
		n = isNaN(e) ? "" : e, i = isNaN(t) ? "" : t, r.innerHTML = parseInt(o.currentTime / 60) % 60 + ":" + parseInt(o.currentTime) % 60 + " / " + n + ":" + i, r.title = "Running Time"
	}), t.addEventListener("click", l, !1), VolumeSVG.addEventListener("click", function () {
		"0" != t.value ? (t.value = "0", l(), e.innerHTML = VOLUME0) : "0" == t.value && (t.value = "100", l(), e.innerHTML = VOLUME)
	}, !1), window.M3U = {};
	var a, s = document.URL;
	s = (s = s.replace(/#.*/, "")).substring(0, s.length - 4) + "m3u", parser = function (e) {
		return Data = e.replace(/\r/g, ""), "#EXTM3U" === Data.substr(0, Data.search("\n")) ? Data.substr(Data.search("\n")).split("\n#").filter(function (e) {
			return !!e.trim().length
		}).map(function (e) {
			var t;
			return (t = e.match(/:(?:(-?\d+),(.+)\s*-\s*(.+)|(.+))\n(.+)/)) && 6 === t.length ? {
				length: t[1] || 0,
				artist: t[2] || "",
				title: t[4] || t[3],
				file: t[5].trim()
			} : void 0
		}) : Data.split("\n").filter(function (e) {
			return !!e.trim().length
		}).filter(function (e) {
			return "#" !== e[0]
		}).map(function (e) {
			return {
				file: e.trim()
			}
		})
	}, window.M3U = {
		name: "m3u",
		parse: parser
	};
	var c, d, u, p, m = new XMLHttpRequest;
	if (m.open("GET", s), m.overrideMimeType("audio/x-mpegurl"), m.onload = function () {
			a = M3U.parse(this.response);
			for (var e = document.getElementById("musicSelector"), t = 0; t < a.length; t++) {
				var n = document.createElement("option");
				n.text = a[t].artist + " - " + a[t].title, n.value = a[t].file, e.add(n)

			}
		}, m.send(), Mobile) {
		var f = document.createElement("button");
		f.id = "mId3Info", f.style.position = "absolute", f.style["z-index"] = "93", f.style.display = "none", f.textContent = "", document.body.appendChild(f)
	}
	var h, g, y, v, x, L = document.querySelector("#id3tag");

	function b(e) {
		L.style["z-index"] = "92", d = function (e) {
			var t = 0,
				n = 0;
			e || (e = window.event);
			return e.pageX || e.pageY ? (t = e.pageX, n = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
				x: t,
				y: n
			}
		}(e), u = d.x, p = d.y, h = L.offsetWidth + 4, g = L.offsetHeight + 4, y = window.innerWidth, v = window.innerHeight, L.style.left = y - u < h ? y - h + "px" : u + "px", L.style.top = v - p < g ? v - g + "px" : p + "px"
	}
	// document.getElementById("lyricDisplay").title = "Right Click to ID3 information", Mobile && (document.getElementById("lyricDisplay").title = "Tap Button left above to ID3 information");
	// var X = document.getElementById("X");
	// if (!Mobile) {
	// 	X.addEventListener("click", function () {
	// 		id3tag.style.display = "none"
	// 	}, !1)
	// } else {
	// 	X.addEventListener("touchstart", function () {
	// 		id3tag.style.display = "none"
	// 	}, !1)
	// };
	document.getElementById("lyricDisplay").addEventListener("contextmenu", function (e) {
			e.preventDefault(), document.getElementById("id3tag").style.display = "", b(e), getURL(c)
		}, !1), Mobile && document.getElementById("mId3Info").addEventListener("touchstart", function (e) {
			e.preventDefault(), document.getElementById("id3tag").style.display = "", document.getElementById("mId3Info").style.display = "none", b(e), getURL(c)
		}, !1), 
		document.getElementById("musicSelector").addEventListener("change", function () {
			var e, t, n;
			 $('.select-css').addClass('hideSelect');
			  $(".hideSelect").hover(function(){
			    $(this).css("opacity", "1");
			    }, function(){
			    $(this).css("opacity", "0.1");
			  });


			c = this.value, Mobile && c && (document.getElementById("mId3Info").style.display = ""), e = this.value, t = a[this.selectedIndex - 1].title, n = document.getElementById("mp3_source"), "none" != e && (o.pause(), document.title = t, getLyric((n.src = e).replace(".mp3", ".lrc")), o.load(), o.play())
		}, !1), (x = document.createElement("style")).textContent = 'body{background-color:black;background-repeat:no-repeat;-webkit-background-size: 800px;-moz-background-size: 800px;-o-background-size: 800px;background-size: 800px;background-position: center;}#lyricDisplay {font-size: 100%;font-family: "Arial";text-shadow: 0 0 1px #EEEEEE;color: #006666;overflow: hidden;}#lyricDisplay ul {list-style-type: none;padding: 0px;}#lyricDisplay ul li {overflow: hidden;}#lyricDisplay ul li:hover {color: #428bca;}#MP3Lyrics {position: absolute; z-index: 90; background-color: white;border: 1px solid #d3d3d3;text-align: center;}#MP3LyricsHolder {padding: 0px; cursor: move; z-index: 91; background-color: #fce997; color: #fff;width:100%;overflow: auto}input[type=range] {-webkit-appearance: none;margin: 0px 0;width: 100%;}input[type=range]:focus {outline: none;}input[type=range]::-webkit-slider-runnable-track {width: 40%;height: 4px;cursor: pointer;animate: 0.2s;box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; background: gray;border-radius: 5px;border: 0px solid #000101;}input[type=range]::-webkit-slider-thumb {box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;border: 0px solid #000000;height: 10px;width: 4px;border-radius: 3px;background: gray;cursor: pointer;-webkit-appearance: none;margin-top: 0px;}input[type=range]:focus::-webkit-slider-runnable-track {background: gray;}#main{background:white;}#play{width: 2px;float: left;margin-top: 0px;cursor: pointer;}#progress {width: 60px;float: left;margin-left: 0px;margin-top: 0px;}#bar {height: 5px;margin-top: 0px;font-size:12}#VolumeSVG{position:absolute;height:15px;width: 15px;float: left;margin-left:0px;cursor: pointer;}#VolumeValue{width: 60px;margin-top:0px;float: left;margin-left:0;cursor: pointer;}#musicSelector{border: 0px;}', document.head.appendChild(x),
		


		function (t) {
			console.log(Mobile);
			var n = 0,
				i = 0,
				a = 0,
				r = 0;

			function e(e) {
				e = e || window.event, Mobile || e.preventDefault(), a = e.clientX, r = e.clientY, Mobile ? (a = e.touches[0].clientX, r = e.touches[0].clientY, document.ontouchend = l, document.ontouchmove = o) : (a = e.clientX, r = e.clientY, document.onmouseup = l, document.onmousemove = o)
			}

			function o(e) {
				e = e || window.event, Mobile || e.preventDefault();
				if (!Mobile) {
					n = a - e.clientX, i = r - e.clientY, a = e.clientX, r = e.clientY
				} else {
					n = a - e.touches[0].clientX, i = r - e.touches[0].clientY, a = e.touches[0].clientX, r = e.touches[0].clientY
				}
				t.style.top = t.offsetTop - i + "px", t.style.left = t.offsetLeft - n + "px"
			}

			function l() {
				Mobile ? (document.ontouchend = null, document.ontouchmove = null) : (document.onmouseup = null, document.onmousemove = null)
			}
			document.getElementById(t.id + "Holder") ? Mobile ? document.getElementById(t.id + "Holder").ontouchstart = e : document.getElementById(t.id + "Holder").onmousedown = e : Mobile ? t.ontouchstart = e : t.onmousedown = e
		}(document.getElementById("MP3Lyrics"))
};


window.HUB_EVENTS = {
		ASSET_ADDED: "ASSET_ADDED",
		ASSET_DELETED: "ASSET_DELETED",
		ASSET_DESELECTED: "ASSET_DESELECTED",
		ASSET_SELECTED: "ASSET_SELECTED",
		ASSET_UPDATED: "ASSET_UPDATED",
		CONSOLE_CHANGE: "CONSOLE_CHANGE",
		CONSOLE_CLOSED: "CONSOLE_CLOSED",
		CONSOLE_EVENT: "CONSOLE_EVENT",
		CONSOLE_OPENED: "CONSOLE_OPENED",
		CONSOLE_RUN_COMMAND: "CONSOLE_RUN_COMMAND",
		CONSOLE_SERVER_CHANGE: "CONSOLE_SERVER_CHANGE",
		EMBED_ACTIVE_PEN_CHANGE: "EMBED_ACTIVE_PEN_CHANGE",
		EMBED_ACTIVE_THEME_CHANGE: "EMBED_ACTIVE_THEME_CHANGE",
		EMBED_ATTRIBUTE_CHANGE: "EMBED_ATTRIBUTE_CHANGE",
		EMBED_RESHOWN: "EMBED_RESHOWN",
		FORMAT_FINISH: "FORMAT_FINISH",
		FORMAT_ERROR: "FORMAT_ERROR",
		FORMAT_START: "FORMAT_START",
		IFRAME_PREVIEW_RELOAD_CSS: "IFRAME_PREVIEW_RELOAD_CSS",
		IFRAME_PREVIEW_URL_CHANGE: "IFRAME_PREVIEW_URL_CHANGE",
		KEY_PRESS: "KEY_PRESS",
		LINTER_FINISH: "LINTER_FINISH",
		LINTER_START: "LINTER_START",
		PEN_CHANGE_SERVER: "PEN_CHANGE_SERVER",
		PEN_CHANGE: "PEN_CHANGE",
		PEN_EDITOR_CLOSE: "PEN_EDITOR_CLOSE",
		PEN_EDITOR_CODE_FOLD: "PEN_EDITOR_CODE_FOLD",
		PEN_EDITOR_ERRORS: "PEN_EDITOR_ERRORS",
		PEN_EDITOR_EXPAND: "PEN_EDITOR_EXPAND",
		PEN_EDITOR_FOLD_ALL: "PEN_EDITOR_FOLD_ALL",
		PEN_EDITOR_LOADED: "PEN_EDITOR_LOADED",
		PEN_EDITOR_REFRESH_REQUEST: "PEN_EDITOR_REFRESH_REQUEST",
		PEN_EDITOR_RESET_SIZES: "PEN_EDITOR_RESET_SIZES",
		PEN_EDITOR_SIZES_CHANGE: "PEN_EDITOR_SIZES_CHANGE",
		PEN_EDITOR_UI_CHANGE_SERVER: "PEN_EDITOR_UI_CHANGE_SERVER",
		PEN_EDITOR_UI_CHANGE: "PEN_EDITOR_UI_CHANGE",
		PEN_EDITOR_UI_DISABLE: "PEN_EDITOR_UI_DISABLE",
		PEN_EDITOR_UI_ENABLE: "PEN_EDITOR_UI_ENABLE",
		PEN_EDITOR_UNFOLD_ALL: "PEN_EDITOR_UNFOLD_ALL",
		PEN_ERROR_INFINITE_LOOP: "PEN_ERROR_INFINITE_LOOP",
		PEN_ERROR_RUNTIME: "PEN_ERROR_RUNTIME",
		PEN_ERRORS: "PEN_ERRORS",
		PEN_LIVE_CHANGE: "PEN_LIVE_CHANGE",
		PEN_LOGS: "PEN_LOGS",
		PEN_MANIFEST_CHANGE: "PEN_MANIFEST_CHANGE",
		PEN_MANIFEST_FULL: "PEN_MANIFEST_FULL",
		PEN_PREVIEW_FINISH: "PEN_PREVIEW_FINISH",
		PEN_PREVIEW_START: "PEN_PREVIEW_START",
		PEN_SAVED: "PEN_SAVED",
		POPUP_CLOSE: "POPUP_CLOSE",
		POPUP_OPEN: "POPUP_OPEN",
		POST_CHANGE: "POST_CHANGE",
		POST_SAVED: "POST_SAVED",
		PROCESSING_FINISH: "PROCESSING_FINISH",
		PROCESSING_START: "PROCESSED_STARTED"
	},
	function() {
		const E = 30,
			_ = ["css_pre_processor", "css_prefix", "css_starter", "description", "head", "html_classes",
				"html_pre_processor", "js_pre_processor", "js_library", "resources", "title"
			],
			N = {
				DEPENDENCIES: "DEPENDENCIES",
				IMPORTS: "IMPORTS"
			},
			S = ["css_pre_processor", "css_prefix", "css_starter", "css", "description", "editor_settings", "head",
				"html_classes", "html_pre_processor", "html", "id", "js_pre_processor", "js_library", "js", "newTags",
				"parent_id", "private", "resources", "slug_hash_private", "slug_hash", "tags", "team_id", "template",
				"title", "user_id"
			],
			R = ["css_pre_processor", "css_prefix", "css_starter", "css", "head", "html_classes", "html_pre_processor",
				"html", "js_pre_processor", "js_library", "js", "resources"
			],
			T = ["html", "css", "js"],
			O = "INLINE_PEN_STYLESHEET_ID",
			I = 50;
		window.PEN_CONSTANTS = {
			CANONICAL_IMPORTS: N,
			COLLAB_SYNC_ATTRIBUTES: _,
			DATA_ATTRIBUTES: S,
			INLINE_PEN_STYLESHEET_ID: O,
			MAX_DEPENDENCIES: E,
			MAX_PACKAGE_VERSIONS: I,
			PREVIEW_ATTRIBUTES: R,
			TYPES: T
		}
	}(),
	function() {
		function E(E) {
			try {
				const {
					action: N,
					css: S
				} = E.data ?? {
					action: "",
					css: ""
				};
				HUB_EVENTS.IFRAME_PREVIEW_RELOAD_CSS === N && _(S)
			} catch {}
		}

		function _(E) {
			const _ = document.querySelectorAll(`#${S}`);
			N(E);
			for (const E of _) E.remove();
			window.PrefixFree && StyleFix.process()
		}

		function N(E) {
			const _ = document.createElement("style");
			_.id = S, _.styleSheet ? _.styleSheet.cssText = E : _.append(document.createTextNode(E)), R.append(_)
		}
		const {
			INLINE_PEN_STYLESHEET_ID: S
		} = PEN_CONSTANTS, R = document.head || document.querySelectorAll("head")[0];
		window.addEventListener("message", E, !1)
	}();
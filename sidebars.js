module.exports =
{
	"docs": {
		"Getting Started": [
			"GettingStarted/installation",
			"GettingStarted/creating"
		]
	},
	"Core": {
		"Project Management": [
			"Project/overview",
			"Project/architecture",
			"Project/documentation",
			"Project/compiler"
		],
		"4D Language Concepts": [
			"Concepts/about",
			"Concepts/quick-tour",
			"Concepts/operators",
			{
				"type": "category",
				"label": "Data Types",
				"items": [
					"Concepts/data-types",
					"Concepts/blob",
					"Concepts/boolean",
					"Concepts/collection",
					"Concepts/date",
					"Concepts/null-undefined",
					"Concepts/number",
					"Concepts/object",
					"Concepts/picture",
					"Concepts/pointer",
					"Concepts/string",
					"Concepts/time",
					"Concepts/variant"
				]
			},
			"Concepts/variables",
			"Concepts/arrays",
			"Concepts/methods",
			"Concepts/parameters",
			"Concepts/shared",
			"Concepts/classes",
			{
				"type": "category",
				"label": "Control Flow",
				"items": [
					"Concepts/control-flow",
					"Concepts/branching",
					"Concepts/looping"
				]
			},
			"Concepts/error-handling",
			"Concepts/interpreted-compiled",
			"Concepts/components",
			"Concepts/plug-ins",
			"Concepts/identifiers"
		],
		"ORDA": [
			"ORDA/overview",
			"ORDA/dsmapping",
			"ORDA/ordaClasses",
			"ORDA/entities",
			"ORDA/datastores",
			"ORDA/glossary"
		],
		"Class API Reference": [
			"API/overview",
			"API/BlobClass",
			"API/ClassClass",
			"API/CollectionClass",
			"API/CryptoKeyClass",
			"API/DataClassClass",
			"API/DataClassAttributeClass",
			"API/DataStoreClass",
			"API/EmailObjectClass",
			"API/EntityClass",
			"API/EntitySelectionClass",
			"API/FileClass",
			"API/FileHandleClass",
			"API/FolderClass",
			"API/FunctionClass",
			"API/HTTPRequestClass",
			"API/IMAPTransporterClass",
			"API/MailAttachmentClass",
			"API/POP3TransporterClass",
			"API/SessionClass",
			"API/SignalClass",
			"API/SMTPTransporterClass",
			"API/SystemWorkerClass",
			"API/WebServerClass",
			"API/ZipArchiveClass",
			"API/ZipFileClass",
			"API/ZipFolderClass"
		],
		"Handling Code": [
			"code-editor/overview",
			"code-editor/write-class-method",
			"code-editor/find-replace",
			"code-editor/creating-using-macros",
			"Tags/tags"
		],
		"Debugging": [
			"Debugging/basics",
			"Debugging/debugger",
			"Debugging/breakpoints",
			"Debugging/debugging-remote",
			"Debugging/debugLogFiles"
		],
		"Settings": [
			"settings/overview",
			"settings/general",
			"settings/interface",
			"settings/compiler",
			"settings/database",
			"settings/backup",
			"settings/client-server",
			"settings/web",
			"settings/sql",
			"settings/php",
			"settings/security",
			"settings/compatibility"
		],
		"Preferences": [
			"Preferences/overview",
			"Preferences/general",
			"Preferences/structure",
			"Preferences/forms",
			"Preferences/methods",
			"Preferences/shortcuts"
		]
	},
	"Admin": {
		"4D Server Administration Window": [
			"ServerWindow/overview",
			"ServerWindow/monitor",
			"ServerWindow/users",
			"ServerWindow/processes",
			"ServerWindow/maintenance",
			"ServerWindow/application-server",
			"ServerWindow/sql-server",
			"ServerWindow/http-server",
			"ServerWindow/real-time-monitor"
		],
		"Web Administration": [
			"Admin/webAdmin",
			"Admin/dataExplorer"
		],
		"Command Line Interface": [
			"Admin/cli"
		],
		"TLS Protocol": [
			"Admin/tls"
		],
		"Licenses & Data Collection": [
			"Admin/licenses",
			"Admin/data-collect"
		],
		"Access Rights": [
			"Users/overview",
			"Users/editing"
		],
		"MSC": [
			"MSC/overview",
			"MSC/information",
			"MSC/analysis",
			"MSC/verify",
			"MSC/backup",
			"MSC/compact",
			"MSC/rollback",
			"MSC/restore",
			"MSC/repair",
			"MSC/encrypt"
		],
		"Backup and Restore": [
			"Backup/overview",
			"Backup/backup",
			"Backup/settings",
			"Backup/log",
			"Backup/restore"
		]
	},
	"web": {
		"Web Server": [
			"WebServer/webServer",
			"WebServer/webServerConfig",
			"WebServer/webServerAdmin",
			"WebServer/webServerObject"
		],
		"Web Development": [
			"WebServer/gettingStarted",
			"WebServer/templates",
			"WebServer/httpRequests",
			"WebServer/allowProject",
			"WebServer/errorPages",
			"WebServer/authentication",
			"WebServer/sessions",
			"WebServer/preemptiveWeb"
		],
		"REST Server": [
			{
				"type": "category",
				"label": "Guides",
				"items": [
					"REST/gettingStarted",
					"REST/configuration",
					"REST/authUsers",
					"REST/genInfo",
					"REST/manData",
					"REST/classFunctions",
					"REST/REST_requests"
				]
			},
			{
				"type": "category",
				"label": "API (general)",
				"items": [
					"REST/catalog",
					"REST/directory",
					"REST/info",
					"REST/upload"
				]
			},
			{
				"type": "category",
				"label": "API (dataClass)",
				"items": [
					"REST/dataClass",
					"REST/asArray",
					"REST/atomic_$atonce",
					"REST/attributes",
					"REST/binary",
					"REST/compute",
					"REST/distinct",
					"REST/entityset",
					"REST/expand",
					"REST/filter",
					"REST/imageformat",
					"REST/lock",
					"REST/method",
					"REST/orderby",
					"REST/querypath",
					"REST/queryplan",
					"REST/savedfilter",
					"REST/savedorderby",
					"REST/skip",
					"REST/timeout",
					"REST/top_$limit",
					"REST/version"
				]
			}
		]
	},
	"desktop": {
		"Client/Server": [
			"Desktop/clientServer"
		],
		"Forms": [
			"FormEditor/forms",
			"FormEditor/formEditor",
			"FormEditor/macros",
			"FormEditor/objectLibrary",
			"FormEditor/stylesheets",
			"FormEditor/pictures"
		],
		"Form Properties": [
			"FormEditor/jsonReference",
			"FormEditor/action",
			"FormEditor/propertiesForm",
			"FormEditor/formSize",
			"FormEditor/markers",
			"FormEditor/menu",
			"FormEditor/print",
			"FormEditor/windowSize"
		],
		"Form Objects": [
			"FormObjects/formObjectsOverview",
			"FormObjects/buttonOverview",
			"FormObjects/buttonGridOverview",
			"FormObjects/checkboxOverview",
			"FormObjects/comboBoxOverview",
			"FormObjects/dropdownListOverview",
			"FormObjects/groupBox",
			"FormObjects/inputOverview",
			"FormObjects/listOverview",
			"FormObjects/listboxOverview",
			"FormObjects/pictureButtonOverview",
			"FormObjects/picturePopupMenuOverview",
			"FormObjects/pluginAreaOverview",
			"FormObjects/progressIndicator",
			"FormObjects/radiobuttonOverview",
			"FormObjects/ruler",
			"FormObjects/shapesOverview",
			"FormObjects/spinner",
			"FormObjects/splitters",
			"FormObjects/staticPicture",
			"FormObjects/stepper",
			"FormObjects/subformOverview",
			"FormObjects/tabControl",
			"FormObjects/text",
			"FormObjects/webAreaOverview",
			"FormObjects/viewProAreaOverview",
			"FormObjects/writeProAreaOverview"
		],
		"Form Object Properties": [
			"FormObjects/propertiesReference",
			"FormObjects/propertiesAction",
			"FormObjects/propertiesAnimation",
			"FormObjects/propertiesAppearance",
			"FormObjects/propertiesBackgroundAndBorder",
			"FormObjects/propertiesCoordinatesAndSizing",
			"FormObjects/propertiesCrop",
			"FormObjects/propertiesDataSource",
			"FormObjects/propertiesDisplay",
			"FormObjects/propertiesEntry",
			"FormObjects/propertiesFooters",
			"FormObjects/propertiesGridlines",
			"FormObjects/propertiesHeaders",
			"FormObjects/propertiesHelp",
			"FormObjects/propertiesHierarchy",
			"FormObjects/propertiesListBox",
			"FormObjects/propertiesObject",
			"FormObjects/propertiesPicture",
			"FormObjects/propertiesPlugIns",
			"FormObjects/propertiesPrint",
			"FormObjects/propertiesRangeOfValues",
			"FormObjects/propertiesResizingOptions",
			"FormObjects/propertiesScale",
			"FormObjects/propertiesSubform",
			"FormObjects/propertiesText",
			"FormObjects/propertiesTextAndPicture",
			"FormObjects/propertiesWebArea"
		],
		"Form Events": [
			"Events/overview",
			"Events/onActivate",
			"Events/onAfterEdit",
			"Events/onAfterKeystroke",
			"Events/onAfterSort",
			"Events/onAlternativeClick",
			"Events/onBeforeDataEntry",
			"Events/onBeforeKeystroke",
			"Events/onBeginDragOver",
			"Events/onBeginUrlLoading",
			"Events/onBoundVariableChange",
			"Events/onClicked",
			"Events/onCloseBox",
			"Events/onCloseDetail",
			"Events/onCollapse",
			"Events/onColumnMoved",
			"Events/onColumnResize",
			"Events/onDataChange",
			"Events/onDeactivate",
			"Events/onDeleteAction",
			"Events/onDisplayDetail",
			"Events/onDoubleClicked",
			"Events/onDragOver",
			"Events/onDrop",
			"Events/onEndUrlLoading",
			"Events/onExpand",
			"Events/onFooterClick",
			"Events/onGettingFocus",
			"Events/onHeader",
			"Events/onHeaderClick",
			"Events/onLoad",
			"Events/onLoadRecord",
			"Events/onLongClick",
			"Events/onLosingFocus",
			"Events/onMenuSelected",
			"Events/onMouseEnter",
			"Events/onMouseLeave",
			"Events/onMouseMove",
			"Events/onMouseUp",
			"Events/onOpenDetail",
			"Events/onOpenExternalLink",
			"Events/onOutsideCall",
			"Events/onPageChange",
			"Events/onPlugInArea",
			"Events/onPrintingBreak",
			"Events/onPrintingDetail",
			"Events/onPrintingFooter",
			"Events/onResize",
			"Events/onRowMoved",
			"Events/onRowResize",
			"Events/onScroll",
			"Events/onSelectionChange",
			"Events/onTimer",
			"Events/onUnload",
			"Events/onUrlFiltering",
			"Events/onUrlLoadingError",
			"Events/onUrlResourceLoading",
			"Events/onValidate",
			"Events/onVpRangeChanged",
			"Events/onVpReady",
			"Events/onWindowOpeningDenied"
		],
		"Menus": [
			"Menus/overview",
			"Menus/creating",
			"Menus/properties",
			"Menus/bars",
			"Menus/sdi"
		],
		"User Settings": [
			"Desktop/user-settings"
		],
		"Build application": [
			"Desktop/building"
		]
	},
	"Extensions": {
		"Extensions": [
			"Extensions/overview",
			"Extensions/develop-components",
			"Extensions/develop-plug-ins"
		],
		"4D View Pro": [
			"ViewPro/getting-started",
			"ViewPro/configuring",
			"ViewPro/formulas",
			"ViewPro/method-list",
			"ViewPro/advanced-programming"
		]
	}
}

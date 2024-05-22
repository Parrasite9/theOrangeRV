;/*FB_PKG_DELIM*/

__d("StoriesGating",["fbt","gkx","qex"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return c("gkx")("20935")}function b(){return c("gkx")("20861")}function d(){return c("gkx")("20855")}function e(){return c("gkx")("20856")}function f(){var a;return(a=c("gkx")("24269"))!=null?a:!0}function i(){if(j())return h._("__JHASH__SFBiNn7W_F4__JHASH__");else return h._("__JHASH__PyfcRiMC0Nu__JHASH__")}function j(){var a;return(a=c("qex")._("1573"))!=null?a:!1}function k(){return!1}function l(){return!1}function m(){if(n())return!0;else return!1}function n(){return!1}function o(){return 4}function p(){return!1}function q(){return!1}function r(){return!0}function s(){return h._("__JHASH__FTO24XAdNs6__JHASH__")}function t(){var a;return(a=c("qex")._("1598"))!=null?a:!1}function u(){var a;return(a=c("qex")._("68"))!=null?a:!1}function v(){var a;return(a=c("qex")._("896")&&c("qex")._("915"))!=null?a:!1}function w(){var a;return(a=c("qex")._("894"))!=null?a:4}function x(){return!1}function y(){var a;return(a=c("qex")._("1111"))!=null?a:!1}function z(){var a;return(a=c("qex")._("477"))!=null?a:!1}function A(){var a;return(a=c("gkx")("24274"))!=null?a:!1}function B(){var a;return(a=c("qex")._("246"))!=null?a:!1}function C(){return c("gkx")("24271")&&!c("gkx")("24272")}function D(){return c("gkx")("24273")}function E(){return 5}function F(){return 6}function G(){return c("gkx")("24275")}function H(){var a;return(a=c("gkx")("10414"))!=null?a:!1}g.isComet=a;g.isEmployee=b;g.isTest=d;g.shouldMockLogging=e;g.allowedByEPDClientFeatureBlock=f;g.getCreationDescription=i;g.isCometStoriesVideoProductionEnabled=j;g.shouldEnableOptimisticImprovements=k;g.shouldEnableStickerProduction=l;g.shouldShowViewerV3=m;g.shouldSeparateQueryViewerV3=n;g.getViewerV3BackgroundBucketsCount=o;g.shouldUsePreviewFilter=p;g.shouldEnableStickerReplyFlyoutNullstate=q;g.shouldDisplayViewsDeprecatingMessage=r;g.getViewerNotAvailableFooterText=s;g.shouldEnableLiveInStories=t;g.shouldEnableArmadilloStoryReply=u;g.shouldShowSuggestedStories=v;g.getTileGridRowLength=w;g.shouldShowCreateButton=x;g.shouldShowStoriesRing=y;g.isInterATS=z;g.shouldUseCompartmentStoriesTiles=A;g.shouldEnableStoriesTrayPaddingAdjustment=B;g.isStoriesArchiveEnabled=C;g.shouldLogStoryMediaView=D;g.getHScrollRefetchCount=E;g.getTrayBucketCount=F;g.shouldDisableAutoplay=G;g.shouldEnableUpdatedStoriesViewerSheetCreateIcon=H}),226);
__d("StoriesConstants",["StoriesGating"],(function(a,b,c,d,e,f,g){"use strict";a={DEFAULT_SUSPENSE_CARD_INDEX:-1};b=9/16;c={BANNER_HEIGHT:42,BOTTOM_MARGIN:25,COUNT_PER_PAGINATION_FETCH:9};e=9;f=2;var h={MAX_RATING:5,PADDING_SPACE_PORTION:.04,STAR_ICON_SIZE:32,STAR_INLINE_PORTION:.55},i={NETWORK_ONLY:"network-only",STORE_OR_NETWORK:"store-or-network"};d=d("StoriesGating").getTileGridRowLength();d={INITIAL_ROW_COUNT:3,ITEMS_PER_ROW:d};var j=3e3,k=300,l={COUNT_PER_PAGINATION_FETCH:10,MAX_REACTIONS_PER_VIEWER:5},m=6,n=5,o=8/19,p={CREATION_END_CARD:"creation_end_card",EMPTY_BUCKET_ERROR:"empty_bucket_error",FRIENDS_STORY_OVERLAY:"friends_story_overlay"},q=200,r=250,s="fb_stories",t=6;g.CARD=a;g.DEFAULT_ASPECT_RATIO=b;g.NavList=c;g.NAV_PANE_TOTAL_COUNT=e;g.NUMBER_OF_BUCKETS_TO_PREFETCH=f;g.RATING_STICKER=h;g.RELAY_FETCH_POLICY=i;g.TILE_GRID=d;g.TIMEOUT_FOR_SERVER_TO_FINISH_WORK=j;g.TRANSITION_DURATION_MS=k;g.ViewerSheetViewerList=l;g.MAX_TILES_TO_SHOW=m;g.MAX_TILES_TO_SHOW_BIG=n;g.SKINNY_TILE_ASPECT_RATIO=o;g.VIEWER_V3_NULL_STATE=p;g.TOFU_TILE_HEIGHT=q;g.STORIES_TRAY_TILE_HEIGHT=r;g.STORIES_RENDER_LOCATION=s;g.DEFAULT_STORY_PLAY_DURATION=t}),98);
__d("StoriesEnums",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a={CUSTOM:"CUSTOM",FRIENDS:"FRIENDS",PUBLIC:"PUBLIC",UNSET:"UNSET"};c={BLACK:"black",DEFAULT:"default"};d={FRIEND_BUCKET:"FRIEND_BUCKET",SELF_BUCKET:"SELF_BUCKET",UNSELECTED:"UNSELECTED"};e={BL_TR:"BL_TR",BOTTOM_TOP:"BOTTOM_TOP",BR_TL:"BR_TL",LEFT_RIGHT:"LEFT_RIGHT",RIGHT_LEFT:"RIGHT_LEFT",TL_BR:"TL_BR",TOP_BOTTOM:"TOP_BOTTOM",TR_BL:"TR_BL"};var g={ANGER:"\ud83d\ude21",HAHA:"\ud83d\ude06",LIKE:"\ud83d\udc4d",LOVE:"\u2764\ufe0f",SORRY:"\ud83d\ude22",SUPPORT:"\ud83e\udd17",WOW:"\ud83d\ude2e"},h={NEXT_BUCKET:"next-bucket",NEXT_CARD:"next-card",PREV_BUCKET:"prev-bucket",PREV_CARD:"prev-card",STAY_HERE:"stay_here"},i={AVAILABLE_WIDTH_RATIO:(240-2*12)/240,BACKGROUND_COLOR_BLUE:"#79A6FF",BACOGROUND_COLOR_SLATE:"#EAEFF2",CHILD_PADDING_RATIO:.05,DEFAULT_OPTION_WIDTH_RATIO:.5,FIVE_OPTION_STAR_RATING:"FIVE_OPTION_STAR_RATING",IG_LEFT_TEXT_COLOR:"#13bda6",IG_RIGHT_TEXT_COLOR:"#F36B7F",IG_TWO_OPTION_COMBINED:"IG_TWO_OPTION_COMBINED",MINIMUM_LABEL_WIDTH_RATIO:.31,OVERFLOW_CHILD_PADDING_RATIO:20/240,TEXT_BIG_HEIGHT_RATIO:40/72,TEXT_BIG_MAX_FONT_SIZE_RATIO:30/240,TEXT_BIG_MIN_FONT_SIZE_RATIO:20/240,TEXT_BIG_RATIO:40/240,TEXT_COLOR_GREY:"#5F6673",TEXT_ONLY_FONT_SIZE_RATIO:20/240,TEXT_SMALL_HEIGHT_RATIO:25/72,TEXT_SMALL_MAX_FONT_SIZE_RATIO:20/240,TEXT_SMALL_MIN_FONT_SIZE_RATIO:12/240,TEXT_SMALL_RATIO:25/240,TEXT_WITH_PERCENT_FONT_SIZE_RATIO:12/240,TWO_OPTION_COMBINED:"TWO_OPTION_COMBINED",VOTE_COUNT_FONT_SIZE_RATIO:32/240,VOTE_OPTION_MAX_WIDTH_RATIO:.75},j={THREE_COLUMN:"THREE_COLUMN",TWO_COLUMN:"TWO_COLUMN"},k={OTHER:"OTHER",OWNED_SELF:"OWNED_SELF"},l={DELETE:"DELETE",DELETE_STORY_AND_BLOCK_MEMBER:"DELETE_STORY_AND_BLOCK_MEMBER",MUTE_CARD_OWNER:"MUTE_CARD_OWNER",REPORT_TO_GROUP_ADMINS:"REPORT_TO_GROUP_ADMINS",TOGGLE_COMMENT:"TOGGLE_COMMENT",UNFOLLOW_PAGE:"UNFOLLOW_PAGE"},m={ADMINED_ADDITIONAL_PROFILE_STORY:"ADMINED_ADDITIONAL_PROFILE_STORY",ARCHIVED_STORY:"ARCHIVED_STORY",BIRTHDAY_STORY:"BIRTHDAY_STORY",CREW_STORY:"CREW_STORY",EVENT_STORY:"EVENT_STORY",GOODWILL_GENERATED_STORY:"GOODWILL_GENERATED_STORY",GOODWILL_STORY:"GOODWILL_STORY",GROUP_STORY:"GROUP_STORY",HIGHLIGHTED_STORY:"HIGHLIGHTED_STORY",LIVE_STORY:"LIVE_STORY",M_GROUP_STORY:"M_GROUP_STORY",NULL_STATE_STORY:"NULL_STATE_STORY",PAGE_STORY:"PAGE_STORY",PROFILE_PLUS_STORY:"PROFILE_PLUS_STORY",PROMOTION_STORY:"PROMOTION_STORY",SHARED_PAGE_STORY:"SHARED_PAGE_STORY",STORY:"STORY",TOPIC_STORY:"TOPIC_STORY",UNKNOWN:"UNKNOWN",WAS_LIVE:"WAS_LIVE"},n={PHOTO:"Photo",VIDEO:"Video"},o={BLOK_STICKER:"StoryOverlayBloksSticker",EXTERNAL_SONG:"StoryOverlayExternalSong",INTERACTIVE_STICKER:"StoryOverlayReactionSticker",LINK_STICKER:"StoryOverlayLinkSticker",LIVE_VIDEO:"StoryOverlayLiveVideo",POLL_STICKER:"StoryOverlayPollSticker",PRODUCT_STICKER:"StoryOverlayProductSticker",RESHARED_CONTENT:"StoryOverlayResharedContent",RESHARED_POST:"StoryOverlayResharedPost",TAG_STICKER:"StoryOverlayTagSticker"},p={ANIMATIONS_INTERVAL_THROTTLE:300,HOLD_DELAY:1e3},q={LOCATION:"LOCATION",PAGE:"PAGE",PEOPLE:"PEOPLE",PRODUCT:"PRODUCT"},r={DARK_MODE:"dark_mode",DARK15:"dark_15",DARK30:"dark_30",DEFAULT:"default"},s={DEFAULT:"default",SLIDE_UP:"slide_up"},t={PAGE_TRANSITION:"PAGE_TRANSITION",USER:"USER",USER_TRANSITION:"USER_TRANSITION"},u={JUST_VOTED:"JUST_VOTED",RESULTS:"RESULTS",VOTING:"VOTING"},v={LINK:"LINK"},w={IG_ADD_TO_YOURS_STICKER_CROSSPOST:"IG_ADD_TO_YOURS_STICKER_CROSSPOST",IG_LINK_STICKER_CROSSPOST:"IG_LINK_STICKER_CROSSPOST",IG_MULTI_OPTION_POLL_CROSSPOST:"IG_MULTI_OPTION_POLL_CROSSPOST",IG_TEXT_POST_SHARE_CROSSPOST:"IG_TEXT_POST_SHARE_CROSSPOST"};b=b("$InternalEnum").Mirrored(["ARCHIVE","MUTED","PRIVACY"]);f.AUDIENCE_TYPES=a;f.BACKGROUND_STYLE=c;f.EMPTY_BUCKET_TYPES=d;f.GRADIENT_DIRECTION=e;f.LIGHTWEIGHT_REACTION_UNICODES=g;f.NAV_DIRECTIONS=h;f.POLL_STICKER=i;f.RECTANGULAR_TILE_TYPES=j;f.STORIES_BUCKETS_INDEXER_TYPES=k;f.STORIES_OPTION_TYPES=l;f.STORY_CARD_TYPES=m;f.STORY_MEDIA_TYPES=n;f.STORY_OVERLAY_TYPES=o;f.STORY_REACTION_STICKERS_CONSTANTS=p;f.TAG_STICKER_TYPES=q;f.VIEWER_THEME=r;f.VIEWERSHEET_ANIMATION=s;f.VIEWERSHEET_STYLE=t;f.VOTING_PHASES=u;f.STORY_OVERLAY_BLOKS_STICKER_STYLES=v;f.STORY_OVERLAY_BLOKS_LINK_STICKER_STYLES=w;f.StoriesSettingsTabs=b}),66);
__d("StoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTION_SOURCE:{ARCHIVE:"archive",FACEBOOK_CHAT_TAB:"facebook_chat_tab",FEED_INLINE_VIEWER:"feed_inline_viewer",FEED_TAB_STORIES_HOME:"feed_tab_stories_home",FEED_TAB_STORIES_SURFACE:"feed_tab_stories_surface",FROM_FEED_INLINE_VIEWER:"from_feed_inline_viewer",MESSENGER_DOT_COM:"messenger_dot_com",NOTIFICATION:"notification",PAGE_PROFILE:"page_profile",POST_HEADER:"post_header_actor_photo",PROFILE_HIGHLIGHT:"profile_highlight",STORIES_HOME:"stories_home",THINGS_YOU_SHOULD_DO:"things_you_should_do",TODAY_IN:"today_in",TRAY:"story_tray",UNKNOWN:"unknown",VIEWER:"viewer"},ACTION_TYPE:{CLICK_EMOJI_REPLY_BUTTON:"click_emoji_reply_button",CLICK_GIF_REPLY_BUTTON:"click_gif_reply_button",CLICK_STICKER_REPLY_BUTTON:"click_sticker_reply_button",CLOSE_STORY:"close_story",COMMENT_ADD_ATTEMPTED:"comment_add_attempted",COMMENT_BUTTON_IMPRESSION:"comment_button_impression",COMMENT_CARD_IMPRESSION:"comment_card_impression",DELETE_MEDIA:"delete_media_attempted",LINK_STICKER_CLICK:"link_sticker_click",OPEN_LINK:"open_link",OPEN_MEDIA:"open_media",OPEN_SEEN_SUMMARY:"open_seen_summary",OPEN_STORY:"open_story",PAUSE_STORY:"pause_story",REACTION_STICKER_INTERACTED:"reaction_sticker_interacted",REPLY_ATTEMPT_COMPLETED:"reply_attempt_completed",REPLY_SENT_WHEN_SMART_REPLY_SHOWN:"reply_sent_when_smart_reply_shown",SEND_REPLY_ATTEMPT:"attempt_to_send_reply",SEND_STORY_FAILED:"send_story_failed",SEND_STORY_SUCCEEDED:"send_story_succeed",SMART_REPLY_IMPRESSION:"smart_reply_impression",SMART_REPLY_TAP:"smart_reply_tap",STICKER_IMPRESSION:"sticker_impression",STORY_MEDIA_VIEW:"story_media_view",STORY_NAVIGATION:"story_navigation",TRAY_LOAD:"story_tray_load",UNPAUSE_STORY:"unpause_story",VISIT_PAGE:"fb_stories_visit_page"},CLOSE_STORY_GESTURE:{AUTO_EXIT:"auto_exit",BACK_BUTTON_EXIT:"back_button_exit",BLUR_BACKGROUND:"blur_background",CLOSE_BUTTON_EXIT:"close_button_exit",KEYBOARD_EXIT:"keyboard_exit"},COMMENT_TRIGGER_SOURCE:{NOTIFICATION_STORY_UFI:"notification_story_ufi",STORY_UFI_BUTTON:"story_ufi_button",STORY_UFI_COMMENT_PREVIEW:"story_ufi_comment_preview"},FB_STORIES_IMPRESSION:75,FB_STORIES_TIMESPENT:76,IMPRESSION_DEDUPLICATION_TIME:6e4,LIVE_IN_STORIES_EVENTS:{STORY_LIVE_PAGE_CTA_IMPRESSION:"story_live_page_cta_impression",STORY_LIVE_PAGE_CTA_TAP:"story_live_page_cta_tap",STORY_LIVE_PROFILE_CTA_IMPRESSION:"story_live_profile_cta_impression",STORY_LIVE_PROFILE_CTA_TAP:"story_live_profile_cta_tap",STORY_LIVE_STICKER_IMPRESSION:"story_live_sticker_impression",STORY_LIVE_STICKER_TAP:"story_live_sticker_tap",STORY_LIVE_TRAY_DROPDOWN_CLICK:"story_live_tray_dropdown_click",STORY_LIVE_TRAY_DROPDOWN_IMPRESSION:"story_live_tray_dropdown_impression",STORY_LIVE_VIEWER_DROPDOWN_CLICK:"story_live_viewer_dropdown_click",STORY_LIVE_VIEWER_DROPDOWN_IMPRESSION:"story_live_viewer_dropdown_impression"},NAVIGATION_GESTURE:{AUTO_JUMP:"auto_jump",NAVIGATE_AWAY:"navigate_away",SWIPE_LEFT:"swipe_left",SWIPE_RIGHT:"swipe_right",TAP_BACKWARD:"tap_backward",TAP_FORWARD:"tap_forward",VIEWER_SHEET:"viewer_sheet"},STORY_REPLY_TYPE:{STICKER:"Sticker",TEXT_SUGGESTION:"TextSuggestion"},STORY_TYPE:{EVENT_STORY:"event",FOLLOWEE_STORY:"followee",FRIEND_STORY:"friend",GROUP_STORY:"group",MISSING_STORY_DATA:"missingStoryData",PAGE_STORY:"page",SELF_STORY:"self",STORY_PROMOTION:"promotion"},TIMESPENT_MINIMUM_TIME:500};b=a;f["default"]=b}),66);
__d("StoriesRatioBox.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.children,c=a.height;a=a.width;c=c/a*100;return i.jsx("div",{className:"x1lq5wgf xgqcy7u x30kzoy x9jhf4c xqtp20y x6ikm8r x10wlt62 x1n2onr6 xh8yej3",style:{paddingTop:c+"%"},children:i.jsx("div",{className:"x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy",children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("TopOfFeedLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({refreshTofuSessionID:function(a){},tofuSessionID:null});g["default"]=b}),98);
__d("XCometStoriesCreateControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/stories/create/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
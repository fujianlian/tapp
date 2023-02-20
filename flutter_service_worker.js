'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "FileSaver.min.js": "9759e700e126aff2a1efaa9d8a9cde9d",
"version.json": "b8462dff0a43511ab23608304f04e07a",
"index.html": "f6fb32a7ba6e67e3bf3d5a760777068b",
"/": "f6fb32a7ba6e67e3bf3d5a760777068b",
"main.dart.js": "0e766c9ab40e3db2ff2e1884ba06d376",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"ether.js": "6ed99f4839df6b1d73f760588e715123",
"favicon.png": "801939791d62ba8cb0e3167c0e743ef0",
"icons/Icon-192.png": "a18a2541c6c6e9dd7da79494d65eb13a",
"icons/Icon-maskable-192.png": "a18a2541c6c6e9dd7da79494d65eb13a",
"icons/Icon-maskable-512.png": "61a3947c4c15ea4f521fc05242e8d30b",
"icons/Icon-512.png": "61a3947c4c15ea4f521fc05242e8d30b",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"assets/AssetManifest.json": "84b961ba4c7e46009c35d6d00743fb86",
"assets/NOTICES": "b14e266b314aa8a866a7a065899fa150",
"assets/FontManifest.json": "272176c35f34c1ee3969a26b39505843",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_qr_reader/assets/tool_img.png": "89af5d82df7789452cddc4ca9d8c95e2",
"assets/packages/flutter_qr_reader/assets/tool_flashlight_open.png": "20bb58a7b68c1751b98a23606e7f9ea9",
"assets/packages/flutter_qr_reader/assets/tool_qrcode.png": "47e89443599100dd2df394d99db19c88",
"assets/packages/flutter_qr_reader/assets/tool_flashlight_close.png": "bf36a6199093f74e18ad94f3400225de",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "18fb49df5b01fcdd4cbd2918245cbedb",
"assets/lib/blockchain/web/jslib2/dist/main.js": "605dbcb719f071be337157b9963dc9c7",
"assets/lib/blockchain/web/jslib/dist/main.js": "9ae55dbf1e4cb11872459b8384e9bdce",
"assets/lib/blockchain/browser/dapp/provider.js": "45421c132a6d9eab87a17475c06b9d6c",
"assets/lib/blockchain/browser/dapp/inject.js": "2898399a10f5f9299cc7dfafe2b17c80",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/trade_record_none_suport.png": "ff901975e3f5dd53a8e2788fa9580a1a",
"assets/assets/images/wclogo.png": "f0c2ebbd3c726afcacd309650ac86019",
"assets/assets/images/icon_change.png": "d21ee5cfabfa980b9090cc6456d0f866",
"assets/assets/images/relation/relation_chat_black.png": "276e31d9b665865777290febc4b228e4",
"assets/assets/images/relation/relation_edit.png": "472963f89fe00ac6aea445f566a38046",
"assets/assets/images/relation/relation_intro_cn.png": "a3456f0bd72e6cd9123e15f1d8f306d4",
"assets/assets/images/relation/relation_qrcode_share_title.png": "645f8af7bec24b1b9d38afeaf1dd2adb",
"assets/assets/images/relation/relation_logo.png": "d9b8997f9950bee529de8f4ff50b86d7",
"assets/assets/images/relation/relation_intro_en.png": "9f150d29f219e16054f080911940e487",
"assets/assets/images/relation/relation_delete_group_member.png": "62aa46e734f0da4779d07d79119af989",
"assets/assets/images/relation/relation_custom_emoji_add.png": "cb0f9518c42107a71db44b6c1a581d5a",
"assets/assets/images/relation/relation_login_bg.png": "7744c7a96880896037841945de6f8a1e",
"assets/assets/images/relation/relation_add_group_member.png": "cb876570b5cbd4de2847071c9e8cca1e",
"assets/assets/images/relation/relation_search.png": "dd09c799afdef6f03f9fa8008c30c747",
"assets/assets/images/icon_nft_collect_loading.png": "ddefb84934c4aeed48d377524695f1aa",
"assets/assets/images/icon_wallet_connect.png": "472e9df24ce5acb94ca69de829441a79",
"assets/assets/images/close_eyes.png": "ca21fb07ac2a3a7cc789298d2f5c20c5",
"assets/assets/images/gold_diamond.png": "d97201c3c98bf17202523db14c5c7ff0",
"assets/assets/images/nft_share_bg.png": "372610e885d661dd078e5ad6ceb90ae6",
"assets/assets/images/scan_border.png": "812653b68113786d88a46f6a6d4cfe77",
"assets/assets/images/nft_klaytn.png": "10b21108dfbbc1007c375d86edaf643a",
"assets/assets/images/tab_bar/asset_active.png": "a7630d9a9fb3109910e1875e15d9deb1",
"assets/assets/images/tab_bar/mine.png": "5dcb089c7dfb229a4985c1f954a26534",
"assets/assets/images/tab_bar/nft.png": "5fb2b65a078d54e605fa7e6b22f763e8",
"assets/assets/images/tab_bar/nft_active.png": "c5b52a7904aa6a08ebdc11f8a50fa295",
"assets/assets/images/tab_bar/mine_active.png": "9578d66bd587a568b3bfbfa1a8054474",
"assets/assets/images/tab_bar/browser.png": "832a5fa9953fbd5c0740b194a9de2382",
"assets/assets/images/tab_bar/tabbar_relation_active.png": "6d989530a4745b4b64c47122ceaaeebb",
"assets/assets/images/tab_bar/browser_active.png": "c54963bbcf1c78f243834f911f8fe687",
"assets/assets/images/tab_bar/asset.png": "0a499fe05a9145eb2e368f9af0703114",
"assets/assets/images/tab_bar/tabbar_relation.png": "d9867b3b3a03ed4bc5ee282cb8ec09dc",
"assets/assets/images/nft_polygon_38.png": "55b7fdd5033ee31c232cb3c37e104de6",
"assets/assets/images/nft_klaytn_38.png": "636f7141e5b9400fd86671b43b300a7f",
"assets/assets/images/nft_platon_38.png": "382a3bcc10dd1f5798a94a7862d3badc",
"assets/assets/images/edit_icon.png": "40e6a62395e71319c725feae27945e82",
"assets/assets/images/avatar_3.png": "ede1c32a223b760f2a64fe41331303a9",
"assets/assets/images/nft_share_icon_bg.png": "2d660f8194f3b8f0720d46a5c4e591ce",
"assets/assets/images/placeholder_image.png": "cc7323f87281785f6bbad87ff189ecfd",
"assets/assets/images/avatar_2.png": "8caa07e69f5e0378abeef85aa8307630",
"assets/assets/images/change.png": "d21ee5cfabfa980b9090cc6456d0f866",
"assets/assets/images/launchpad_placeholder.png": "f34424dd1cbc05c9f6816729c2247bdd",
"assets/assets/images/icon_invest_list_loading.png": "6c68e6e6bb03a3cbfb4d956609f31520",
"assets/assets/images/avatar_0.png": "20767f1f785928c4183c2a9c2be448c1",
"assets/assets/images/blur.png": "f148019858ecff1ad9b63db545d67a4d",
"assets/assets/images/nft_eth_38.png": "9634047cd2c6fe773b1d06b085ae2293",
"assets/assets/images/avatar_1.png": "5ae1a1693f9740ff00ebf628324c26ec",
"assets/assets/images/out_close.png": "381677a36414ef9d3359b2d844e41796",
"assets/assets/images/round_me.png": "5dfebc33cf079f947ec419585e785767",
"assets/assets/images/avatar_5.png": "cae6c33bc7662c509e3b43a5b18a18b9",
"assets/assets/images/avatar_4.png": "a987f10e403774bac3412c68d3ab76fc",
"assets/assets/images/icon_change1.png": "176990da1454874ac4fdf1fc1cff2218",
"assets/assets/images/nft_polygon.png": "622c0c66e27ec01d1f1a577c3cb08791",
"assets/assets/images/rarible.png": "40a5c59f4b75bbd27d4521fe2b99b61e",
"assets/assets/images/set_password_tip.png": "d7db7e3b77d3d6df6d4dddaeff33c3e4",
"assets/assets/images/transfer_assets.png": "ab9b2b40b69c5d9821dedc2fbcf252ed",
"assets/assets/images/nft_recommend_loading.png": "d882774fa0986ad0a892d10dde7a66ef",
"assets/assets/images/nft_share_guidance.png": "64300c727e37cc934648220088618688",
"assets/assets/images/chain_flag_bg.png": "90903771cb66ce9cd239272d9bcf0cd5",
"assets/assets/images/scan_divider.png": "c5d4f17157b7ff7a486328560f7bbc9d",
"assets/assets/images/nft_platon.png": "849e3cd122aa8e30e5316b79ea2fd135",
"assets/assets/images/icon_nft_list_cube_loading.png": "d47cd2f8c4eca4a46da1758183d0a3dc",
"assets/assets/images/icon_nft_list_loading.png": "60f8a6aa1807c7d4696fac48c4b388a7",
"assets/assets/images/wallet/tp.png": "8495cf6d72b0051e29f9d5a8c66ac6fc",
"assets/assets/images/wallet/me.png": "16f165001da0b83d7136fa009398c3e8",
"assets/assets/images/wallet/argent.png": "5499eb7c7b54c167e514c6c2a97418bf",
"assets/assets/images/wallet/metamask.png": "6909f4b7e73692b9e94660486ad56700",
"assets/assets/images/wallet/walletconnect.png": "a58bb9a316fd9ee3324f6053518eeb26",
"assets/assets/images/wallet/math.png": "e934740a12221b674ea22f62a066d0a5",
"assets/assets/images/wallet/trust.png": "526e5a323144305cb0465011a0cccdec",
"assets/assets/images/wallet/wc.png": "5649a4a4e73afeae3da27f83b54332ec",
"assets/assets/images/wallet/imtoken.png": "a5b904fe9a913ab43e397dee75a1ccaf",
"assets/assets/images/wallet/coinbase.png": "42b17ae24ec3165028c5ae034830cfac",
"assets/assets/images/nft_share_top_logo.png": "b2ee4377053a0b0cf2ee406fb07f1270",
"assets/assets/images/common_back_arrow.png": "a08e57a47f881069a1c91f7108bf0bc3",
"assets/assets/images/right_green.png": "5ec60359f7c92c1a4953b91a0b38196d",
"assets/assets/images/uniswap.png": "1bddd85db746248b1ee5751e18d4981a",
"assets/assets/images/icon_asset_list_loading.png": "fc231d74aa888e7c1599d8e4769aef5e",
"assets/assets/images/right1.png": "2cd793588eba92f297bcf38fdd570fc9",
"assets/assets/images/introScreen3.png": "ef5afa6f889ab892f9a7621650e6cbe4",
"assets/assets/images/jux.png": "441c5dc0568c92909eb49f45e5aad0f1",
"assets/assets/images/updateBg.png": "3ce88235b29199c77951059f37b85701",
"assets/assets/images/bac.png": "d396817f06b1da64518dd4232a7d04eb",
"assets/assets/images/introScreen2.png": "223cf3958de24214a8f38346b3ef566b",
"assets/assets/images/relation_login_bg.png": "c18ae35ee044915aa51db259b2c88e18",
"assets/assets/images/maintainBg.png": "0f844c4daf4feb40107050fe53390dac",
"assets/assets/images/nft_share_logo.png": "2d673b709b261d3116ce79d8c49414ea",
"assets/assets/images/eyes.png": "891f2b44d4a79dd23619f19731351f54",
"assets/assets/images/introScreen1.png": "66d86b22f396af51ce21e80d3cf6a270",
"assets/assets/images/introScreen5.png": "3e902b8004745a604b4be7ec08656c77",
"assets/assets/images/currency/cfx.png": "6ffe5f6b95f101a0e6ada2a2bd917cb4",
"assets/assets/images/currency/lat.png": "c12f8f833181f4a831daa12874e7d5ac",
"assets/assets/images/currency/cfx_asset.png": "3d0a22f076f7962c36643402c0a020e0",
"assets/assets/images/currency/dot.png": "d0e60008319699b42998f33488e59746",
"assets/assets/images/currency/cosmos.png": "f7e549253fd0ea840067f56184ce1e3d",
"assets/assets/images/currency/avax.png": "2ede7bda0999c69b1d87b35d8d6decb5",
"assets/assets/images/currency/kusama.png": "95cb9fca4bf063c5f1504e3ba50c9602",
"assets/assets/images/currency/eth.png": "fef7997d6d8abc9962c6e37f124e4333",
"assets/assets/images/currency/polygon.png": "12ddea72282a0266a9400cb0130737c7",
"assets/assets/images/currency/arbitrum.png": "e8252130c853a28b3976ab752838c7a1",
"assets/assets/images/currency/atom.png": "e71ee258851175e6c438b66f04e70f49",
"assets/assets/images/currency/weth.png": "b0a2b88ed3de55bfad8040772296d4a4",
"assets/assets/images/currency/bsc.png": "5e8b87ca09c40cc271506afd3ef2658c",
"assets/assets/images/currency/heco.png": "0c356d5f310c7b1784a64fe9b6bb7929",
"assets/assets/images/currency/atp.png": "b9948686dec51b5b00224ffe5adc3c11",
"assets/assets/images/currency/okex.png": "2f8c7a7ba31ca9bb3e12c420e2655f15",
"assets/assets/images/currency/btc.png": "facaf3e21ed23e36c98249b911a8d286",
"assets/assets/images/currency/issuerDefaultAvatar.png": "e75d208f14a161f3ed9dd79bad51dcb6",
"assets/assets/images/nft_eth.png": "11d926a355dde89e4ff66c9c3bfa8bb0",
"assets/assets/images/introScreen4.png": "b410b52ce9056b31a8b91e94e3a1ade1",
"assets/assets/images/right.png": "b3923cbc4896c9e9a396e5ca5dfc565b",
"assets/assets/svgs/walletconnect.svg": "e8a500f2a95e1507caf4cf3a5284a35d",
"assets/assets/svgs/triangle.svg": "ca180c5f6956d43da1970aaced267a1d",
"assets/assets/svgs/bottom_transfer.svg": "37eb950ae5458fce13bc6982a9354825",
"assets/assets/svgs/relation_add.svg": "c2b03a8f4cdae5d6db775a1f2ed425d2",
"assets/assets/svgs/search.svg": "ff34240220819ae5449fb30d008e1fc0",
"assets/assets/svgs/arrow_top.svg": "20bd272de3f99b052f16225f9cbd0d08",
"assets/assets/svgs/about_us.svg": "9db2ce7ce2a4c560afe1bf541fc13e9d",
"assets/assets/svgs/system.svg": "eae21cc6c15955f23b952caa64559466",
"assets/assets/svgs/expedite_default.svg": "82cb4913ed0f55d1facc1760ba96dd9e",
"assets/assets/svgs/common_share.svg": "dc1e079361d952bb6124124e7d344fd9",
"assets/assets/svgs/trading_doing.svg": "f8b5987ea71514a3e6ce78a759b62c60",
"assets/assets/svgs/arrow_right_green.svg": "818cafd3672e72c35cd9160b2da95233",
"assets/assets/svgs/icon_metadata.svg": "ba90e675814c5884bc5c213146512458",
"assets/assets/svgs/relation_share.svg": "106335b501acde2401d2ebb711b77f18",
"assets/assets/svgs/checked.svg": "bae599f984a99c4a3cad3e7fb8c996e9",
"assets/assets/svgs/check_circle_unchange.svg": "511707166ca5c112e5db3c44ae6e3f4e",
"assets/assets/svgs/realtion_favorite.svg": "6ccccb0abbd13c6e0438173843f78f4e",
"assets/assets/svgs/collection_edit.svg": "f125b7776b676e1437ba064ddaa3b655",
"assets/assets/svgs/dappbox_favorite_delete.svg": "131701bd02092bb89cb68e9c1746f703",
"assets/assets/svgs/rectangle.svg": "36aa6359d1da8b961fc1e53f96c074f4",
"assets/assets/svgs/relation_feature_expand_less.svg": "989e45b163818570fc794c23c60a2369",
"assets/assets/svgs/round_me.svg": "0201259bfe4600f1c3226421fad6fd34",
"assets/assets/svgs/nft_video_play.svg": "acb7d5683745d117c3784eb7cdfc4c6f",
"assets/assets/svgs/icon_share.svg": "a7f2ddb8882dbe4fd7b3179a2c6715da",
"assets/assets/svgs/charge_unit.svg": "63cd8c70602c46b33c5472ccb9b927b4",
"assets/assets/svgs/share_transfer_logo.svg": "674c5cfa7a45c8c71cb85dd9a6e966aa",
"assets/assets/svgs/icon_nft_number.svg": "0e3492486055cf2ca48e5dbc35a11993",
"assets/assets/svgs/receive1.svg": "d7fb1fac28b833cdc5c7d9e57f1463d3",
"assets/assets/svgs/icon_refresh.svg": "3221e7ac447570c3b7deae9a9a59ecde",
"assets/assets/svgs/im_create_group.svg": "390709fabf4d88ab6a9444c2f6d12d50",
"assets/assets/svgs/icon_prompt_selected.svg": "856211e7f934a1d2332b41875701f112",
"assets/assets/svgs/placeholder_dapbox_recommend.svg": "1676bd881f24062bfc1b976485709143",
"assets/assets/svgs/transfer1.svg": "0349298f15b615c575fd80e24cb3184e",
"assets/assets/svgs/icon_edit_token.svg": "6b3161d614d71a8e4b7092cd81364913",
"assets/assets/svgs/icon_unfreeze.svg": "969dd23819256527f6ff55aea3f6cb9b",
"assets/assets/svgs/icon_wc_connecting.svg": "61f099409e9e2286237d1c6ccefe08e2",
"assets/assets/svgs/records.svg": "97c332bd2896e871ce574a0c91263383",
"assets/assets/svgs/relation_group_avatar.svg": "048de6ff5f52f4e8bcb67cdc0fae92a8",
"assets/assets/svgs/icon_copy.svg": "dfab765e82eaea19fa1458177182590a",
"assets/assets/svgs/icon_me_wallet_connect.svg": "186adb7b1ea30a0918395d2ab951b1e4",
"assets/assets/svgs/open_eyes.svg": "d5bd59e9336b14b496c2e99991159ffc",
"assets/assets/svgs/link.svg": "0bbde48b50fc4bd75f39bc26bae3ca60",
"assets/assets/svgs/photo_union.svg": "ae3df0193a264f6643fa4cc12701def2",
"assets/assets/svgs/nft_approve.svg": "0117392c2dc208a26f6bb3071c1c0db8",
"assets/assets/svgs/trading_success.svg": "178a648ad1f951dac60a6b29b960ffca",
"assets/assets/svgs/relation_fav_nft.svg": "ea2e6e9fa0ea074c47080fd830567551",
"assets/assets/svgs/share_collection_grey.svg": "0854015f731bfad58aa606ef257bbc1c",
"assets/assets/svgs/arrow_right_8x11.svg": "fae8aba980d0f7761c3cb8c20cd43037",
"assets/assets/svgs/metamask.svg": "093e8014cc21b7306c849c70b56e4111",
"assets/assets/svgs/icon_question.svg": "4ac874426fd7f4f115f0e9d933d17f98",
"assets/assets/svgs/relation_save.svg": "f668072d295cd92bfc753cbf154d4e28",
"assets/assets/svgs/relation_bind_address.svg": "b7ff9cc6e80d7d130265a2da4e4e4031",
"assets/assets/svgs/share_share.svg": "f02a10abc2a66d96045e6e67ca7b6c42",
"assets/assets/svgs/close_eyes.svg": "e5d66b42347972d748eafbccad18e792",
"assets/assets/svgs/relation_fav_photo.svg": "552808b06d804d15d402cd62e119ead8",
"assets/assets/svgs/mail.svg": "31c4eaaabb3892e7494e7bdeceb5e0c7",
"assets/assets/svgs/nft_records.svg": "d0962397558243842b6a2e71f9d97360",
"assets/assets/svgs/search_14.svg": "6d3ff91bf591bd4ea23149c798709dc3",
"assets/assets/svgs/placeholder_dapbox_tabbarview.svg": "8535167b0a217c6fba1234e98aea523c",
"assets/assets/svgs/icon_chain_lock.svg": "257b4c8b9b43ab91cf67d1958a1d500c",
"assets/assets/svgs/dapp_webview_more.svg": "bd37b094ff10c50a085b07a7d5eea947",
"assets/assets/svgs/relation_copy.svg": "715573f208bbe1ec0ace93cd4971f682",
"assets/assets/svgs/share_collection.svg": "799beb72cb63971701b315651e3a8182",
"assets/assets/svgs/recover_no_select.svg": "f1fc14019ae17593a3d3cfa6da555ec2",
"assets/assets/svgs/mine_contact.svg": "eb69f984e75a3d417019b01387dc44d3",
"assets/assets/svgs/nft_source_add.svg": "ee44229d5cc008968401129c86631514",
"assets/assets/svgs/icon_freeze.svg": "6daaafc58a06e7deb1b5c4624a456981",
"assets/assets/svgs/relation_eth.svg": "cebc0849b537929853133b8928f27da4",
"assets/assets/svgs/relation_add_features.svg": "9844f9e1d773d5244d373345e28dfc81",
"assets/assets/svgs/icon_nft_default.svg": "002f7d64cd6f9b7038229706274716b5",
"assets/assets/svgs/relation_foward.svg": "a3175e90032d912a82b89ed346b567ea",
"assets/assets/svgs/relation_emoji_black.svg": "9a084a2194d72e560ea2a1ee6ff3efbf",
"assets/assets/svgs/unkonw_wallet.svg": "275b6b5b63d42df809e4fc7742be9d65",
"assets/assets/svgs/arrow_right.svg": "265409ec3b04aa8fba0bebd2bda63a0c",
"assets/assets/svgs/icon_down_arrow.svg": "b482bd018215433201a5692f32b72a00",
"assets/assets/svgs/nft_person.svg": "52849d2d9ad438c065f225d7c0815a11",
"assets/assets/svgs/icon_looksrare.svg": "e9d3c03751ea8a83afefe1276e592024",
"assets/assets/svgs/plus.svg": "db81439ea447b4c3d1a65365fac35f3b",
"assets/assets/svgs/trade_record_none_suport.svg": "b0194d5fc53595ba549f59ed649c387c",
"assets/assets/svgs/qrcode_icon.svg": "9243eebc8c42a1433117360a1582afc2",
"assets/assets/svgs/nft_contract.svg": "57a279dbabb3271f52babd0a3431ca2e",
"assets/assets/svgs/nft_mint_add_attribute.svg": "5d1dbf32d6c4c8dfc3038686b59a9118",
"assets/assets/svgs/relation_intro_arrow.svg": "e0b7ce507a69c49aed42ddae4e4b35ef",
"assets/assets/svgs/email.svg": "635a0aeaf89cf1640276d932920854fc",
"assets/assets/svgs/default_icon_radius.svg": "3ee591c4849c8176bce0bd4756eddd81",
"assets/assets/svgs/photo_down_flag.svg": "4d41ef8deb5b6e03b41a95206ffb55f4",
"assets/assets/svgs/check_circle.svg": "a8c2705082ee23d130056bc2126b7d26",
"assets/assets/svgs/im_conversation_tab_selected.svg": "172e2d4b3e8921082edef5a39f86856f",
"assets/assets/svgs/icon_record_from.svg": "28159dc428005fe3eba7f0cc02ceec81",
"assets/assets/svgs/icon_default_dapp.svg": "dc4dd74126f6e6240c6f02903e05c92b",
"assets/assets/svgs/icon_dapp_load_error.svg": "350e0222044e0c851fc861e807a0eda0",
"assets/assets/svgs/scan.svg": "2be7a461ca82df5ca432e287fc716530",
"assets/assets/svgs/relation_favorite_link.svg": "283965e47b23863a9dad32027ff1c371",
"assets/assets/svgs/relation_fav_camera.svg": "6f2517eeab8a4d9d57be04811b28dde1",
"assets/assets/svgs/back.svg": "bf043d3f656205e3536e4b068f622636",
"assets/assets/svgs/im_conversation_tab.svg": "0ba5cf44f1e7305bf3355aa37006c637",
"assets/assets/svgs/nft_mint_delete_att.svg": "4871c3ea39cdca6389c49984370e8a87",
"assets/assets/svgs/switch_network_icon.svg": "14904e4495f74cf45c4d55b944fdb9e2",
"assets/assets/svgs/arrow_down.svg": "1c38a405f936a7b4a50d7a8b300664a6",
"assets/assets/svgs/relation_speaker.svg": "ced50f2267cfd7faa22a1fe8f1a5f07d",
"assets/assets/svgs/flow.svg": "8cff9986c3bdb1a8f0b6acbc8e4bef46",
"assets/assets/svgs/relation_emoji.svg": "c2a0a9c0669e8b25f996c996d26630ad",
"assets/assets/svgs/icon_check.svg": "82cb4913ed0f55d1facc1760ba96dd9e",
"assets/assets/svgs/icon_prompt_unselected.svg": "f6f416fb30cfd5a2be79c2aab69c95de",
"assets/assets/svgs/dappbox_favorite.svg": "b76e6e228dd51c1026ece54d833f5bfc",
"assets/assets/svgs/icon_dapp_no_result_search.svg": "c7de8f508b1e34b597d7bcab94a4a857",
"assets/assets/svgs/allCoin.svg": "bc8839fef6912de661e1338aa7e8fe2a",
"assets/assets/svgs/dotted_border.svg": "c4d8c0fefd7772c5cbec5c54c49f8e79",
"assets/assets/svgs/add_token.svg": "b2d40865212b3fcea9f23f8b35e259dd",
"assets/assets/svgs/relation_add_group_member.svg": "8b681bb510b5c5510a01a05e9ac084ee",
"assets/assets/svgs/defaultIcon.svg": "9ce2d608975fa0782c5d853db34796d8",
"assets/assets/svgs/im_add_friends.svg": "4f95792441c93ba40c39f04e90ff78a4",
"assets/assets/svgs/close_dialog.svg": "2fe8f76f3beeda158cd8821a357ea9f0",
"assets/assets/svgs/platon.svg": "acce19f039427cf103f8b5b1b6462b71",
"assets/assets/svgs/relation_fav_web.svg": "9c4fd7e81cbc6f0ea923f0a9b8daa43e",
"assets/assets/svgs/wc.svg": "32eb8d8e4cf53e2c33c623a68816780c",
"assets/assets/svgs/invest.svg": "a452d9d7cc90fc8be0caf835feeda893",
"assets/assets/svgs/icon_add.svg": "e5717814acd4a737144b787989adbd25",
"assets/assets/svgs/recover_select.svg": "3b31ef45ec5af8a2c73830989ff80b36",
"assets/assets/svgs/bottom_receive.svg": "8712cbcdf69e8314d438d8eff498a6c8",
"assets/assets/svgs/back_white.svg": "fba2d4d74eeba2a45845d3a01790d519",
"assets/assets/svgs/bac.svg": "0590330a289ae5fa24da1106a50f3b46",
"assets/assets/svgs/relation_no_channels.svg": "209554bb2c791abf5535177f2f498767",
"assets/assets/svgs/scan2.svg": "405b6e16fb30bd5ce3475376f138ef81",
"assets/assets/svgs/icon_nft_list_cube.svg": "99417c7a2017be4d24ada2d9e534b8a2",
"assets/assets/svgs/common_hashkeyMe.svg": "63b4181a990120ca44d56dd6fd0272b6",
"assets/assets/svgs/share_refresh.svg": "dd675581d2522ca573841cd941cb15be",
"assets/assets/svgs/ic.svg": "fe725f68bf49f81ab9c02191a5d9ae36",
"assets/assets/svgs/delete.svg": "12557eb6a4dc97a49d9f2c2b4248da54",
"assets/assets/svgs/share_copy.svg": "0bbde48b50fc4bd75f39bc26bae3ca60",
"assets/assets/svgs/trading_failed.svg": "2dc4d5faffcfa85dbed9622e01f92c2c",
"assets/assets/svgs/common_none_data.svg": "bb3960acf729b885e124dd3cc849286d",
"assets/assets/svgs/icon_faceid.svg": "e1b3736d22d30c25349c684b9f0c2341",
"assets/assets/svgs/relation_send_message.svg": "f24b710c54b82634835fd18c0c4bb67d",
"assets/assets/svgs/common_scan.svg": "909ef0ccedf9a36036e679887037ffa4",
"assets/assets/svgs/reorder.svg": "3872e1a735b2c3c607f3a81dca0b2714",
"assets/assets/svgs/polkadot.svg": "c430b18469521009e44a554059e60267",
"assets/assets/svgs/share.svg": "e3bbff5091cf902677b8dd63661f995c",
"assets/assets/svgs/record_detail_down.svg": "fae41d337781726cdbc5226f132fcaa8",
"assets/assets/svgs/me_recovery.svg": "54da3432696d0821446ed61b3e5b1cd3",
"assets/assets/svgs/optimism.svg": "f12b717c2a35ce321dcb1f4bbcd546e7",
"assets/assets/svgs/icon_receive_record.svg": "a8241b2a7fcaf11efffc737c895bce9a",
"assets/assets/svgs/warning_gray.svg": "856308b6689d14acb0cf905411e3460e",
"assets/assets/svgs/icon_record_to.svg": "3a22d84e6d424eb91a9cb95d8cc85062",
"assets/assets/svgs/icon_help_center.svg": "119a521219ff57a715859478ac38b0cc",
"assets/assets/svgs/share_receive_background.svg": "ccf9e666215fe353e249aee31da674d2",
"assets/assets/svgs/icon_nft_list_list.svg": "1e9f7b63f342fe520c88863e005e12b6",
"assets/assets/svgs/relation_reply.svg": "a5d77f492f766f3f022b9fedfb9d5682",
"assets/assets/svgs/relation_message_dismiss.svg": "b101f2e48d8d6477b8dc14b3a33ec54e",
"assets/assets/svgs/nft_video_stop.svg": "176a900fa236caea6819d9741b06026a",
"assets/assets/svgs/realtion_keyboard.svg": "ce4e5f0a1ecbed67a5975881993578bf",
"assets/assets/svgs/icon_asset_record_loading.svg": "f77ac2aaed71dac2547ce73603e2fabe",
"assets/assets/svgs/nft_source_add_bg.svg": "65925b5c43df090afa96fd2fcf41e9aa",
"assets/assets/svgs/browser_icon.svg": "5c0bc4b8d5a0c5228ce3eb2f3fb52753",
"assets/assets/svgs/im_contacts_tab.svg": "d5c6d4e896013a4508923addb7f64498",
"assets/assets/svgs/record_detail_up.svg": "b62d72cbf99fbdd799612e0744d9143d",
"assets/assets/svgs/icon_nft_detail_top.svg": "0c31f408f891c9147c7a10f5e8dbf561",
"assets/assets/svgs/debank_default.svg": "cb1e3962b339be8ff428cb6d0a91f4f8",
"assets/assets/svgs/share_network.svg": "317761c1c4103f0253cbb4075ff3a4df",
"assets/assets/svgs/icon_clear_input.svg": "6b0205715316ba058d356a5461fa5b9b",
"assets/assets/svgs/icon_transfer_record.svg": "8416ccb0c39664b833874a78839bdcf3",
"assets/assets/svgs/icon_none_connected_dapp.svg": "416b16231cc0d30f59f4f349425c3052",
"assets/assets/svgs/chain_flag_bg.svg": "265672a2505230bad43abbdfe8110abc",
"assets/assets/svgs/check2.svg": "5974826789322d5163669d09160ec4fb",
"assets/assets/svgs/im_contacts_tab_selected.svg": "d5c2061a6499311ee67c37f2048016c5",
"assets/assets/svgs/icon_touchid.svg": "10073fb2ce716bf9f958f060b622db9a",
"assets/assets/svgs/nft_video_play_s.svg": "e91560fd651b3349e960c9f455c79b92",
"assets/assets/svgs/share_transfer.svg": "14e1942e88b18c0b909e6fa54e0df24c",
"assets/assets/svgs/placeholder_dapbox_tabbar.svg": "265996855082bcf569bc87847424cad0",
"assets/assets/svgs/message_center.svg": "84ba3060bc3ea98b826f420c0fd81575",
"assets/assets/svgs/solana.svg": "e4805c046025bdd1019a36a67610258b",
"assets/assets/svgs/trading_failed_yellow.svg": "04d2a3079809b78f82ae70673dd75cc9",
"assets/assets/svgs/icon_evm_chains.svg": "9e4ec239c5b2b9faebf861546688da3e",
"assets/assets/svgs/radio_button_unchecked.svg": "0c030809ff70df61cdd9e1ab561e4cc1",
"assets/assets/svgs/us_logo.svg": "865ede0a2047087ddfd66f2d0c63b93b",
"assets/assets/svgs/opensea.svg": "023b0cb531a8dfb72d47a7daaac858ca",
"assets/assets/svgs/recover_me.svg": "ca9472d6c637b2b24dab3e96754677f1",
"assets/assets/svgs/moon.svg": "87a382d2d50a6b8df0aaf80566673858",
"assets/assets/svgs/check1.svg": "bae599f984a99c4a3cad3e7fb8c996e9",
"assets/assets/svgs/im_group_info.svg": "7771734468c75b8d80781c0649280808",
"assets/assets/svgs/allCoin2.svg": "25c1256f1f28a850c6f73b09dd1a77e8",
"assets/assets/svgs/cfxIcon.svg": "50b88f09777378b9bbdd4fd2fbc154fe",
"assets/assets/json/chain_list5.json": "b08c6d0bb4ea3b0ac2f9c7e8eb7e0f76",
"assets/assets/json/chain_list4.json": "10d001570e2233c9c6d69a4bf62c2331",
"assets/assets/json/goerli.json": "92529bd3666fd9ece8b3cd14f76c6223",
"assets/assets/json/chain_list3.json": "8de161c6a04fa3227392eb9ddc63ef70",
"assets/assets/json/mumbai.json": "25f20b5b4a20d968fcd370f5dc990fb7",
"assets/assets/json/chain_list2.json": "09095c1079e57bf75902319ba2d0b4ef",
"assets/assets/json/chain_list1.json": "750ac6035acdcd0bf36014230ad2e8fe",
"assets/assets/json/mainnet.json": "2ebd37be45c5b7fade79191a182ae4c1",
"assets/assets/json/wallets.json": "c8692d54fd6a65d077756192d5f69781",
"assets/assets/json/polygon.json": "a360b3715927b91f07d7716efb520e6b",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "9745415b8a2a8b9a2480a12f7e2d3ad3",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "d5c46b134c17b2138dcd1bb0efa67049",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "36b5bab58a18b9c924861a4ccbf1a790",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

export const content = {
  'zh-Hant': {
    label:'繁體中文', brand:'捷道地圖', support:'支援中心', privacy:'隱私權政策', language:'語言', skip:'跳至主要內容', tag:'JIEDAO · TRAVEL WITH CONFIDENCE',
    title:'每一段旅程，都有解答。', intro:'從車站查詢到訂閱設定，在這裡找到捷道地圖的使用說明。', quick:['即時到站資訊','訂閱與付款','聯絡支援'], contents:'本頁內容', faqTitle:'常見問題', contactTitle:'還需要協助？', contactText:'請提供 App 版本、裝置與系統版本、發生問題的車站及操作步驟。如附上截圖，請先遮蔽個人資料。', contactButton:'寄信給支援團隊', contactPrivacy:'隱私權問題或資料請求，也請透過此信箱聯絡。', download:'在 App Store 查看', updated:'更新日期', rights:'捷道地圖 · 支援與隱私權', note:'到站時間是預估資訊；請以車站現場公告及營運單位資訊為準。各平台、路線與功能依裝置及資料來源而異。',
    faqs:[
      ['arrivals','如何查看即時到站資訊？','選擇運輸系統後，點選地圖上的車站，即可查看支援路線的到站時間、目的地與營運狀態。台北捷運支援進站倒數。'],
      ['refresh','為什麼切換車站時，資訊沒有立即更新？','捷運即時資訊會短暫快取約一分鐘。在快取有效期間，切換車站會使用已取得的資料；資料過期後，再次點選車站才重新查詢。倒數畫面更新不代表每秒向 API 查詢。'],
      ['connection','查不到班次或連線失敗怎麼辦？','確認網路連線後重新載入。資料來源暫時中斷、服務時段或查詢頻率限制都可能影響結果。遇到查詢過於頻繁提示時，請依畫面建議稍候再試。沒有資料不一定代表沒有列車。'],
      ['languages','如何變更顯示語言？','App 會依裝置的偏好語言顯示。桃園與台北捷運站名支援繁體中文、英文、日文及韓文；高雄捷運提供中英文站名，日韓文設定使用英文站名替代。到站提示與訂閱畫面另外支援簡體中文。網站語言可用上方選單切換。'],
      ['subscriptions','如何管理訂閱？價格使用哪種貨幣？','月訂閱與年訂閱由 Apple 處理。請在 Apple 帳號的訂閱設定管理或取消；刪除 App 不會取消訂閱。價格依 App Store 的國家／地區顯示當地幣別，不由介面語言決定。實際價格與試用資格以購買畫面為準。'],
      ['permissions','定位、語音或到站提醒無法使用？','請在系統設定確認捷道地圖的定位、麥克風、語音辨識及通知權限。這些功能需要裝置與系統支援；不開啟權限仍可使用不依賴該權限的功能。位置相關提醒可能需要背景定位。']
    ],
    privacyTitle:'了解資料如何使用。', privacyIntro:'本政策說明捷道地圖 App 與本支援網站的資料使用方式。捷道地圖是獨立應用程式，並非各交通營運單位的官方 App。', privacySections:[
      ['scope','適用範圍','本政策適用於捷道地圖提供的功能與支援服務。Apple、交通資料服務及外部網站各自依其政策處理資料。App 的功能與可取得的資料會因平台、裝置及服務來源而不同。'],
      ['location','定位與路線查詢','經你授權後，App 使用位置資訊（可能包含精確及背景位置）顯示附近車站、規劃行程及提供位置相關提醒。依所使用的功能，位置或起終點座標、搜尋內容與出發時間可能傳送至 Apple 地圖、天氣或 TDX 路線服務，以取得結果。你可隨時在系統設定調整定位權限；拒絕授權會限制相關功能。'],
      ['speech','麥克風、語音與通知','啟用語音查詢時，App 透過系統麥克風與語音辨識權限接收語音。目前版本要求裝置端辨識，辨識文字用於車站查詢，不設開發者伺服器接收語音錄音。裝置不支援時，語音功能可能無法使用。通知與到站提醒使用系統權限，可在系統設定停用。'],
      ['services','交通資料與第三方服務','查詢會向 TDX、台北捷運等資料服務提出網路請求，可能包含車站代碼、路線或行程參數。提供者會收到處理連線所需的資訊，例如 IP 位址。地圖、搜尋、天氣、Apple 購買服務及外部訂票連結受各提供者的政策規範。本版本未整合第三方廣告追蹤或行為分析 SDK。'],
      ['purchases','訂閱與付款','訂閱與付款由 Apple StoreKit／App Store 處理。App 讀取商品、交易驗證與訂閱狀態，以提供已購買的服務；App 不取得你的完整信用卡資料。Apple 會依其政策處理付款及交易紀錄。取消或退款請透過 Apple 提供的管理管道。'],
      ['storage','裝置上的資料','App 會在裝置保存使用設定、首次啟用日期及供通知擴充功能使用的部分狀態，例如選擇的運輸系統或提醒內容。即時查詢結果會短暫快取。系統備份可能包含裝置上的 App 資料，依你的 Apple 設定而定。移除 App 可移除其本機資料，但不會刪除 Apple 保存的交易紀錄或取消訂閱。'],
      ['contact-data','你主動提供的支援資料','當你寄信聯絡支援，我們會使用你提供的電子郵件地址、問題說明與附件來回覆及處理問題。請勿寄送密碼、完整付款資訊或不必要的位置資訊。支援資料僅供處理聯絡事項及必要紀錄；如希望查詢、更正或刪除你提供的資料，請使用本頁聯絡信箱提出。'],
      ['website','本網站與外部連結','本網站不要求建立帳號、不設廣告追蹤或分析腳本。語言選擇反映在網址，不以 Cookie 保存。網站託管與網路服務可能為傳送網頁、安全防護及維護處理 IP 位址與連線紀錄；相關保存方式依提供者政策。點選外部連結或電子郵件連結後，適用該服務的政策。'],
      ['choices','你的選擇與政策更新','你可以調整系統權限、停止使用相關功能、移除 App，並聯絡我們處理你主動提供的支援資料。第三方保管的資料請向該提供者提出請求。本政策如有更新，會在本頁標示日期；如資料使用方式有重大變更，會視需要提供額外說明。']
    ], providerTitle:'服務提供者與相關連結', providerLabels:['Apple 隱私權','Apple 定位與隱私權','TDX 運輸資料平台','台北捷運','Apple 訂閱管理','Apple 使用條款']
  },
  'en': {
    label:'English',brand:'捷道地圖',support:'Support',privacy:'Privacy policy',language:'Language',skip:'Skip to content',tag:'JIEDAO · TRAVEL WITH CONFIDENCE',title:'A little guidance for every journey.',intro:'Find help with station arrivals, language preferences and subscriptions in 捷道地圖.',quick:['Live arrivals','Subscriptions & billing','Contact support'],contents:'On this page',faqTitle:'Frequently asked questions',contactTitle:'Need a hand?',contactText:'Include the app version, device and operating system, station name and steps to reproduce the issue. Hide personal information in any screenshots.',contactButton:'Email support',contactPrivacy:'Use the same address for privacy questions and requests about information you have provided.',download:'View on the App Store',updated:'Updated',rights:'捷道地圖 · Support & privacy',note:'Arrival times are estimates. Follow station announcements and operator information. Features and coverage vary by platform, device and data source.',
    faqs:[
      ['arrivals','How do I check live arrivals?','Choose a transit system and select a station on the map to see arrival estimates, destinations and service status for supported lines. Taipei Metro also offers an arrival countdown.'],
      ['refresh','Why does the information stay the same when I change stations?','Metro arrival data is cached for about one minute. Selecting another station during this period uses data already retrieved. Once it expires, selecting a station requests fresh data. A ticking countdown does not mean the app makes a network request every second.'],
      ['connection','What if arrivals are missing or the connection fails?','Check your connection and reload. Provider outages, service hours or request limits may affect results. If a rate-limit message appears, wait for the suggested time before trying again. Missing data does not necessarily mean no trains are running.'],
      ['languages','How do I change the language?','The app follows your device language preferences. Taipei and Taoyuan Metro station names support Traditional Chinese, English, Japanese and Korean. Kaohsiung Metro offers Chinese and English names, with English used for Japanese and Korean preferences. Arrival messages and subscription screens also support Simplified Chinese. Use the menu above to change this website’s language.'],
      ['subscriptions','How do I manage a subscription, and which currency is used?','Apple handles monthly and annual subscriptions. Manage or cancel them in your Apple Account subscription settings; deleting the app does not cancel a subscription. Currency follows your App Store country or region, not your interface language. Refer to the purchase screen for current prices and trial eligibility.'],
      ['permissions','Why are location, voice search or arrival alerts unavailable?','Check the app’s location, microphone, speech recognition and notification permissions in system settings. These features require device and system support. You can still use features that do not need a denied permission. Location-based alerts may require background location access.']
    ],privacyTitle:'Understand how information is used.',privacyIntro:'This policy describes data use in the 捷道地圖 app and this support website. 捷道地圖 is an independent app, not an official app of the transport operators.',privacySections:[
      ['scope','Scope','This policy covers the app’s features and support service. Apple, transport data providers and external websites handle information under their own policies. Features and available data vary by platform, device and provider.'],
      ['location','Location and route searches','With your permission, the app uses location, which may include precise and background location, for nearby stations, routes and location-based alerts. Depending on the feature, location or origin and destination coordinates, search terms and departure times may be sent to Apple mapping or weather services, or TDX routing services, to provide results. You can change location permissions in system settings; declining access limits related features.'],
      ['speech','Microphone, speech and notifications','Voice search uses system microphone and speech recognition permissions. The current version requires on-device recognition and uses the recognized text to search for stations; it has no developer server receiving voice recordings. Voice search may be unavailable on unsupported devices. Notifications and arrival alerts use system permissions, which you can disable in settings.'],
      ['services','Transit data and third-party services','Queries send network requests to providers such as TDX and Taipei Metro and may include station IDs, routes or journey parameters. Providers receive connection information such as an IP address. Maps, search, weather, Apple purchases and external booking links are subject to their providers’ policies. This version does not integrate third-party advertising tracking or behavioral analytics SDKs.'],
      ['purchases','Subscriptions and payments','Apple StoreKit and the App Store handle subscriptions and payments. The app reads product information, transaction verification and subscription status to deliver purchased services; it does not receive your full card details. Apple handles payment and transaction records under its policy. Use Apple’s management channels for cancellations or refund requests.'],
      ['storage','Information on your device','The app stores settings, the first launch date and some state used by the notification extension, such as the selected transit system or alert content, on your device. Live query results are cached briefly. System backups may include app data depending on your Apple settings. Removing the app can remove its local data but does not erase Apple’s transaction records or cancel subscriptions.'],
      ['contact-data','Information you send to support','If you email support, we use your email address, issue description and attachments to respond and address the issue. Do not send passwords, full payment information or unnecessary location details. Support information is used for the correspondence and necessary records. Contact us at the address on this page to request access, correction or deletion of information you provided.'],
      ['website','This website and external links','This website requires no account and includes no advertising trackers or analytics scripts. Language selection is reflected in the URL rather than stored in a cookie. Hosting and network providers may process IP addresses and connection logs to deliver pages, protect security and maintain the service; retention is governed by those providers. External websites and email services apply their own policies when you follow a link.'],
      ['choices','Your choices and policy updates','You can change system permissions, stop using a feature, remove the app and contact us about support information you voluntarily provided. Direct requests about information held by third parties to the relevant provider. Updates to this policy will carry a revised date here; material changes in data use may receive additional notice as appropriate.']
    ],providerTitle:'Providers and useful links',providerLabels:['Apple privacy','Apple location privacy','TDX transport data','Taipei Metro','Manage Apple subscriptions','Apple terms of use']
  },
  'zh-Hans': {
    label:'简体中文',brand:'捷道地图',support:'支持中心',privacy:'隐私政策',language:'语言',skip:'跳至主要内容',tag:'JIEDAO · TRAVEL WITH CONFIDENCE',title:'每一段旅程，都有解答。',intro:'从车站查询到订阅设置，在这里找到捷道地图的使用说明。',quick:['实时到站信息','订阅与付款','联系支持'],contents:'本页内容',faqTitle:'常见问题',contactTitle:'还需要帮助？',contactText:'请提供 App 版本、设备与系统版本、发生问题的车站及操作步骤。如附上截图，请先遮盖个人信息。',contactButton:'发送支持邮件',contactPrivacy:'隐私问题或数据请求，也请通过此邮箱联系。',download:'在 App Store 查看',updated:'更新日期',rights:'捷道地图 · 支持与隐私',note:'到站时间为预计信息，请以车站现场公告及运营单位信息为准。各平台、线路与功能依设备及数据来源而异。',
    faqs:[
      ['arrivals','如何查看实时到站信息？','选择交通系统后，点击地图上的车站，即可查看支持线路的到站时间、目的地与运营状态。台北捷运支持进站倒计时。'],
      ['refresh','为什么切换车站时，信息没有立即更新？','地铁实时信息会短暂缓存约一分钟。在缓存有效期间，切换车站会使用已获取的数据；数据过期后，再次选择车站才重新查询。倒计时更新并不表示每秒向 API 发起查询。'],
      ['connection','查不到班次或连接失败怎么办？','确认网络连接后重新加载。数据源暂时中断、服务时段或查询频率限制都可能影响结果。遇到查询过于频繁的提示时，请按建议稍后重试。没有数据不一定代表没有列车。'],
      ['languages','如何更改显示语言？','App 会按设备的偏好语言显示。桃园与台北捷运站名支持繁体中文、英文、日文及韩文；高雄捷运提供中英文站名，日文及韩文设置使用英文站名替代。到站提示与订阅页面还支持简体中文。网站语言可通过上方菜单切换。'],
      ['subscriptions','如何管理订阅？价格使用哪种货币？','月度与年度订阅由 Apple 处理。请在 Apple 账户的订阅设置中管理或取消；删除 App 不会取消订阅。价格按 App Store 国家或地区显示当地货币，不由界面语言决定。实际价格与试用资格以购买页面为准。'],
      ['permissions','定位、语音或到站提醒无法使用？','请在系统设置中确认捷道地图的定位、麦克风、语音识别及通知权限。这些功能需要设备与系统支持；未开启权限时仍可使用不依赖该权限的功能。位置相关提醒可能需要后台定位。']
    ],privacyTitle:'了解数据如何使用。',privacyIntro:'本政策说明捷道地图 App 与本支持网站的数据使用方式。捷道地图是独立应用，并非各交通运营单位的官方 App。',privacySections:[
      ['scope','适用范围','本政策适用于捷道地图提供的功能与支持服务。Apple、交通数据服务及外部网站分别按其政策处理数据。App 功能与可获取的数据会因平台、设备及服务来源而不同。'],
      ['location','定位与路线查询','获得授权后，App 使用位置信息（可能包含精确及后台位置）显示附近车站、规划行程及提供位置提醒。根据所使用的功能，位置或起终点坐标、搜索内容与出发时间可能发送至 Apple 地图、天气或 TDX 路线服务以获取结果。你可随时在系统设置调整定位权限；拒绝授权会限制相关功能。'],
      ['speech','麦克风、语音与通知','开启语音查询时，App 通过系统麦克风与语音识别权限接收语音。当前版本要求设备端识别，识别文字用于车站查询，没有开发者服务器接收语音录音。设备不支持时，语音功能可能无法使用。通知与到站提醒使用系统权限，可在系统设置关闭。'],
      ['services','交通数据与第三方服务','查询会向 TDX、台北捷运等数据服务发起网络请求，可能包含车站代码、路线或行程参数。提供者会收到处理连接所需的信息，例如 IP 地址。地图、搜索、天气、Apple 购买服务及外部订票链接适用各提供者的政策。本版本未集成第三方广告跟踪或行为分析 SDK。'],
      ['purchases','订阅与付款','订阅与付款由 Apple StoreKit／App Store 处理。App 读取商品、交易验证与订阅状态，以提供已购买的服务；App 不获取你的完整信用卡信息。Apple 按其政策处理付款及交易记录。取消或退款请通过 Apple 提供的管理渠道。'],
      ['storage','设备上的数据','App 会在设备上保存使用设置、首次启动日期及通知扩展使用的部分状态，例如选择的交通系统或提醒内容。实时查询结果会短暂缓存。系统备份可能包含设备上的 App 数据，取决于你的 Apple 设置。移除 App 可移除其本地数据，但不会删除 Apple 保存的交易记录或取消订阅。'],
      ['contact-data','你主动提供的支持资料','当你发送支持邮件时，我们会使用你提供的邮箱地址、问题说明与附件来回复并处理问题。请勿发送密码、完整付款信息或不必要的位置详情。支持资料仅用于处理联系事项及必要记录；如希望查询、更正或删除你提供的数据，请使用本页邮箱提出请求。'],
      ['website','本网站与外部链接','本网站不要求注册账户，不设置广告跟踪或分析脚本。语言选择反映在网址中，不通过 Cookie 保存。网站托管与网络服务可能为传输网页、安全防护及维护处理 IP 地址和连接记录；保存方式取决于提供者政策。打开外部链接或电子邮件链接后，适用该服务的政策。'],
      ['choices','你的选择与政策更新','你可以调整系统权限、停止使用相关功能、移除 App，并联系我们处理你主动提供的支持资料。第三方保存的数据请向相应提供者提出请求。本政策更新时会在本页标示日期；数据使用方式有重大变化时，会视需要提供额外说明。']
    ],providerTitle:'服务提供者与相关链接',providerLabels:['Apple 隐私政策','Apple 定位隐私','TDX 交通数据平台','台北捷运','Apple 订阅管理','Apple 使用条款']
  },
  'ja': {
    label:'日本語',brand:'捷道地圖',support:'サポート',privacy:'プライバシー',language:'言語',skip:'本文へ移動',tag:'JIEDAO · TRAVEL WITH CONFIDENCE',title:'次の移動に、安心できる答えを。',intro:'駅の到着情報からサブスクリプションまで、捷道地圖の使い方をご案内します。',quick:['到着情報','サブスクリプション','お問い合わせ'],contents:'このページの内容',faqTitle:'よくあるご質問',contactTitle:'お困りですか？',contactText:'アプリのバージョン、端末とOS、駅名、問題が起きた操作手順をお知らせください。スクリーンショットの個人情報は隠してからお送りください。',contactButton:'メールで問い合わせる',contactPrivacy:'プライバシーに関するご質問や、ご提供いただいた情報に関するご依頼も、こちらで受け付けます。',download:'App Storeで見る',updated:'更新日',rights:'捷道地圖 · サポートとプライバシー',note:'到着時刻は予測です。駅の案内や交通機関の情報をご確認ください。機能や対応範囲は、プラットフォーム、端末、データ提供元によって異なります。',
    faqs:[
      ['arrivals','到着情報はどこで確認できますか？','交通機関を選んで地図上の駅を選択すると、対応路線の到着予測、行き先、運行状況を確認できます。台北MRTでは到着までのカウントダウンにも対応しています。'],
      ['refresh','駅を切り替えても情報が更新されないのはなぜですか？','MRTの到着データは約1分間キャッシュされます。その間に別の駅を選ぶと取得済みのデータを利用し、有効期限が切れた後に駅を選ぶと再取得します。カウントダウンの更新は、毎秒の通信を意味するものではありません。'],
      ['connection','到着情報がない、または接続に失敗する場合は？','通信状況を確認して再読み込みしてください。提供元の障害、運行時間、リクエスト制限などが影響する場合があります。アクセスが多すぎる旨の案内が出たら、表示された時間を目安に待ってから再試行してください。データがないことは、列車が運行していないことを意味するとは限りません。'],
      ['languages','表示言語を変更するには？','アプリは端末の優先言語に従います。桃園MRTと台北MRTの駅名は繁体字中国語、英語、日本語、韓国語に対応。高雄MRTの駅名は中国語と英語で、日本語・韓国語設定では英語を表示します。到着案内とサブスクリプション画面は簡体字中国語にも対応します。このサイトは上部のメニューから言語を切り替えられます。'],
      ['subscriptions','契約の管理方法と価格の通貨について教えてください。','月額・年額のサブスクリプションはAppleが処理します。Apple Accountのサブスクリプション設定から管理・解約してください。アプリの削除では解約されません。通貨は表示言語ではなくApp Storeの国または地域に基づきます。価格とトライアルの対象条件は購入画面をご確認ください。'],
      ['permissions','位置情報、音声検索、到着通知が使えません。','システム設定で、位置情報、マイク、音声認識、通知のアクセス許可を確認してください。これらの機能は端末とOSの対応が必要です。許可しなくても、その権限を必要としない機能は利用できます。位置に基づく通知にはバックグラウンドの位置情報が必要な場合があります。']
    ],privacyTitle:'情報の使われ方について。',privacyIntro:'本ポリシーは捷道地圖アプリと本サポートサイトのデータ利用について説明します。捷道地圖は独立したアプリであり、交通機関の公式アプリではありません。',privacySections:[
      ['scope','適用範囲','本ポリシーはアプリの機能とサポートサービスに適用されます。Apple、交通データ提供者、外部サイトは、それぞれのポリシーに基づいて情報を取り扱います。利用できる機能とデータは、プラットフォーム、端末、提供元によって異なります。'],
      ['location','位置情報と経路検索','許可をいただいた場合、近くの駅の表示、経路検索、位置に基づく通知のために位置情報を使用します。これには正確な位置やバックグラウンドの位置情報が含まれる場合があります。利用する機能に応じて、位置または出発地・目的地の座標、検索内容、出発時刻がAppleの地図・天気サービスやTDXの経路サービスに送信される場合があります。権限はシステム設定で変更できます。許可しない場合、関連機能が制限されます。'],
      ['speech','マイク、音声認識、通知','音声検索には、システムのマイクと音声認識のアクセス許可を使用します。現行版はオンデバイス認識を要求し、認識した文字を駅の検索に使います。開発者のサーバーで音声録音を受信する仕組みはありません。非対応端末では音声検索を利用できない場合があります。通知や到着通知の権限はシステム設定で無効にできます。'],
      ['services','交通データと外部サービス','TDXや台北MRTなどへの通信には、駅ID、経路、行程のパラメータが含まれる場合があります。提供者にはIPアドレスなど接続に必要な情報が渡ります。地図、検索、天気、Appleでの購入、外部予約リンクには各提供者のポリシーが適用されます。本バージョンには第三者の広告追跡・行動分析SDKを組み込んでいません。'],
      ['purchases','サブスクリプションと支払い','サブスクリプションと支払いはApple StoreKit／App Storeが処理します。アプリは購入済みサービスの提供のため、商品情報、取引の検証、契約状態を参照します。クレジットカード情報の全体を取得することはありません。支払いと取引の記録はAppleのポリシーに従います。解約や返金の依頼にはAppleの窓口をご利用ください。'],
      ['storage','端末内の情報','利用設定、初回起動日、選択した交通機関や通知内容など通知拡張機能が使う一部の状態を端末に保存します。リアルタイムの検索結果は短時間キャッシュします。Appleの設定によっては、アプリのデータがシステムバックアップに含まれます。アプリを削除するとローカルデータを削除できますが、Appleの取引記録は消去されず、契約も解約されません。'],
      ['contact-data','お問い合わせで提供される情報','メールでお問い合わせいただくと、メールアドレス、問題の説明、添付ファイルを回答と問題解決のために使用します。パスワード、支払い情報の全体、不要な位置情報は送らないでください。お問い合わせ情報は対応と必要な記録のために使用します。ご提供情報の確認・訂正・削除のご依頼は、本ページの連絡先までお寄せください。'],
      ['website','本サイトと外部リンク','本サイトではアカウント登録を求めず、広告追跡や分析スクリプトを使用しません。言語の選択はCookieではなくURLに反映されます。ホスティング・通信事業者は配信、安全対策、保守のためにIPアドレスや接続ログを処理する場合があり、保存方法は各社のポリシーに従います。外部サイトやメールへのリンク先には、そのサービスのポリシーが適用されます。'],
      ['choices','選択とポリシーの更新','システム権限の変更、機能の利用停止、アプリの削除ができます。また、自発的に提供したお問い合わせ情報についてご連絡いただけます。第三者が保管する情報へのご依頼は、その提供者へ直接お寄せください。更新時は本ページの日付を変更し、データ利用に重要な変更がある場合は必要に応じて追加の案内を行います。']
    ],providerTitle:'提供元と関連リンク',providerLabels:['Appleのプライバシー','Appleの位置情報とプライバシー','TDX交通データ','台北MRT','Appleの契約管理','Appleの利用規約']
  },
  'ko': {
    label:'한국어',brand:'捷道地圖',support:'지원 센터',privacy:'개인정보 처리방침',language:'언어',skip:'본문으로 이동',tag:'JIEDAO · TRAVEL WITH CONFIDENCE',title:'모든 여정에 필요한 안내.',intro:'역 도착 정보부터 구독 설정까지, 捷道地圖 사용에 필요한 도움을 찾아보세요.',quick:['실시간 도착 정보','구독 및 결제','지원 문의'],contents:'페이지 안내',faqTitle:'자주 묻는 질문',contactTitle:'도움이 더 필요하신가요?',contactText:'앱 버전, 기기 및 운영체제 버전, 역 이름, 문제가 발생한 순서를 알려주세요. 스크린샷에 포함된 개인정보는 가린 후 보내주세요.',contactButton:'이메일로 문의',contactPrivacy:'개인정보 관련 질문이나 제공하신 정보에 관한 요청도 같은 주소로 보내주세요.',download:'App Store에서 보기',updated:'업데이트',rights:'捷道地圖 · 지원 및 개인정보',note:'도착 시간은 예상 정보입니다. 역 현장 안내와 운영 기관의 정보를 확인하세요. 기능과 지원 범위는 플랫폼, 기기 및 데이터 출처에 따라 다릅니다.',
    faqs:[
      ['arrivals','실시간 도착 정보는 어떻게 확인하나요?','교통수단을 선택한 후 지도에서 역을 선택하면 지원 노선의 도착 예상 시간, 목적지, 운행 상태를 확인할 수 있습니다. 타이베이 MRT는 도착 카운트다운도 제공합니다.'],
      ['refresh','다른 역을 선택해도 정보가 바로 갱신되지 않는 이유는 무엇인가요?','MRT 도착 데이터는 약 1분간 캐시됩니다. 이 시간에는 이미 받은 데이터를 사용하며, 만료 후 역을 다시 선택하면 새로 조회합니다. 카운트다운이 갱신된다고 해서 매초 네트워크 요청이 발생하는 것은 아닙니다.'],
      ['connection','도착 정보가 없거나 연결에 실패하면 어떻게 하나요?','네트워크를 확인하고 다시 불러오세요. 데이터 제공자의 일시적 장애, 운행 시간 또는 요청 제한에 영향을 받을 수 있습니다. 요청이 너무 많다는 안내가 표시되면 권장 시간만큼 기다린 후 다시 시도하세요. 데이터가 없다고 해서 열차가 운행하지 않는 것은 아닙니다.'],
      ['languages','표시 언어는 어떻게 변경하나요?','앱은 기기의 선호 언어를 따릅니다. 타오위안·타이베이 MRT 역명은 중국어 번체, 영어, 일본어, 한국어를 지원합니다. 가오슝 MRT는 중국어·영어 역명을 제공하며 일본어·한국어 설정에서는 영어를 사용합니다. 도착 안내와 구독 화면은 중국어 간체도 지원합니다. 웹사이트 언어는 위 메뉴에서 변경할 수 있습니다.'],
      ['subscriptions','구독 관리 방법과 가격 통화는 어떻게 되나요?','월간·연간 구독은 Apple에서 처리합니다. Apple 계정의 구독 설정에서 관리하거나 취소하세요. 앱을 삭제해도 구독은 취소되지 않습니다. 통화는 화면 언어가 아닌 App Store 국가 또는 지역을 따릅니다. 실제 가격과 체험 대상 여부는 구매 화면을 확인하세요.'],
      ['permissions','위치, 음성 검색 또는 도착 알림을 사용할 수 없어요.','시스템 설정에서 앱의 위치, 마이크, 음성 인식, 알림 권한을 확인하세요. 해당 기능은 기기 및 운영체제의 지원이 필요합니다. 권한을 허용하지 않아도 그 권한이 필요 없는 기능은 사용할 수 있습니다. 위치 기반 알림에는 백그라운드 위치 권한이 필요할 수 있습니다.']
    ],privacyTitle:'정보가 어떻게 사용되는지 확인하세요.',privacyIntro:'이 방침은 捷道地圖 앱과 지원 웹사이트의 데이터 사용을 설명합니다. 捷道地圖는 독립 앱이며 교통 운영 기관의 공식 앱이 아닙니다.',privacySections:[
      ['scope','적용 범위','이 방침은 앱 기능과 지원 서비스에 적용됩니다. Apple, 교통 데이터 제공자 및 외부 웹사이트는 각자의 정책에 따라 정보를 처리합니다. 이용 가능한 기능과 데이터는 플랫폼, 기기 및 제공자에 따라 달라집니다.'],
      ['location','위치 및 경로 검색','권한을 허용하면 앱은 주변 역, 경로 및 위치 기반 알림을 위해 위치 정보를 사용합니다. 여기에는 정확한 위치와 백그라운드 위치가 포함될 수 있습니다. 사용하는 기능에 따라 위치 또는 출발지·목적지 좌표, 검색 내용, 출발 시간이 Apple 지도·날씨 또는 TDX 경로 서비스로 전송될 수 있습니다. 시스템 설정에서 언제든 권한을 변경할 수 있으며 거부하면 관련 기능이 제한됩니다.'],
      ['speech','마이크, 음성 및 알림','음성 검색은 시스템 마이크와 음성 인식 권한을 사용합니다. 현재 버전은 기기 내 음성 인식을 요구하며 인식된 텍스트를 역 검색에 사용합니다. 개발자 서버로 음성 녹음을 받는 기능은 없습니다. 지원되지 않는 기기에서는 음성 검색을 사용할 수 없을 수 있습니다. 알림과 도착 알림은 시스템 권한을 사용하며 설정에서 끌 수 있습니다.'],
      ['services','교통 데이터 및 외부 서비스','TDX, 타이베이 MRT 등의 데이터 서비스로 보내는 요청에는 역 코드, 경로 또는 여정 매개변수가 포함될 수 있습니다. 제공자는 IP 주소와 같은 연결 정보를 받습니다. 지도, 검색, 날씨, Apple 구매 및 외부 예매 링크에는 각 제공자의 정책이 적용됩니다. 이 버전에는 제3자 광고 추적 또는 행동 분석 SDK가 포함되어 있지 않습니다.'],
      ['purchases','구독 및 결제','구독과 결제는 Apple StoreKit 및 App Store에서 처리합니다. 앱은 구매한 서비스를 제공하기 위해 상품 정보, 거래 검증 및 구독 상태를 확인하며 전체 카드 정보를 받지 않습니다. Apple은 자체 정책에 따라 결제와 거래 기록을 처리합니다. 취소 및 환불 요청은 Apple의 관리 경로를 이용하세요.'],
      ['storage','기기에 저장되는 정보','앱은 사용 설정, 최초 실행 날짜 및 알림 확장 기능에 필요한 일부 상태를 기기에 저장합니다. 선택한 교통수단이나 알림 내용 등이 해당됩니다. 실시간 조회 결과는 잠시 캐시됩니다. Apple 설정에 따라 시스템 백업에 앱 데이터가 포함될 수 있습니다. 앱을 삭제하면 로컬 데이터를 삭제할 수 있지만 Apple의 거래 기록이 지워지거나 구독이 취소되지는 않습니다.'],
      ['contact-data','지원 문의로 제공한 정보','이메일로 문의하면 이메일 주소, 문제 설명, 첨부 파일을 답변과 문제 해결에 사용합니다. 비밀번호, 전체 결제 정보 또는 불필요한 위치 정보는 보내지 마세요. 문의 정보는 연락 처리와 필요한 기록에 사용됩니다. 제공하신 정보의 열람, 수정 또는 삭제를 원하면 이 페이지의 연락처로 요청해 주세요.'],
      ['website','웹사이트 및 외부 링크','이 웹사이트는 계정 등록을 요구하지 않으며 광고 추적 또는 분석 스크립트를 사용하지 않습니다. 언어 선택은 쿠키가 아닌 URL에 반영됩니다. 호스팅·네트워크 제공자는 페이지 전송, 보안 및 유지보수를 위해 IP 주소와 연결 기록을 처리할 수 있으며 보관 방식은 제공자의 정책을 따릅니다. 외부 사이트나 이메일 링크를 이용하면 해당 서비스의 정책이 적용됩니다.'],
      ['choices','선택권 및 방침 변경','시스템 권한 변경, 기능 사용 중단, 앱 삭제가 가능하며 직접 제공한 지원 문의 정보에 관해 연락할 수 있습니다. 제3자가 보관하는 정보에 관한 요청은 해당 제공자에게 해주세요. 이 방침이 변경되면 페이지에 날짜를 표시하고, 데이터 사용에 중대한 변경이 있으면 필요에 따라 추가로 안내합니다.']
    ],providerTitle:'서비스 제공자 및 관련 링크',providerLabels:['Apple 개인정보 정책','Apple 위치 개인정보','TDX 교통 데이터','타이베이 MRT','Apple 구독 관리','Apple 이용 약관']
  }
};

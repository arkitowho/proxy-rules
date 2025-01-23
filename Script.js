// 国内DNS服务器
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
];
// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query" // Mullvad(备)
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  // 广告域名列表
  "Reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  // 需代理列表
  "Proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  // 直连列表
  "Direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  // 私有网络列表
  "Private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  // GFW列表
  "GFW": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  // 非中国大陆使用的顶级域名列表
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  // Telegram 使用的 IP 地址列表
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  // 中国大陆 IP 地址列表
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  // 局域网 IP 及保留 IP 地址列表
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  // 需要Bypass的常见软件列表
  "Applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "iCloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "Apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "OpenAI": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/blackmatrix7/openai.yaml"
  },
  "Gemini": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gemini/Gemini.yaml",
    "path": "./ruleset/blackmatrix7/gemini.yaml"
  },
  "Claude": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Claude/Claude.yaml",
    "path": "./ruleset/blackmatrix7/claude.yaml"
  },
  "Soundcloud": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/SoundCloud/SoundCloud.yaml",
    "path": "./ruleset/blackmatrix7/soundcloud.yaml"
  },
  "OneDrive": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OneDrive/OneDrive.yaml",
    "path": "./ruleset/blackmatrix7/onedrive.yaml"
  },
  "Spotify": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Spotify/Spotify.yaml",
    "path": "./ruleset/blackmatrix7/spotify.yaml"
  },
  "SteamCN": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/SteamCN/SteamCN.yaml",
    "path": "./ruleset/blackmatrix7/steamcn.yaml"
  },
  "GameDownloadCN": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/GameDownloadCN/GameDownloadCN.yaml",
    "path": "./ruleset/blackmatrix7/gamedownloadcn.yaml"
  },
  "Bing": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Bing/Bing.yaml",
    "path": "./ruleset/blackmatrix7/bing.yaml"
  },
  "NIKKE": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/Nikke/Nikke.yaml",
    "path": "./ruleset/blackmatrix7/nikke.yaml"
  },
  "EpicGames": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Epic/Epic.yaml",
    "path": "./ruleset/blackmatrix7/epic.yaml"
  },
  "Ubisoft": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Ubisoft/Ubisoft.yaml",
    "path": "./ruleset/blackmatrix7/ubisoft.yaml"
  },
  "BlueArchiveGB": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/arkitowho/verge-rules@main/rules/BlueArchiveGB.yaml",
    "path": "./ruleset/arkitowho/bluearchivegb.yaml"
  },
  // ignaciocastro/a-dove-is-dumb | Adobe正版检测屏蔽
  "AdobeAGSBlock": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/ignaciocastro/a-dove-is-dumb@main/clash.yaml",
    "path": "./ruleset/ignaciocastro/adobeagsblock.yaml"
  },
}
// 规则
const rules = [
  // Process
  "PROCESS-NAME,nikke.exe,Japan",
  "PROCESS-NAME,intl_service.exe,Japan",
  // Process Bypass
  "PROCESS-NAME,SoulseekQt.exe,DIRECT",
  "PROCESS-NAME,parsecd.exe,DIRECT",
  "PROCESS-NAME,pservice.exe,DIRECT",
  "PROCESS-NAME,sunshine.exe,DIRECT",
  "PROCESS-NAME,sunshinesvc.exe,DIRECT",
  // Bypass
  "DOMAIN-SUFFIX,bemani.cc,Bypass",
  "DOMAIN-SUFFIX,komani.moe,Bypass",
  "DOMAIN-SUFFIX,extransfer.xyz,Bypass",
  "DOMAIN-SUFFIX,suu-fun.com,Bypass",
  "DOMAIN-SUFFIX,store.ubi.com,Bypass",
  "DOMAIN-SUFFIX,wzbc.edu.cn,Bypass",
  "DOMAIN-SUFFIX,kms.loli.beer,Bypass",
  // Piracy Host Block
    // Ample Sound
  "DOMAIN-SUFFIX,dl.amplesound.net,REJECT",
  "DOMAIN-SUFFIX,d3.amplesound.net,REJECT",
    // Rekordbox
  "DOMAIN-SUFFIX,cloud.kuvo.com,REJECT",
  "DOMAIN-SUFFIX,rb-share.kuvo.com,REJECT",
  "DOMAIN-SUFFIX,accounts.us1.gigya.com,REJECT",
  "DOMAIN-SUFFIX,us1.gigya.com,REJECT",
    // Goodhertz
  "DOMAIN-SUFFIX,www.expatriate.goodhertz.co,REJECT",
  "DOMAIN-SUFFIX,expatriate.goodhertz.co,REJECT",
  "DOMAIN-SUFFIX,goodhertz.com,REJECT",
  "DOMAIN-SUFFIX,juce.com,REJECT",
  "DOMAIN-SUFFIX,www.juce.com,REJECT",
    // Melda Production
  "DOMAIN-SUFFIX,www.meldaproduction.com,REJECT",
    // SonicAcademy ANA
  "DOMAIN-SUFFIX,www.sonicacademy.com,REJECT",
    // Virtual DJ
  "DOMAIN-SUFFIX,live.virtualdj.com,REJECT",
    // LennarDigital
  "DOMAIN-SUFFIX,www.lennardigital.com,REJECT",
  "DOMAIN-SUFFIX,rhea.exsilia.net,REJECT",
    // SoundID
  "DOMAIN-SUFFIX,activation.sonarworks.com,REJECT",
  "DOMAIN-SUFFIX,updates.sonarworks.com,REJECT",
  "DOMAIN-SUFFIX,analytics.sonarworks.com,REJECT",
  "DOMAIN-SUFFIX,accounts.sonarworks.com,REJECT",
    // Adobe AGS
  "RULE-SET,AdobeAGSBlock,REJECT",
  // Rules
  "RULE-SET,BlueArchiveGB,Taiwan",
  // blackmatrix7 规则集
  "RULE-SET,SteamCN,Bypass",
  "RULE-SET,GameDownloadCN,Bypass",
  "RULE-SET,OpenAI,All AI",
  "RULE-SET,Gemini,All AI",
  "RULE-SET,Claude,All AI",
  "RULE-SET,OneDrive,OneDrive",
  "RULE-SET,Soundcloud,United State",
  "RULE-SET,Spotify,United State",
  "RULE-SET,Bing,Bing",
  "RULE-SET,NIKKE,Japan",
  "RULE-SET,EpicGames,Epic Games",
  "RULE-SET,Ubisoft,Bypass",
  // Loyalsoldier 规则集
  "RULE-SET,Applications,Bypass",
  "RULE-SET,Private,Bypass",
  "RULE-SET,Reject,AD Block",
  "RULE-SET,iCloud,iCloud",
  "RULE-SET,Apple,Apple",
  "RULE-SET,GFW,Proxy",
  "RULE-SET,tld-not-cn,Proxy",
  "RULE-SET,lancidr,Bypass,no-resolve",
  "RULE-SET,cncidr,Bypass,no-resolve",
  "RULE-SET,telegramcidr,Telegram,no-resolve",
  "RULE-SET,Direct,Bypass",
  "RULE-SET,Proxy,Proxy",
  // 其他规则
  "DOMAIN-SUFFIX,taptap.io,Hong Kong",
  "GEOIP,LAN,Bypass,no-resolve",
  "GEOIP,CN,Bypass,no-resolve",
  "MATCH,Match"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "http://www.gstatic.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "Proxy",
      "type": "select",
      "proxies": ["Fallback"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "Fallback",
      "type": "fallback",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg"
    },
    {
      ...groupBaseOption,
      "name": "Telegram",
      "type": "select",
      "proxies": ["Proxy", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    },
    {
      ...groupBaseOption,
      "name": "All AI",
      "type": "select",
      "proxies": ["Proxy", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    },
    {
      ...groupBaseOption,
      "name": "Bing",
      "type": "select",
      "proxies": ["Proxy", "Bypass", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bing.svg"
    },
    {
      ...groupBaseOption,
      "name": "OneDrive",
      "type": "select",
      "proxies": ["Bypass", "Proxy", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/onedrive.svg"
    },
    {
      ...groupBaseOption,
      "name": "Apple",
      "type": "select",
      "proxies": ["Proxy", "Bypass", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple_2.png"
    },
    {
      ...groupBaseOption,
      "name": "iCloud",
      "type": "select",
      "proxies": ["Proxy", "Bypass", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/iCloud.png"
    },
    {
      ...groupBaseOption,
      "name": "Epic Games",
      "type": "select",
      "proxies": ["Proxy", "Bypass", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/epic.svg"
    },
    {
      ...groupBaseOption,
      "name": "AD Block",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    },
    {
      ...groupBaseOption,
      "name": "Bypass",
      "type": "select",
      "proxies": ["DIRECT", "Proxy"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "Match",
      "type": "select",
      "proxies": ["Proxy", "Bypass"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
    },
    {
      ...groupBaseOption,
      "name": "Hong Kong",
      "type": "select",
      "include-all": true,
      "filter": "HK|🇭🇰",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg"
    },
    {
      ...groupBaseOption,
      "name": "Japan",
      "type": "select",
      "include-all": true,
      "filter": "JP|🇯🇵",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/jp.svg"
    },
    {
      ...groupBaseOption,
      "name": "Taiwan",
      "type": "select",
      "include-all": true,
      "filter": "CN|🇨🇳|TW",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/cn.svg"
    },
    {
      ...groupBaseOption,
      "name": "United State",
      "type": "select",
      "include-all": true,
      "filter": "US|🇺🇸",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/us.svg"
    },
    {
      ...groupBaseOption,
      "name": "Singapore",
      "type": "select",
      "include-all": true,
      "filter": "SG|🇸🇬",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sg.svg"
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}
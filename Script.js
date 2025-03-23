// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
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
    "PROCESS-NAME,sunshinesvc.exe,DIRECT",
    "PROCESS-NAME,zerotier-one_x64.exe,DIRECT",
    "PROCESS-NAME,tailscaled.exe,DIRECT",
  // Domain
  "DOMAIN-SUFFIX,bemani.cc,DIRECT",
  "DOMAIN-SUFFIX,komani.moe,DIRECT",
  "DOMAIN-SUFFIX,extransfer.xyz,DIRECT",
  "DOMAIN-SUFFIX,suu-fun.com,DIRECT",
  "DOMAIN-SUFFIX,store.ubi.com,DIRECT",
  "DOMAIN-SUFFIX,wzbc.edu.cn,DIRECT",
  "DOMAIN-SUFFIX,kms.loli.beer,DIRECT",
  "DOMAIN-SUFFIX,acgrip.com,Hong Kong",
  "DOMAIN-SUFFIX,taptap.io,Hong Kong",
  // Piracy Host Block
    // SonicAcademy ANA
  "DOMAIN-SUFFIX,www.sonicacademy.com,REJECT",
    // Adobe AGS
  "RULE-SET,AdobeAGSBlock,REJECT",
  // Rules
  "RULE-SET,BlueArchiveGB,Taiwan",
  // blackmatrix7 规则集
  "RULE-SET,SteamCN,DIRECT",
  "RULE-SET,GameDownloadCN,DIRECT",
  "RULE-SET,OpenAI,All AI",
  "RULE-SET,Gemini,All AI",
  "RULE-SET,Claude,All AI",
  "RULE-SET,OneDrive,OneDrive",
  "RULE-SET,Soundcloud,United State",
  "RULE-SET,Spotify,United State",
  "RULE-SET,Bing,Bing",
  "RULE-SET,NIKKE,Japan",
  "RULE-SET,EpicGames,Epic Games",
  "RULE-SET,Ubisoft,DIRECT",
  // Loyalsoldier 规则集
  "RULE-SET,Applications,DIRECT",
  "RULE-SET,Private,DIRECT",
  "RULE-SET,Reject,AD Block",
  "RULE-SET,iCloud,iCloud",
  "RULE-SET,Apple,Apple",
  "RULE-SET,GFW,Proxy",
  "RULE-SET,tld-not-cn,Proxy",
  "RULE-SET,lancidr,DIRECT,no-resolve",
  "RULE-SET,cncidr,DIRECT,no-resolve",
  "RULE-SET,telegramcidr,Telegram,no-resolve",
  "RULE-SET,Direct,DIRECT",
  "RULE-SET,Proxy,Proxy",
  // 其他规则
  "GEOIP,LAN,DIRECT,no-resolve",
  "GEOIP,CN,DIRECT,no-resolve",
  "MATCH,Match"
];
// 代理组通用配置
const groupBaseOption = {
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "Proxy",
      "type": "select",
      "proxies": ["Fallback"],
      "include-all": true,
    },
    {
      ...groupBaseOption,
      "name": "Fallback",
      "type": "fallback",
      "include-all": true,
    },
    {
      ...groupBaseOption,
      "name": "Telegram",
      "type": "select",
      "proxies": ["Proxy", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
    },
    {
      ...groupBaseOption,
      "name": "All AI",
      "type": "select",
      "proxies": ["Proxy", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
    },
    {
      ...groupBaseOption,
      "name": "Bing",
      "type": "select",
      "proxies": ["Proxy", "DIRECT", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
    },
    {
      ...groupBaseOption,
      "name": "OneDrive",
      "type": "select",
      "proxies": ["DIRECT", "Proxy", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "include-all": true,
    },
    {
      ...groupBaseOption,
      "name": "Apple",
      "type": "select",
      "proxies": ["Proxy", "DIRECT", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
    },
    {
      ...groupBaseOption,
      "name": "iCloud",
      "type": "select",
      "proxies": ["Proxy", "DIRECT", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "include-all": true,
    },
    {
      ...groupBaseOption,
      "name": "Epic Games",
      "type": "select",
      "proxies": ["Proxy", "DIRECT", "Hong Kong", "Japan", "United State", "Taiwan", "Singapore"],
      "include-all": true,
    },
    {
      ...groupBaseOption,
      "name": "AD Block",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
    },
    {
      ...groupBaseOption,
      "name": "Match",
      "type": "select",
      "proxies": ["Proxy", "DIRECT"],
    },
    {
      ...groupBaseOption,
      "name": "Hong Kong",
      "type": "select",
      "include-all": true,
      "filter": "HK|🇭🇰|香港",
    },
    {
      ...groupBaseOption,
      "name": "Japan",
      "type": "select",
      "include-all": true,
      "filter": "JP|🇯🇵|日本",
    },
    {
      ...groupBaseOption,
      "name": "Taiwan",
      "type": "select",
      "include-all": true,
      "filter": "CN|🇨🇳|TW|台湾",
    },
    {
      ...groupBaseOption,
      "name": "United State",
      "type": "select",
      "include-all": true,
      "filter": "US|🇺🇸|美国",
    },
    {
      ...groupBaseOption,
      "name": "Singapore",
      "type": "select",
      "include-all": true,
      "filter": "SG|🇸🇬|新加坡",
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}
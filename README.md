# Verge Rules
自用规则，基于[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev)的Script模式

整合自blackmatrix7，Loyalsoldier，ignaciocastro/a-dove-is-dumb，修改自Script模板

## 注意事项 
脚本会覆盖订阅自带规则，去除对我而言无用的规则组，规则集，精简规则，建立我自己的规则组

Without DNS Policy将不根据流量地区区分海外网站与大陆网站走各自地区的DNS，一律使用阿里与腾讯的公共DNS解析，可加快解析速度

## 部分规则如下：
- 强制Soundcloud，Spotify走US节点
- Steam CM Server直连防止更改下载服务器至非中国大陆地区，同时可正常使用社区
- EpicGames默认直连
- All AI整合了本人常用的如OpenAI，Gemini，Claude，强制走US节点
- 以下游戏强制走对应节点：
    - Blue Archive GB -> Hong Kong/Taiwan/Macao
    - NIKKE -> JP
- 以下应用屏蔽联网正版检测：
    - Ample Sound
    - Rekordbox
    - Goodhertz
    - Melda Production
    - SonicAcademy ANA
    - Virtual DJ
    - LennarDigital
    - SoundID
    - Adobe Creative Cloud
---
sidebar_position: 1
---


# One Page Component Sample

import TOCInline from '@theme/TOCInline';

Only heading 2 or above will be in the inline TOC
<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel = {6} />


## Simple Table Sample

| Date | Version Number | Document Changes |
|---|---|---|
| 01/07/2019 | 0.01 | Initial Draft |
| 29/08/2019 | 0.02 | Added more detail for users |
| 09/12/2020 | 1.2 | Complete rewrite following CEN collaboration and design changes. |

## Image, Text, Bullet, Merged Cell Sample

| <!-- --> | <!-- --> |
|---|---|
|![sensor-node-sn-sf-001](/img/sensor-node-sn-sf-001.jpg) | 1.2	Key Features <br/>- Small & Discrete: blends into your home. <br/>- Secure. <br/> - Affordable. <br/> - Highly accurate. <br/> - Easy to set up. <br/>- Wi-Fi / Sigfox LPWAN - best-in-class RF performance. <br/>- Android / iOS app. <br/>- Web portal. <br/>- Fully integrated analytics reporting. <br/>- Made in New Zealand. |



```mdx-code-block
import ProductKeyFeatures from '/src/components/ProductKeyFeatures';

<ProductKeyFeatures />
```